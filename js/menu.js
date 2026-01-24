/**
 * menu.js - Gerenciamento centralizado da navegação, busca, rodapé e newsletter
 * Versão 23.0 - Busca Inteligente (Display Limpo + Keywords Ocultas)
 * Paco Sousa - Diários de um Nômade
 */

const navTranslations = {
    'pt': {
        'nav_roteiros': 'Roteiros',
        'nav_sa': 'América do Sul',
        'nav_eu': 'Europa',
        'nav_lifestyle': 'Estilo de Vida',
        'back_button': 'Voltar',
        'search_placeholder': 'Buscar roteiros, países...',
        'nav_argentina': 'Argentina',
        'nav_chile': 'Chile',
	'nav_portugal': 'Portugal',
        'nav_course': 'Aulas de Português',
        'cookie_text': 'Utilizamos cookies para garantir que tens a melhor experiência no nosso blog.',
        'cookie_btn': 'Aceitar',
        'modal_title': 'Escolhe o teu idioma',
        'modal_subtitle': 'Para uma melhor experiência de leitura',
        'news_title': 'Newsletter do Paco ✍️',
        'news_desc': 'Recebe roteiros exclusivos e dicas nômades no teu e-mail.',
        'news_placeholder': 'Teu melhor e-mail...',
        'news_btn': 'Subscrever',
        'news_success': 'Boa! Você vai receber as novidades em Português.',
        'news_lang_prefix': 'Idioma:',
	'news_indicator': '🇧🇷 PT',
	'label_email': 'E-mail',
        'label_news_horizontal': 'Fique por dentro das novidades:',
        'news_btn_short': 'Ok',
        // Títulos Limpos para o Menu
        'art_arg_econ': 'Argentina: Realidade 2026',
        'art_ba_gratis': 'Buenos Aires Grátis',
        'art_salta': 'Salta, la linda',
        'art_atacama': 'Deserto do Atacama',
        'art_santiago': 'Santiago do Chile',
        'art_gibraltar': 'Interrogatório em Gibraltar',
        'art_wrapped': 'Wrapped 2025 📸',
        'art_jornada': 'O Começo da Jornada',
        'art_vida_nomade': 'Minha Vida Nômade',
        'art_bus_atacama': 'Ônibus Quebrado no Deserto',
	'art_lisboa': 'Lisboa',
	'footer_copy': '© 2026 Diários de um Nômade. Por Paco Sousa.'
    },
    'es': {
        'nav_roteiros': 'Itinerarios',
        'nav_sa': 'América del Sur',
        'nav_eu': 'Europa',
        'nav_lifestyle': 'Estilo de Vida',
        'back_button': 'Volver',
        'search_placeholder': 'Buscar rutas, países...',
        'nav_argentina': 'Argentina',
        'nav_chile': 'Chile',
	'nav_portugal': 'Portugal',
        'nav_course': 'Clases de Portugués',
        'cookie_text': 'Utilizamos cookies para asegurar que tengas la mejor experiencia en nuestro blog.',
        'cookie_btn': 'Aceptar',
        'modal_title': 'Elige tu idioma',
        'modal_subtitle': 'Para una mejor experiencia de lectura',
        'news_title': 'Newsletter de Paco ✍️',
        'news_desc': 'Recibe rutas exclusivas y consejos nómadas en tu email.',
        'news_placeholder': 'Tu melhor email...',
        'news_btn': 'Suscribirme',
        'news_success': '¡Genial! Recibirás las novedades en Español.',
        'news_lang_prefix': 'Idioma:',
	'news_indicator': '🇪🇸 ES',
	'label_email': 'E-mail',
	'label_news_horizontal': 'Mantenete al tanto de las novedades:',
	'news_btn_short': 'Ok',
        'art_arg_econ': 'Argentina: Realidad 2026',
        'art_ba_gratis': 'Buenos Aires Gratis',
        'art_salta': 'Salta, la linda',
        'art_atacama': 'Desierto de Atacama',
        'art_santiago': 'Santiago de Chile',
        'art_gibraltar': 'Interrogatorio em Gibraltar',
        'art_wrapped': 'Wrapped 2025 📸',
        'art_jornada': 'El Comienzo de la Jornada',
        'art_vida_nomade': 'Mi Vida Nómada',
        'art_bus_atacama': 'Autobús Averiguado en el Desierto',
	'art_lisboa': 'Lisboa',
	'footer_copy': '© 2026 Diarios de un Nómada. Por Paco Sousa.'
    },
    'en': {
        'nav_roteiros': 'Itineraries',
        'nav_sa': 'South America',
        'nav_eu': 'Europe',
        'nav_lifestyle': 'Lifestyle',
        'back_button': 'Back',
        'search_placeholder': 'Search itineraries, countries...',
        'nav_argentina': 'Argentina',
        'nav_chile': 'Chile',
	'nav_portugal': 'Portugal',
        'nav_course': 'Portuguese Classes',
        'cookie_text': 'We use cookies to ensure you get the best experience on our blog.',
        'cookie_btn': 'Accept',
        'modal_title': 'Choose your language',
        'modal_subtitle': 'For a better reading experience',
        'news_title': "Paco's Newsletter ✍️",
        'news_desc': 'Get exclusive itineraries and nomad tips in your inbox.',
        'news_placeholder': 'Your best email...',
        'news_btn': 'Subscribe',
        'news_success': 'Great! You will receive updates in English.',
        'news_lang_prefix': 'Language:',
	'news_indicator': '🇺🇸 EN',
	'label_email': 'Email',
	'label_news_horizontal': 'Stay up to date with the latest news:',
	'news_btn_short': 'OK',
        'art_arg_econ': 'Argentina: 2026 Reality',
        'art_ba_gratis': 'Free Buenos Aires',
        'art_salta': 'Salta, la linda',
        'art_atacama': 'Atacama Desert',
        'art_santiago': 'Santiago de Chile',
        'art_gibraltar': 'Interrogation in Gibraltar',
        'art_wrapped': 'Wrapped 2025 📸',
        'art_jornada': 'The Beginning of a Journey',
        'art_vida_nomade': 'My Nomad Life',
        'art_bus_atacama': 'Broken Bus in the Desert',
	'art_lisboa': 'Lisbon',
	'footer_copy': '© 2026 Nomad Diaries. By Paco Sousa.'
    }
};

