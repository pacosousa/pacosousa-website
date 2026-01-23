/**
 * comments.js - Sistema de comentários dinâmico e persistente
 * Versão 2.0 - Auto-detecção de Artigo e Injeção Automática
 * Paco Sousa - Diários de um Nômade
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { 
    getFirestore, collection, addDoc, onSnapshot, serverTimestamp, query 
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { 
    getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

// 1. Configuração Automática do Ambiente
const firebaseConfig = JSON.parse(__firebase_config);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// 2. Identificação Automática do Artigo pela URL
const getArticleId = () => {
    const path = window.location.pathname;
    const fileName = path.split('/').pop() || 'index';
    return fileName.replace('.html', '');
};

let currentUser = null;
const currentArticleId = getArticleId();

const translations = {
    'pt': { title: 'Comentários', name: 'Teu nome...', text: 'O que achaste deste roteiro?', btn: 'Publicar Comentário', loading: 'Lendo mensagens...', empty: 'Ninguém comentou ainda. Seja o primeiro!' },
    'es': { title: 'Comentarios', name: 'Tu nombre...', text: '¿Qué te pareció este itinerario?', btn: 'Publicar Comentario', loading: 'Cargando...', empty: 'Nadie ha comentado aún. ¡Sé el primero!' },
    'en': { title: 'Comments', name: 'Your name...', text: 'What did you think of this trip?', btn: 'Post Comment', loading: 'Loading...', empty: 'No comments yet. Be the first!' }
};

// 3. Injeção Automática na Página
function injectCommentsUI() {
    // Tenta encontrar o final do artigo ou a seção de relacionados
    const anchor = document.querySelector('section.mt-32') || document.querySelector('article') || document.body;
    
    if (document.getElementById('paco-comments-container')) return;

    const lang = localStorage.getItem('paco_blog_lang') || 'pt';
    const t = translations[lang];

    const container = document.createElement('div');
    container.id = 'paco-comments-container';
    container.className = 'max-w-4xl mx-auto px-6 py-20 border-t border-white/5 mt-20';
    container.innerHTML = `
        <h3 class="text-3xl font-black text-white mb-10 italic uppercase tracking-tighter">${t.title}</h3>
        
        <div class="bg-[#161616] p-8 rounded-[2rem] border border-white/5 mb-12 shadow-2xl">
            <div class="space-y-4">
                <input type="text" id="c-name" placeholder="${t.name}" class="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-[#FF3366] outline-none transition-all font-medium">
                <textarea id="c-text" rows="4" placeholder="${t.text}" class="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-[#FF3366] outline-none transition-all resize-none font-medium"></textarea>
                <button id="c-btn" class="w-full bg-[#FF3366] text-white font-black py-4 rounded-xl hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-widest text-xs">
                    ${t.btn}
                </button>
            </div>
        </div>

        <div id="c-list" class="space-y-6">
            <div class="flex justify-center py-10"><div class="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FF3366]"></div></div>
        </div>
    `;

    // Se achou a seção de "relacionados", insere ANTES. Se não, no final do artigo.
    if (anchor.tagName === 'SECTION') {
        anchor.parentNode.insertBefore(container, anchor);
    } else {
        anchor.appendChild(container);
    }

    document.getElementById('c-btn').onclick = handlePost;
}

// 4. Lógica de Banco de Dados (Firestore)
async function handlePost() {
    const name = document.getElementById('c-name').value.trim();
    const text = document.getElementById('c-text').value.trim();
    
    if (!name || !text || !currentUser) return;

    try {
        await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'comments'), {
            articleId: currentArticleId,
            author: name,
            content: text,
            date: serverTimestamp(),
            status: 'approved', // Mudança para 'pending' se desejar moderação prévia
            uid: currentUser.uid
        });

        document.getElementById('c-text').value = '';
    } catch (err) {
        console.error("Erro ao salvar comentário:", err);
    }
}

function listenComments() {
    const colRef = collection(db, 'artifacts', appId, 'public', 'data', 'comments');
    
    onSnapshot(colRef, (snapshot) => {
        const list = document.getElementById('c-list');
        if (!list) return;

        let items = [];
        snapshot.forEach(doc => {
            const data = doc.data();
            if (data.articleId === currentArticleId && data.status === 'approved') {
                items.push({ id: doc.id, ...data });
            }
        });

        // Ordenar por data (mais recente no topo)
        items.sort((a, b) => (b.date?.seconds || 0) - (a.date?.seconds || 0));

        if (items.length === 0) {
            const lang = localStorage.getItem('paco_blog_lang') || 'pt';
            list.innerHTML = `<p class="text-zinc-500 italic text-center py-10">${translations[lang].empty}</p>`;
            return;
        }

        list.innerHTML = items.map(item => `
            <div class="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                <div class="flex justify-between items-center mb-3">
                    <span class="font-bold text-[#4DD0E1] text-sm">${item.author}</span>
                    <span class="text-[9px] text-zinc-600 font-bold uppercase tracking-widest">
                        ${item.date ? new Date(item.date.seconds * 1000).toLocaleDateString() : 'Agora'}
                    </span>
                </div>
                <p class="text-zinc-300 text-sm leading-relaxed">${item.content}</p>
            </div>
        `).join('');
    });
}

// 5. Autenticação e Start
async function start() {
    try {
        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
            await signInWithCustomToken(auth, __initial_auth_token);
        } else {
            await signInAnonymously(auth);
        }
        
        onAuthStateChanged(auth, (user) => {
            currentUser = user;
            if (user) {
                injectCommentsUI();
                listenComments();
            }
        });
    } catch (e) {
        console.error("Erro na inicialização:", e);
    }
}

// Executa quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
} else {
    start();
}