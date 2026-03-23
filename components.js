/*
 * components.js – Zentrale Nav + Footer für linja.me
 * Einbinden: <script src="components.js"></script>  (root)
 *            <script src="../components.js"></script> (blog/)
 *
 * Konfiguration über data-Attribute am <script>-Tag:
 *   data-active="blog"        → Welcher Nav-Link aktiv ist (blog|home)
 *   data-bilingual="true"     → Sprach-Toggle anzeigen (default: false)
 *   data-contact-target="..."  → Kontakt-Link-Ziel (default: auto)
 */
(function () {
    // Detect base path from script src
    var scripts = document.querySelectorAll('script[src*="components.js"]');
    var scriptTag = scripts[scripts.length - 1];
    var src = scriptTag.getAttribute('src') || '';
    var base = src.replace('components.js', '');

    // Read config from data attributes
    var activePage = scriptTag.getAttribute('data-active') || '';
    var bilingual = scriptTag.getAttribute('data-bilingual') === 'true';

    // Contact link: on homepage use anchor, elsewhere link to homepage
    var isHome = !base && (activePage === 'home' || activePage === '');
    var contactHref = isHome ? '#kontakt' : base + 'index.html#kontakt';

    // Nav link styles
    var blogClass = activePage === 'blog'
        ? 'text-stone-800 font-medium transition-colors hidden sm:inline'
        : 'hover:text-stone-800 transition-colors hidden sm:inline';
    var blogClassMobile = activePage === 'blog'
        ? 'block font-medium text-stone-900'
        : 'block text-stone-600 hover:text-stone-900';

    // Build nav HTML
    var langToggleDesktop = bilingual
        ? '<button id="lang-toggle" onclick="toggleLanguage()" style="background: #FAFAF8;" class="flex items-center text-xs px-2 py-1.5 border border-stone-200 rounded text-stone-400 hover:text-stone-600 hover:border-stone-400 cursor-pointer transition-colors font-mono tracking-wide hidden sm:flex"><span id="lang-label">EN</span></button>'
        : '';
    var langToggleMobile = bilingual
        ? '<button onclick="toggleLanguage()" class="block text-stone-400 hover:text-stone-600 font-mono text-xs tracking-wide"><span id="lang-label-mobile">EN</span></button>'
        : '';

    var contactDeLabel = bilingual ? '<span class="nav-de">Kontakt</span><span class="nav-en lang-hidden">Contact</span>' : 'Kontakt';
    var homeLinkHref = base ? base + 'index.html' : '/';

    var navHTML = ''
        + '<nav class="fixed top-0 left-0 right-0 z-50" style="background: rgba(250,250,248,0.92); backdrop-filter: blur(8px);">'
        + '<div class="max-w-[860px] mx-auto px-8 py-5 flex items-center justify-between">'
        + '<a href="' + homeLinkHref + '" class="source-serif text-stone-900 text-lg">Linja Scharffetter</a>'
        + '<div class="flex items-center gap-6 text-[0.8rem] text-stone-500">'
        + '<a href="' + base + 'blog.html" class="' + blogClass + '">Blog</a>'
        + langToggleDesktop
        + '<a href="' + contactHref + '" class="px-3.5 py-1.5 rounded text-white text-[0.75rem] font-medium transition-colors hidden sm:inline-block" style="background: #7b6ba5;">' + contactDeLabel + '</a>'
        + '<button id="menu-toggle" class="sm:hidden p-1" aria-label="Menü öffnen"><svg class="w-6 h-6 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/></svg></button>'
        + '</div></div>'
        + '<div id="mobile-menu" class="sm:hidden border-t px-8 py-4 space-y-3 text-[0.85rem]" style="border-color: #e5e2db; background: rgba(250,250,248,0.98);">'
        + '<a href="' + base + 'blog.html" class="' + blogClassMobile + '">Blog</a>'
        + langToggleMobile
        + '<a href="' + contactHref + '" class="block font-medium" style="color: #7b6ba5;">' + contactDeLabel + '</a>'
        + '</div></nav>';

    // Build footer HTML
    var footerLinks = [
        { href: base + 'index.html', label: 'Start' },
        { href: base + 'blog.html', label: 'Blog' },
        { href: 'https://cv.linja.me', label: 'CV' },
        { href: base + 'impressum.html', label: bilingual ? '<span class="nav-de">Impressum</span><span class="nav-en lang-hidden">Imprint</span>' : 'Impressum' },
        { href: base + 'agb.html', label: bilingual ? '<span class="nav-de">AGB</span><span class="nav-en lang-hidden">Terms</span>' : 'AGB' },
        { href: base + 'datenschutz.html', label: bilingual ? '<span class="nav-de">Datenschutz</span><span class="nav-en lang-hidden">Privacy</span>' : 'Datenschutz' },
    ];
    var footerLinksHTML = footerLinks.map(function (link) {
        var cls = 'hover:text-stone-500 transition-colors';
        return '<a href="' + link.href + '" class="' + cls + '">' + link.label + '</a>';
    }).join('\n            ');

    var footerHTML = ''
        + '<footer style="background: #F5F3EF;" class="py-8">'
        + '<div class="max-w-[860px] mx-auto px-8 flex items-center justify-center gap-4 text-[0.72rem] text-stone-300">'
        + footerLinksHTML
        + '</div></footer>';

    // Inject nav
    var navPlaceholder = document.getElementById('site-nav');
    if (navPlaceholder) {
        navPlaceholder.outerHTML = navHTML;
    }

    // Inject footer
    var footerPlaceholder = document.getElementById('site-footer');
    if (footerPlaceholder) {
        footerPlaceholder.outerHTML = footerHTML;
    }

    // Mobile menu toggle
    setTimeout(function () {
        var toggle = document.getElementById('menu-toggle');
        if (toggle) {
            toggle.addEventListener('click', function () {
                document.getElementById('mobile-menu').classList.toggle('open');
            });
            document.querySelectorAll('#mobile-menu a').forEach(function (link) {
                link.addEventListener('click', function () {
                    document.getElementById('mobile-menu').classList.remove('open');
                });
            });
        }
    }, 0);
})();