// DICIONÁRIO DE BUSCA (Keywords ocultas para tags e países)
const artKeywords = {
    'pt': {
        'art_arg_econ': 'argentina economia buenos aires dicas atualidade 2026',
        'art_ba_gratis': 'argentina buenos aires grátis dicas roteiro',
        'art_salta': 'argentina salta norte roteiro dicas paco lindo',
        'art_atacama': 'chile deserto atacama aventura roteiro dicas',
        'art_santiago': 'chile santiago capital roteiro dicas primeira viagem',
        'art_gibraltar': 'europa espanha reino unido perrengue fronteira interrogatório',
        'art_wrapped': 'resumo 2025 fotos melhores momentos paco',
        'art_jornada': 'nômade digital estilo de vida começo história paco',
        'art_vida_nomade': 'lifestyle resumo jornada nomadismo digital',
        'art_bus_atacama': 'chile deserto perrengue ônibus quebrado aventura',
	'art_lisboa': 'portugal europa roteiro dicas eurotrip'
    },
    'es': {
        'art_arg_econ': 'argentina economía buenos aires consejos actualidad 2026',
        'art_ba_gratis': 'argentina buenos aires gratis consejos ruta',
        'art_salta': 'argentina salta norte ruta consejos paco lindo',
        'art_atacama': 'chile desierto atacama aventura ruta consejos',
        'art_santiago': 'chile santiago capital ruta consejos primer viaje',
        'art_gibraltar': 'europa españa reino unido problemas frontera interrogatorio',
        'art_wrapped': 'resumen 2025 fotos mejores momentos paco',
        'art_jornada': 'nómada digital estilo de vida comienzo historia paco',
        'art_vida_nomade': 'lifestyle resumen jornada nomadismo digital',
        'art_bus_atacama': 'chile desierto problemas autobús roto aventura',
	'art_lisboa': 'portugal europa ruta consejos eurotrip'

    },
    'en': {
        'art_arg_econ': 'argentina economy buenos aires tips news 2026',
        'art_ba_gratis': 'argentina buenos aires free tips itinerary',
        'art_salta': 'argentina salta north itinerary tips paco beautiful',
        'art_atacama': 'chile desert atacama adventure itinerary tips',
        'art_santiago': 'chile santiago capital itinerary tips first trip',
        'art_gibraltar': 'europe spain uk border ordeal interrogation',
        'art_wrapped': 'summary 2025 photos best moments paco',
        'art_jornada': 'digital nomad lifestyle beginning paco story',
        'art_vida_nomade': 'lifestyle summary journey digital nomadism',
        'art_bus_atacama': 'chile desert ordeal broken bus adventure',
	'art_lisboa': 'portugal europe tips itinerary eurotrip'
    }
};

const setLangPreference = (lang) => localStorage.setItem('paco_blog_lang', lang);
const getLangPreference = () => localStorage.getItem('paco_blog_lang');
const setCookieConsent = () => localStorage.setItem('paco_cookie_consent', 'true');
const getCookieConsent = () => localStorage.getItem('paco_cookie_consent');



// SCHEMA (Identidade Paco - Versão Blindada 2026)
const injectGlobalSchema = () => {
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": "https://pacosousa.com/#person",
          "name": "Paco Sousa",
          "url": "https://pacosousa.com/",
          "image": "https://pacosousa.com/images/logo-blog.webp",
          "description": "Nômade digital e produtor de conteúdo sobre viagens e estilo de vida.",
          "sameAs": [
            "https://www.linkedin.com/in/franciscosjunior/",
            "https://www.instagram.com/opacosousa/",
            "https://www.tiktok.com/@opacosousa"
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://pacosousa.com/#website",
          "url": "https://pacosousa.com/",
          "name": "Diários de um Nômade",
          "publisher": { "@id": "https://pacosousa.com/#person" },
          "inLanguage": ["pt-BR", "es", "en"]
        }
      ]
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
};
injectGlobalSchema();


// FILTRO DA HOME (Busca Profunda nos Cards: Título, Tags, Categoria, Descrição)
window.filterArticles = function(query) {
    const cards = document.querySelectorAll('.article-card');
    if (!cards.length) return;
    const lowerQuery = query.toLowerCase();
    cards.forEach(card => {
        const title = card.querySelector('.article-title')?.innerText.toLowerCase() || "";
        const tags = Array.from(card.querySelectorAll('.article-tag')).map(t => t.innerText.toLowerCase()).join(' ');
        const cat = card.querySelector('[id^="cat"]')?.innerText.toLowerCase() || "";
        const desc = card.querySelector('.article-desc')?.innerText.toLowerCase() || "";
        const searchString = `${title} ${tags} ${cat} ${desc}`;
        card.style.display = searchString.includes(lowerQuery) ? "" : "none";
    });
};

// BUSCA UNIFICADA (Sugestões + Filtro)
window.handleSearch = function(event, query) {
    const suggestionsBox = document.getElementById('search-suggestions');
    const isArticlePage = window.location.pathname.includes('/articles/');
    const isSub = window.location.pathname.includes('/articles/') || window.location.pathname.includes('/lp/');
    const basePath = isSub ? '../' : './';
    const lang = getLangPreference() || 'pt';

    if (event.key === 'Enter' && query.length > 2) {
        if (isArticlePage) {
            window.location.href = `${basePath}index.html?search=${encodeURIComponent(query)}`;
        } else {
            suggestionsBox?.classList.add('hidden');
        }
        return;
    }

    if (!isArticlePage) {
        window.filterArticles(query);
    }

    if (!suggestionsBox) return;
    if (query.length < 2) {
        suggestionsBox.classList.add('hidden');
        return;
    }

    // BUSCA NAS SUGESTÕES: Agora olha para o Título E para as Keywords ocultas
    const lowerQuery = query.toLowerCase();
    const matches = Object.keys(navTranslations[lang])
        .filter(key => {
            if (!key.startsWith('art_')) return false;
            const titleMatch = navTranslations[lang][key].toLowerCase().includes(lowerQuery);
            const keywordMatch = (artKeywords[lang]?.[key] || "").toLowerCase().includes(lowerQuery);
            return titleMatch || keywordMatch;
        })
        .map(key => ({ 
            text: navTranslations[lang][key], // Exibe apenas o título limpo
            url: key.replace('art_', '').replace(/_/g, '-') 
        }));

    if (matches.length > 0) {
        suggestionsBox.innerHTML = matches.map(m => `
            <div onclick="window.location.href='${basePath}index?search=${encodeURIComponent(m.text)}'" 
                 class="px-4 py-3 hover:bg-[#FF3366]/10 text-sm text-gray-300 cursor-pointer border-b border-white/5 last:border-0 transition-colors">
                ${m.text}
            </div>
        `).join('');
        suggestionsBox.classList.remove('hidden');
    } else {
        suggestionsBox.classList.add('hidden');
    }
};

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu-container');
    if (menu) menu.classList.toggle('hidden');
}

function injectSocialShare() {
    const isArticlePage = (window.location.pathname.includes('/articles/') || 
                          (window.location.pathname.endsWith('.html') && !window.location.pathname.includes('index.html'))) &&
                          window.location.pathname !== '/' && window.location.pathname !== '/index.html';
    
    if (!isArticlePage) return;

    // Mudamos as classes para colocar margem no topo e borda em cima (estilo rodapé)
    const shareHtml = `
    <div id="social-share-bar-custom" class="flex items-center justify-center gap-2 mt-16 pt-8 border-t border-white/5 w-full">
        <button onclick="shareOnWhatsApp()" class="w-10 h-10 flex items-center justify-center rounded-full bg-[#1A1A1A] hover:bg-[#FF3366] text-white transition-all border border-white/10" title="WhatsApp">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        </button>
        <button onclick="shareOnX()" class="w-10 h-10 flex items-center justify-center rounded-full bg-[#1A1A1A] hover:bg-[#FF3366] text-white transition-all border border-white/10" title="X">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932Zm-1.292 19.494h2.039L6.486 3.24H4.298L17.61 20.647Z"/></svg>
        </button>
        <button onclick="copyToClipboard()" class="w-10 h-10 flex items-center justify-center rounded-full bg-[#1A1A1A] hover:bg-[#FF3366] text-white transition-all border border-white/10" title="Copiar Link">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/></svg>
        </button>
    </div>
    `;

    const container = document.querySelector('article') || document.querySelector('main');
    if (container && !document.getElementById('social-share-bar-custom')) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = shareHtml;
        // Inserimos no final do container (antes do footer injetado)
        container.appendChild(tempDiv.firstElementChild);
    }
}

function injectArticleTopAddons() {
    const isArticlePage = window.location.pathname.includes('/articles/');
    if (!isArticlePage) return;

    const container = document.querySelector('article');
    if (!container) return;

    const lang = getLangPreference() || 'pt';
    const basePath = window.location.pathname.includes('/articles/') ? '../' : './';

    const addonsHtml = `
        <!-- 1º Redes Sociais (Borda apenas embaixo) -->
        <section class="py-8">
            <div class="flex flex-wrap justify-center gap-8 text-center">
                <a href="https://instagram.com/opacosousa" target="_blank" class="flex items-center gap-2 text-gray-400 hover:text-[#FF3366] transition-colors">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.607 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.607-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.607-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-4.78 4.702-4.78 4.78-.058 1.281-.072 1.688-.072 4.948s.014 3.667.072 4.947c.078 4.358 4.58 4.78 4.78 4.78 1.281.058 1.688.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 4.78-4.702 4.78-4.78.058-1.281.072-1.688.072-4.948s-.014-3.667-.072-4.947c-.078-4.358-4.58-4.78-4.78-4.78-1.281-.058-1.688-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    <span class="font-bold text-[10px] uppercase tracking-widest">Instagram</span>
                </a>
                <a href="https://tiktok.com/@opacosousa" target="_blank" class="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13 5.35-.14 10.71-.13 16.06-1.49.28-3.04.24-4.53-.12-3.14-.71-5.32-3.8-5.06-6.99.23-3.14 2.82-5.73 5.96-5.96.38-.03.76-.02 1.14.02v4.03c-.34-.05-.7-.06-1.05-.03-1.44.13-2.67 1.25-2.88 2.68-.31 2.05 1.48 3.99 3.49 3.65.91-.15 1.61-.88 1.83-1.77.16-1.12.1-2.25.1-3.37V0l.33.02z"/></svg>
                    <span class="font-bold text-[10px] uppercase tracking-widest">TikTok</span>
                </a>
                <a href="mailto:paco@ayan.house" class="flex items-center gap-2 text-gray-400 hover:text-[#4DD0E1] transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2V10a2 2 0 002 2z" /></svg>
                    <span class="font-bold text-[10px] uppercase tracking-widest" data-i18n="label_email"></span>
                </a>
            </div>
        </section>

        <!-- 2º Newsletter (Totalmente centralizada, borda apenas embaixo e margem final) -->
<section class="pb-5 border-b border-white/5 flex flex-col items-center justify-center gap-4 md:gap-8 mb-12 px-4">
    <p class="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF3366] text-center md:text-left" data-i18n="label_news_horizontal"></p>
    <div id="newsHorizontalFormContainer" class="flex gap-2 w-full max-w-sm">
        <input type="email" id="newsHorizontalEmail" data-i18n-placeholder="news_placeholder" class="bg-[#1B1B1B] border border-white/5 text-[10px] rounded-xl px-4 py-3 w-full focus:outline-none focus:border-[#FF3366] text-white">
        <button onclick="subscribeNewsletter('newsHorizontalEmail')" class="bg-[#FF3366] text-white text-[10px] font-black uppercase px-6 py-3 rounded-xl hover:scale-105 transition-all shadow-lg" data-i18n="news_btn_short">Ok</button>
    </div>
    <!-- MENSAGEM DE SUCESSO -->
    <p id="newsHorizontalMessage" class="hidden text-[10px] font-bold text-[#4DD0E1] uppercase tracking-widest animate-pulse"></p>
</section>

    `;

    const wrapper = document.createElement('div');
    wrapper.innerHTML = addonsHtml;
    container.prepend(wrapper);
}

function injectMenu() {
    const header = document.getElementById('main-header');
    if (!header) return;

    header.className = "bg-[#111111]/90 backdrop-blur-md fixed w-full top-0 z-[9999] border-b border-white/5";

    const isSub = window.location.pathname.includes('/articles/') || window.location.pathname.includes('/lp/');
    const basePath = isSub ? '../' : './';
    const articlePath = isSub ? './' : 'articles/';
    const currentLang = getLangPreference() || 'pt';

    header.innerHTML = `
      <nav class="container mx-auto px-6 py-4 flex items-center justify-between relative z-50">
        

<div class="flex items-center space-x-3 md:space-x-4">
            <a href="${basePath}index" class="flex items-center space-x-2 font-extrabold text-xl italic tracking-tighter transition-opacity hover:opacity-80 shrink-0">
                <img src="${basePath}images/logo-blog.webp" alt="Logo" class="h-8 w-8 rounded-full border border-[#FF3366]" onerror="this.src='https://ui-avatars.com/api/?name=Paco+Sousa&background=FF3366&color=fff'">
                <span class="text-white hidden md:block">Paco Sousa</span>
            </a>
        </div>

<!-- BUSCA UNIVERSAL (CENTRALIZADA E EQUILIBRADA) -->
<div class="flex-grow flex justify-center px-4 md:px-10">
    <div class="w-full max-w-[450px] relative group">
        <div class="relative">
            <input type="text" onkeyup="window.handleSearch(event, this.value)" 
                   class="bg-[#1B1B1B] border border-gray-800 text-[10px] md:text-xs rounded-full pl-4 pr-10 py-2 w-full focus:outline-none focus:border-[#FF3366] transition-all text-white" 
               data-i18n-placeholder="search_placeholder">
            <svg class="w-3.5 h-3.5 absolute right-3.5 top-2.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </div>
        <!-- Sugestões -->
        <div id="search-suggestions" class="absolute top-full left-0 right-0 mt-2 bg-[#1B1B1B] border border-gray-800 rounded-xl shadow-2xl hidden z-[110] overflow-y-auto max-h-60 md:max-h-80"></div>
    </div>
</div>

        <div class="flex items-center space-x-6">
            <div class="hidden md:flex items-center space-x-8">
                <div class="relative group">
                    <button class="flex items-center space-x-1 hover:text-[#FF3366] py-2 font-medium transition-colors text-white">
                        <span data-i18n="nav_roteiros">Roteiros</span>
                        <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </button>
                    <div class="absolute right-0 mt-0 w-64 bg-[#1B1B1B] border border-gray-800 rounded-xl shadow-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[60]">
                        <div class="relative subgroup">
                            <button class="w-full text-left px-4 py-3 hover:bg-[#FF3366]/10 rounded-lg flex justify-between items-center text-sm font-semibold transition-colors text-white">
                                <span data-i18n="nav_sa">América do Sul</span>
                                <svg class="w-4 h-4 -rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </button>
                            <div class="absolute right-full top-0 w-64 bg-[#1B1B1B] border border-gray-800 rounded-xl shadow-2xl p-2 hidden subgroup-hover:block">
                                <div class="mb-3 border-b border-gray-800 pb-2 text-white">
                                    <p class="px-3 py-1 text-[#74ACDF] text-[10px] font-black uppercase tracking-widest" data-i18n="nav_argentina">Argentina</p>
                                    <a href="${articlePath}salta" class="block px-3 py-2 hover:bg-[#FF3366]/10 rounded-lg text-sm text-gray-400 hover:text-white transition-colors" data-i18n="art_salta">Salta, la linda</a>
                                    <a href="${articlePath}argentina-realidade-economica" class="block px-3 py-2 hover:bg-[#FF3366]/10 rounded-lg text-sm text-gray-400 hover:text-white transition-colors" data-i18n="art_arg_econ">Argentina: Realidade 2026</a>
                                    <a href="${articlePath}lugares-gratis-buenos-aires" class="block px-3 py-2 hover:bg-[#FF3366]/10 rounded-lg text-sm text-gray-400 hover:text-white transition-colors" data-i18n="art_ba_gratis">Buenos Aires Grátis</a>
                                </div>
                                <div class="text-white">
                                    <p class="px-3 py-1 text-[#FF3366] text-[10px] font-black uppercase tracking-widest" data-i18n="nav_chile">Chile</p>
                                    <a href="${articlePath}onibus-quebrado-atacama" class="block px-3 py-2 hover:bg-[#FF3366]/10 rounded-lg text-sm text-gray-400 hover:text-white transition-colors" data-i18n="art_bus_atacama">Ônibus Quebrado no Deserto</a>
                                    <a href="${articlePath}o-deserto-do-atacama" class="block px-3 py-2 hover:bg-[#FF3366]/10 rounded-lg text-sm text-gray-400 hover:text-white transition-colors" data-i18n="art_atacama">Deserto do Atacama</a>
                                    <a href="${articlePath}primeira-viagem-santiago-chile" class="block px-3 py-2 hover:bg-[#FF3366]/10 rounded-lg text-sm text-gray-400 hover:text-white transition-colors" data-i18n="art_santiago">Santiago do Chile</a>
                                </div>
                            </div>
                        </div>
                        <div class="relative subgroup text-white">
                            <button class="w-full text-left px-4 py-3 hover:bg-[#6633FF]/10 rounded-lg flex justify-between items-center text-sm font-semibold transition-colors">
                                <span data-i18n="nav_eu">Europa</span>
                                <svg class="w-4 h-4 -rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </button>
                            <div class="absolute right-full top-0 w-64 bg-[#1B1B1B] border border-gray-800 rounded-xl shadow-2xl p-2 hidden subgroup-hover:block">
                                <div class="mb-3 pb-2">
                                    <p class="px-3 py-1 text-[#046A38] text-[10px] font-black uppercase tracking-widest">Portugal</p>
                                    <a href="${articlePath}roteiro-3-dias-lisboa" class="block px-3 py-2 hover:bg-[#6633FF]/10 rounded-lg text-sm text-gray-400 hover:text-white transition-colors" data-i18n="art_lisboa">Lisboa</a>
                                    <p class="px-3 py-1 text-[#6633FF] text-[10px] font-black uppercase tracking-widest">Reino Unido / Espanha</p>
                                    <a href="${articlePath}perrengue-em-gibraltar" class="block px-3 py-2 hover:bg-[#6633FF]/10 rounded-lg text-sm text-gray-400 hover:text-white transition-colors" data-i18n="art_gibraltar">Interrogatório em Gibraltar</a>
                                </div>
                            </div>
                        </div>
                        <div class="border-t border-gray-800 my-1 mx-2"></div>
                        <div class="relative subgroup text-white">
                            <button class="w-full text-left px-4 py-3 hover:bg-[#4DD0E1]/10 rounded-lg flex justify-between items-center text-sm font-semibold transition-colors">
                                <span data-i18n="nav_lifestyle">Estilo de Vida</span>
                                <svg class="w-4 h-4 -rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </button>
                            <div class="absolute right-full top-0 w-64 bg-[#1B1B1B] border border-gray-800 rounded-xl shadow-2xl p-2 hidden subgroup-hover:block">
                                <div class="mb-3 pb-2">
                                    <p class="px-3 py-1 text-[#4DD0E1] text-[10px] font-black uppercase tracking-widest" data-i18n="nav_lifestyle">Estilo de Vida</p>
                                    <a href="${articlePath}o-comeco-de-uma-jornada" class="block px-3 py-2 hover:bg-[#4DD0E1]/10 rounded-lg text-sm text-gray-400 hover:text-white transition-colors" data-i18n="art_jornada">O Começo da Jornada</a>
                                    <a href="${articlePath}minha-vida-nomade" class="block px-3 py-2 hover:bg-[#4DD0E1]/10 rounded-lg text-sm text-gray-400 hover:text-white transition-colors" data-i18n="art_vida_nomade">Minha Vida Nômade</a>
                                </div>
                            </div>
                        </div>
                        <div class="mt-1 pt-1 border-t border-gray-800">
                            <a href="${articlePath}2025-wrapped" class="block px-4 py-2 hover:text-[#FF3366]/10 rounded-lg text-sm text-gray-300 font-bold transition-colors" data-i18n="art_wrapped">Wrapped 2025 📸</a>
                        </div>
                    </div>
                </div>
                <div class="flex items-center space-x-3">
                    <a href="${basePath}lp/portuguese-classes" class="nav-course-btn hidden px-4 py-2 bg-[#FF3366] text-white text-[10px] font-black uppercase rounded-full hover:scale-105 transition-all shadow-lg" data-i18n="nav_course">Aulas</a>
                    <select id="languageSelector" aria-label="Selecionar idioma" onchange="handleLanguageChange(this.value)" class="bg-[#1B1B1B] text-white text-[10px] font-bold py-2 px-3 rounded-lg border border-white/10 outline-none cursor-pointer hover:border-[#FF3366] transition-all">
                        <option value="pt" ${currentLang === 'pt' ? 'selected' : ''}>PORTUGUÊS</option>
                        <option value="es" ${currentLang === 'es' ? 'selected' : ''}>ESPAÑOL</option>
                        <option value="en" ${currentLang === 'en' ? 'selected' : ''}>ENGLISH</option>
                    </select>
                </div>
            </div>
            <button onclick="toggleMobileMenu()" aria-label="Abrir menu" class="md:hidden text-white p-2 focus:outline-none bg-white/5 rounded-lg border border-white/10">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16m-7 6h7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </button>
        </div>

<div id="mobile-menu-container" class="hidden absolute top-full left-0 w-full bg-[#111111] border-b border-white/5 p-6 space-y-8 shadow-2xl z-[100] md:hidden overflow-y-auto overscroll-contain" style="max-height: 75vh;">
    <!-- Bandeiras -->
    <div class="flex gap-8 pb-6 border-b border-white/5 justify-center">
        <button onclick="handleLanguageChange('pt')" class="text-3xl hover:scale-110 transition-transform">🇧🇷</button>
        <button onclick="handleLanguageChange('es')" class="text-3xl hover:scale-110 transition-transform">🇪🇸</button>
        <button onclick="handleLanguageChange('en')" class="text-3xl hover:scale-110 transition-transform">🇺🇸</button>
    </div>

    <!-- BOTÃO DE AULAS NO TOPO DO MENU MÓVEL -->
    <div class="pt-2">
        <a href="${basePath}lp/portuguese-classes.htm" class="nav-course-btn hidden w-full block text-center py-4 bg-[#FF3366] text-white font-black uppercase tracking-widest rounded-2xl shadow-lg active:scale-95 transition-all" data-i18n="nav_course">Aulas de Português</a>
    </div>

    <div class="flex flex-col space-y-8">
        <div>
            <span class="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF3366] mb-4 block" data-i18n="nav_roteiros">Roteiros</span>
            
            <div class="mb-6">
                <p class="text-white font-bold text-lg mb-3" data-i18n="nav_sa">América do Sul</p>
                <div class="flex flex-col space-y-4 pl-4 border-l border-[#FF3366]/30">
     <!-- NÍVEL 2: Argentina -->
            <div>
                <p class="text-[#74ACDF] text-[10px] font-black uppercase tracking-widest mb-3" data-i18n="nav_argentina">Argentina</p>
                <div class="flex flex-col space-y-3 pl-2">
                    <a href="${articlePath}salta-la-linda" class="text-gray-400 text-sm" onclick="toggleMobileMenu()" data-i18n="art_salta">Salta</a>
                    <a href="${articlePath}argentina-realidade-economica" class="text-gray-400 text-sm" onclick="toggleMobileMenu()" data-i18n="art_arg_econ">Economia</a>
                    <a href="${articlePath}lugares-gratis-buenos-aires" class="text-gray-400 text-sm" onclick="toggleMobileMenu()" data-i18n="art_ba_gratis">BA Grátis</a>
                </div>
            </div>

            <!-- NÍVEL 2: Chile -->
            <div>
                <p class="text-[#FF3366] text-[10px] font-black uppercase tracking-widest mb-3" data-i18n="nav_chile">Chile</p>
                <div class="flex flex-col space-y-3 pl-2">
                    <a href="${articlePath}onibus-quebrado-atacama" class="text-gray-400 text-sm" onclick="toggleMobileMenu()" data-i18n="art_bus_atacama">Perrengue</a>
                    <a href="${articlePath}o-deserto-do-atacama" class="text-gray-400 text-sm" onclick="toggleMobileMenu()" data-i18n="art_atacama">Atacama</a>
                    <a href="${articlePath}primeira-viagem-santiago-chile" class="text-gray-400 text-sm" onclick="toggleMobileMenu()" data-i18n="art_santiago">Santiago</a>
                </div>
            </div>
            </div>

            <div class="mb-6">
                <p class="text-white font-bold text-lg mb-3" data-i18n="nav_eu">Europa</p>
                <div class="flex flex-col space-y-4 pl-4 border-l border-[#6633FF]/30">
                    <a href="${articlePath}roteiro-3-dias-lisboa" class="text-gray-400 text-sm" onclick="toggleMobileMenu()" data-i18n="art_lisboa">Lisboa</a>
                    <a href="${articlePath}perrengue-em-gibraltar" class="text-gray-400 text-sm" onclick="toggleMobileMenu()" data-i18n="art_gibraltar">Gibraltar</a>
                </div>
            </div>

            <div class="mb-6">
                <p class="text-white font-bold text-lg mb-3" data-i18n="nav_lifestyle">Estilo de Vida</p>
                <div class="flex flex-col space-y-4 pl-4 border-l border-[#4DD0E1]/30">
                    <a href="${articlePath}o-comeco-de-uma-jornada" class="text-gray-400 text-sm" onclick="toggleMobileMenu()" data-i18n="art_jornada">Jornada</a>
                    <a href="${articlePath}minha-vida-nomade" class="text-gray-400 text-sm" onclick="toggleMobileMenu()" data-i18n="art_vida_nomade">Vida Nômade</a>
                </div>
            </div>
        </div>

        <div class="flex flex-col space-y-4 font-bold text-lg pt-4 border-t border-white/5">
            <a href="${articlePath}2025-wrapped" class="text-[#FF3366] italic" onclick="toggleMobileMenu()" data-i18n="art_wrapped">Wrapped 2025</a>
        </div>
    </div>
</div>
      </nav>
    `;
// Garante que todos os textos (incluindo os novos links do mobile) sejam traduzidos
updateVisibility(currentLang);
}

function injectFooter() {
    // 1. Procura se já existe uma tag <footer> na página
    let footer = document.querySelector('footer');
    
    // 2. Se não existir, cria uma nova
    if (!footer) {
        footer = document.createElement('footer');
        document.body.appendChild(footer);
    }
    
    // 3. Aplica o estilo (Tailwind) e o marcador de tradução
    footer.className = "py-16 bg-black border-t border-white/5 text-center mt-20";
    footer.innerHTML = `<p class="text-gray-600 text-[10px] font-black uppercase tracking-[0.3em]" data-i18n="footer_copy"></p>`;
    
    // 4. Força a tradução imediata
    updateVisibility(getLangPreference());
}


function injectNewsletterBanner() {
    if (localStorage.getItem('paco_news_closed')) return;
    
    const banner = document.createElement('div');
    banner.id = 'newsletterBanner';
    banner.style.cssText = `position: fixed; bottom: 1.5rem; left: 1.5rem; right: 1.5rem; max-width: 320px; background: rgba(27, 27, 27, 0.95); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.1); padding: 1.5rem; border-radius: 2rem; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); z-index: 1000; transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1); transform: translateY(150%); opacity: 0;`;
    
    if (window.innerWidth < 768) { banner.style.maxWidth = 'calc(100% - 3rem)'; }

    banner.innerHTML = `
        <button onclick="closeNewsletter()" aria-label="Fechar newsletter" style="position: absolute; top: 1rem; right: 1rem; color: #666; background: none; border: none; cursor: pointer;">
            <svg style="width: 1.25rem; height: 1.25rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </button>
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <div style="display: flex; justify-content: space-between; align-items: start;">
                <h3 style="font-size: 1.125rem; font-weight: 900; color: white; margin: 0;" data-i18n="news_title"></h3>
                <span id="newsLangIndicator" data-i18n="news_indicator" style="font-size: 0.5rem; background: rgba(255, 51, 102, 0.2); color: #FF3366; padding: 0.15rem 0.5rem; border-radius: 999px; font-weight: 700;"></span>
            </div>
            <p style="font-size: 0.7rem; color: #999; line-height: 1.5; margin: 0;" data-i18n="news_desc"></p>
            <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.5rem;">
                <input type="email" id="newsEmail" data-i18n-placeholder="news_placeholder" style="background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1); font-size: 0.65rem; border-radius: 0.75rem; padding: 0.75rem 1rem; color: white; outline: none;">
                <button onclick="subscribeNewsletter()" style="background: #FF3366; color: white; font-size: 0.65rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; padding: 0.75rem; border-radius: 0.75rem; border: none; cursor: pointer;" data-i18n="news_btn"></button>
            </div>
            <p id="newsMessage" style="display: none; font-size: 0.65rem; color: #4DD0E1; font-weight: 700; margin-top: 0.5rem;" data-i18n="news_success"></p>
        </div>
    `;

    // 1. PRIMEIRO: Coloca o banner na página para ele existir no DOM
    document.body.appendChild(banner);

    // 2. SEGUNDO: Traduz (Agora o navegador encontra os IDs e data-i18n)
    updateVisibility(getLangPreference() || 'pt');

    // 3. TERCEIRO: Mostra com a animação de subida
    setTimeout(() => { 
        banner.style.transform = 'translateY(0)'; 
        banner.style.opacity = '1'; 
    }, 100);
}

window.subscribeNewsletter = function(inputId = 'newsEmail') {
    const emailField = document.getElementById(inputId);
    const email = emailField?.value;
    const lang = getLangPreference() || 'pt';
    
    // Validação básica
    if (!email || !email.includes('@')) { 
        if(emailField) emailField.style.borderColor = "#FF3366"; 
        return; 
    }

    // Identifica se é o formulário da página (Horizontal) ou o flutuante (Banner)
    const isHorizontal = inputId === 'newsHorizontalEmail';
    const messageId = isHorizontal ? 'newsHorizontalMessage' : 'newsMessage';
    const containerId = isHorizontal ? 'newsHorizontalFormContainer' : null;

    fetch("https://formspree.io/f/mojvkdve", {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, language: lang, origem: isHorizontal ? "Artigo Horizontal" : "Banner Flutuante" })
    }).then(response => {
        if (response.ok) {
            // Esconde o formulário e mostra a mensagem
            if (containerId) document.getElementById(containerId).style.display = 'none';
            else if (emailField) emailField.style.display = 'none';
            
            const msgElement = document.getElementById(messageId);
            if (msgElement) {
                msgElement.classList.remove('hidden');
                msgElement.innerText = navTranslations[lang]['news_success'];
            }
            
            // Se for o banner flutuante, fecha depois de 4s
            if (!isHorizontal) setTimeout(() => { closeNewsletter(); }, 4000);
        }
    });
};

window.closeNewsletter = function() {
    localStorage.setItem('paco_news_closed', 'true');
    const banner = document.getElementById('newsletterBanner');
    if (banner) { banner.style.transform = 'translateY(150%)'; banner.style.opacity = '0'; setTimeout(() => banner.remove(), 600); }
};

function injectLanguageModal() {
    if (getLangPreference()) return;
    const modal = document.createElement('div');
    modal.id = 'languageModal';
    modal.className = 'fixed inset-0 z-[100000] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm transition-opacity duration-500';
    modal.innerHTML = `
        <div class="bg-[#1B1B1B] border border-gray-800 rounded-[2.5rem] p-8 max-w-sm w-full text-center shadow-2xl">
            <div class="w-16 h-16 bg-[#FF3366]/10 rounded-2xl flex items-center justify-center mx-auto mb-6"><span class="text-3xl">🌎</span></div>
            <h2 class="text-2xl font-black text-white mb-2" data-i18n="modal_title">Escolhe o teu idioma</h2>
            <p class="text-gray-400 text-sm mb-8" data-i18n="modal_subtitle">Para uma melhor experiência de leitura</p>
            <div class="grid gap-3">
                <button onclick="handleLanguageChange('pt', true)" class="w-full py-4 bg-white/5 hover:bg-[#FF3366] text-white font-bold rounded-2xl transition-all border border-white/5">Português</button>
                <button onclick="handleLanguageChange('es', true)" class="w-full py-4 bg-white/5 hover:bg-[#FF3366] text-white font-bold rounded-2xl transition-all border border-white/5">Español</button>
                <button onclick="handleLanguageChange('en', true)" class="w-full py-4 bg-white/5 hover:bg-[#FF3366] text-white font-bold rounded-2xl transition-all border border-white/5">English</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function injectCookieBanner() {
    if (getCookieConsent()) return;
    const banner = document.createElement('div');
    banner.id = 'cookieBanner';
    banner.className = 'fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md bg-[#1B1B1B]/95 backdrop-blur-md border border-white/10 p-5 rounded-3xl shadow-2xl z-[90] flex flex-col sm:flex-row items-center gap-4 transition-all duration-500';
    banner.innerHTML = `
        <p class="text-xs text-gray-300 leading-relaxed" data-i18n="cookie_text">Utilizamos cookies para garantir que tens a melhor experiência no nosso blog.</p>
        <button onclick="acceptCookies()" class="bg-[#FF3366] text-white text-xs font-bold px-6 py-3 rounded-xl hover:scale-105 transition-all" data-i18n="cookie_btn">Aceitar</button>
    `;
    document.body.appendChild(banner);
}

window.acceptCookies = function() {
    setCookieConsent();
    const banner = document.getElementById('cookieBanner');
    if (banner) { banner.style.opacity = '0'; banner.style.transform = 'translateY(20px)'; setTimeout(() => banner.remove(), 500); }
};

function updateVisibility(lang) {
    // 1. Traduz os links do menu e botões
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (navTranslations[lang]?.[key]) {
            el.innerText = navTranslations[lang][key];
        }
    });

    // 2. Traduz as caixas de texto (Newsletter e Busca)
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (navTranslations[lang]?.[key]) {
            el.placeholder = navTranslations[lang][key];
        }
    });

    // 3. Mostra/Esconde o botão de aulas
    const btns = document.querySelectorAll('.nav-course-btn');
    const isVisible = (lang === 'en' || lang === 'es');
    btns.forEach(btn => { 
        if (isVisible) btn.classList.remove('hidden'); 
        else btn.classList.add('hidden'); 
    });
}

window.shareOnWhatsApp = () => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(window.location.href)}`, '_blank');
window.shareOnX = () => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`, '_blank');
window.copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

document.addEventListener('DOMContentLoaded', () => {
    injectMenu();
    injectFooter();
    injectSocialShare();
    injectLanguageModal();
    injectCookieBanner();
    injectArticleTopAddons();
    injectBackToTop()
    
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    if (searchQuery && !window.location.pathname.includes('/articles/')) {
        setTimeout(() => {
            window.handleSearch({ key: 'Enter' }, searchQuery);
            const input = document.querySelector('input[data-i18n-placeholder="search_placeholder"]');
            if (input) input.value = searchQuery;
        }, 500);
    }

// Fecha as sugestões de busca ao clicar fora
document.addEventListener('click', (event) => {
    const suggestionsBox = document.getElementById('search-suggestions');
    const searchInput = document.querySelector('input[data-i18n-placeholder="search_placeholder"]');
    
    if (suggestionsBox && searchInput && !searchInput.contains(event.target) && !suggestionsBox.contains(event.target)) {
        suggestionsBox.classList.add('hidden');
    }
});

    setTimeout(() => { injectNewsletterBanner(); }, 3000);
    
    const style = document.createElement('style');
    style.innerHTML = ` .subgroup:hover .subgroup-hover\\:block { display: block !important; } @media (max-width: 768px) { .subgroup-hover\\:block { display: none; } } `;
    document.head.appendChild(style);
});

window.onload = injectMenu;

window.handleLanguageChange = function(lang) {
    // 1. Salva a preferência
    localStorage.setItem('paco_blog_lang', lang); 
    
    // 2. Fecha todos os tipos de modais possíveis (Injetado e Manual)
    const modalInjetado = document.getElementById('languageModal');
    if (modalInjetado) modalInjetado.remove();
    
    const modalManual = document.getElementById('language-modal');
    if (modalManual) modalManual.style.display = 'none';

    // 3. Atualiza o seletor visual no menu
    const selector = document.getElementById('languageSelector');
    if (selector) selector.value = lang;

    // 4. Traduz o menu e visibilidade do botão de curso
    if (typeof updateVisibility === 'function') updateVisibility(lang);
    
    // 5. AVISA A PÁGINA (Home ou LP) para trocar os textos
    if (typeof window.changeLanguage === 'function') {
        window.changeLanguage(lang);
    }
};

function injectBackToTop() {
    // 1. Criar o elemento do botão
    const btn = document.createElement('button');
    btn.id = 'backToTopBtn';
    btn.setAttribute('aria-label', 'Voltar ao topo');
    btn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
        </svg>
    `;
    
    // 2. Definir o estilo (Fixo, Rosa Néon e Arredondado)
    Object.assign(btn.style, {
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '45px',
        height: '45px',
        backgroundColor: '#FF3366',
        color: 'white',
        borderRadius: '50%',
        display: 'none', // Começa escondido
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 10px 15px -3px rgba(255, 51, 102, 0.4)',
        cursor: 'pointer',
        zIndex: '9998',
        border: 'none',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(4px)'
    });

    // 3. Ação de clique e efeitos visuais
    btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    btn.onmouseover = () => btn.style.transform = 'translateY(-5px)';
    btn.onmouseout = () => btn.style.transform = 'translateY(0)';

    document.body.appendChild(btn);

    // 4. Lógica de visibilidade baseada no scroll
    window.addEventListener('scroll', () => {
        // Mostra o botão apenas se o utilizador descer mais de 400px
        btn.style.display = window.scrollY > 400 ? 'flex' : 'none';
    });
}