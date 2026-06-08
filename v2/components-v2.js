/*
 * components-v2.js – ENTWURF "Hot Dream" – Nav + Footer für linja.me/v2
 * Wegwerf-Variante. Berührt die Live-Site NICHT.
 * Einbinden: <script src="components-v2.js"></script>  (v2-root)
 *            <script src="../components-v2.js"></script> (v2/blog/)
 *
 * Konfiguration über data-Attribute am <script>-Tag:
 *   data-active="blog"        → Welcher Nav-Link aktiv ist (blog|home)
 *   data-bilingual="true"     → Sprach-Toggle anzeigen (default: false)
 *
 * Unterschiede zur Live-components.js: neue Brand-Farben, kein Analytics-Tracking,
 * Home-Link bleibt im /v2/-Raum, Fraunces-Headline-Feinschliff.
 */
(function () {
    // KEIN Tracking im Wegwerf-Entwurf (bewusst entfernt)

    // Detect base path from script src
    var scripts = document.querySelectorAll('script[src*="components-v2.js"]');
    var scriptTag = scripts[scripts.length - 1];
    var src = scriptTag.getAttribute('src') || '';
    var base = src.replace('components-v2.js', '');

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
        ? '<button id="lang-toggle" onclick="toggleLanguage()" style="background: #F4F1EA;" class="flex items-center text-xs px-2 py-1.5 border border-stone-200 rounded text-stone-400 hover:text-stone-600 hover:border-stone-400 cursor-pointer transition-colors font-mono tracking-wide hidden sm:flex"><span id="lang-label">EN</span></button>'
        : '';
    var langToggleMobile = bilingual
        ? '<button onclick="toggleLanguage()" class="block text-stone-400 hover:text-stone-600 font-mono text-xs tracking-wide"><span id="lang-label-mobile">EN</span></button>'
        : '';

    var contactDeLabel = bilingual ? '<span class="nav-de">Kontakt</span><span class="nav-en lang-hidden">Contact</span>' : 'Kontakt';
    var homeLinkHref = base + 'index.html';

    var navHTML = ''
        + '<nav class="fixed top-0 left-0 right-0 z-50" style="background: rgba(244,241,234,0.92); backdrop-filter: blur(8px); border-bottom: 1px solid #DAD3C5;">'
        + '<div class="max-w-[860px] mx-auto px-5 sm:px-8 py-5 flex items-center justify-between">'
        + '<a href="' + homeLinkHref + '" class="source-serif text-stone-900 text-lg">Linja Scharffetter</a>'
        + '<div class="flex items-center gap-6 text-[0.8rem] text-stone-500">'
        + '<a href="' + base + 'blog.html" class="' + blogClass + '">Blog</a>'
        + langToggleDesktop
        + '<a href="' + contactHref + '" class="px-3.5 py-1.5 rounded text-white text-[0.75rem] font-medium transition-colors hidden sm:inline-block hover:opacity-90" style="background: #5E1AF4;">' + contactDeLabel + '</a>'
        + '<button id="menu-toggle" class="sm:hidden p-1" aria-label="Menü öffnen"><svg class="w-6 h-6 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/></svg></button>'
        + '</div></div>'
        + '<div id="mobile-menu" class="sm:hidden border-t px-5 py-4 space-y-3 text-[0.85rem]" style="border-color: #DAD3C5; background: rgba(244,241,234,0.98);">'
        + '<a href="' + base + 'blog.html" class="' + blogClassMobile + '">Blog</a>'
        + langToggleMobile
        + '<a href="' + contactHref + '" class="block font-medium" style="color: #5E1AF4;">' + contactDeLabel + '</a>'
        + '</div></nav>';

    // Build footer HTML — v2-Entwurf-Badge zur Klarheit
    var footerLinks = [
        { href: base + 'index.html', label: 'Start' },
        { href: base + 'blog.html', label: 'Blog' },
        { href: '/index.html', label: bilingual ? '<span class="nav-de">Zurück zur Live-Site</span><span class="nav-en lang-hidden">Back to live site</span>' : 'Live-Site' },
    ];
    var footerLinksHTML = footerLinks.map(function (link) {
        var cls = 'hover:text-stone-500 transition-colors';
        return '<a href="' + link.href + '" class="' + cls + '">' + link.label + '</a>';
    }).join('\n            ');

    var footerHTML = ''
        + '<footer style="background: #F1EBDD;" class="py-8">'
        + '<div class="max-w-[860px] mx-auto px-5 sm:px-8 flex flex-col items-center gap-3 text-[0.72rem] text-stone-400">'
        + '<div class="flex items-center justify-center gap-4">' + footerLinksHTML + '</div>'
        + '<span class="font-mono text-[0.6rem] tracking-wider uppercase px-2 py-0.5 rounded" style="background:#5E1AF4; color:#fff;">Entwurf v2 · Hot Dream</span>'
        + '</div></footer>';

    // Inject nav
    var navPlaceholder = document.getElementById('site-nav');
    if (navPlaceholder) {
        navPlaceholder.outerHTML = navHTML;
    }

    // Inject footer
    function injectFooter() {
        var footerPlaceholder = document.getElementById('site-footer');
        if (footerPlaceholder) footerPlaceholder.outerHTML = footerHTML;
    }
    if (document.getElementById('site-footer')) {
        injectFooter();
    } else if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectFooter);
    } else {
        injectFooter();
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

    // ═══════════════════════════════════════════════════════════
    // Globaler Fraunces-Feinschliff + Headline-Punch (v2)
    // ═══════════════════════════════════════════════════════════
    (function mountBrandTweaks() {
        if (document.getElementById('v2-brand-tweaks')) return;
        var st = document.createElement('style');
        st.id = 'v2-brand-tweaks';
        st.textContent = ''
            + '.source-serif{font-weight:600 !important;letter-spacing:-0.015em;}'
            + '.prose h2,.prose h3{font-weight:600;letter-spacing:-0.01em;}'
            + 'h1.source-serif{letter-spacing:-0.025em;line-height:1.05;}';
        document.head.appendChild(st);
    })();

    // ═══════════════════════════════════════════════════════════
    // Scroll Progress Bar — Orange (v2)
    // ═══════════════════════════════════════════════════════════
    (function mountScrollProgress() {
        if (document.getElementById('scroll-progress')) return;
        var bar = document.createElement('div');
        bar.id = 'scroll-progress';
        bar.setAttribute('aria-hidden', 'true');
        bar.style.cssText = 'position:fixed;top:0;left:0;height:2px;width:0%;background:#FF6230;z-index:9999;transition:width 0.05s linear;pointer-events:none;';
        document.body.appendChild(bar);
        function update() {
            var h = document.documentElement;
            var scrollable = (h.scrollHeight - h.clientHeight);
            var pct = scrollable > 0 ? (h.scrollTop / scrollable) * 100 : 0;
            bar.style.width = pct + '%';
        }
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        update();
    })();

    // ═══════════════════════════════════════════════════════════
    // Mobile-Feinschliff
    // ═══════════════════════════════════════════════════════════
    (function mountMobileStyles() {
        if (document.getElementById('mobile-tweaks')) return;
        var st = document.createElement('style');
        st.id = 'mobile-tweaks';
        st.textContent = '@media (max-width:639px){'
            + '.prose h2{font-size:1.15rem;}'
            + '.prose h3{font-size:0.98rem;}'
            + '.prose table{display:block;overflow-x:auto;}'
            + '.prose pre{overflow-x:auto;}'
            + '}';
        document.head.appendChild(st);
    })();

    // ═══════════════════════════════════════════════════════════
    // Audio-Pill (Violett/Orange statt Emerald) — rendert aus data-attrs
    // ═══════════════════════════════════════════════════════════
    function mountAudioPills() {
        var slots = document.querySelectorAll('.reader-audio-slot');
        if (!slots.length) return;
        slots.forEach(function (slot) {
            if (slot.dataset.mounted) return;
            slot.dataset.mounted = '1';
            var src = slot.getAttribute('data-audio-src');
            var label = slot.getAttribute('data-audio-label') || 'Lieber hören statt lesen? Nutze die kurze Audio-Zusammenfassung.';
            if (!src) return;

            slot.innerHTML = '' +
                '<button type="button" class="reader-pill" aria-label="Audio-Zusammenfassung abspielen" ' +
                'style="display:inline-flex;align-items:center;gap:0.5rem;padding:0.35rem 0.9rem 0.35rem 0.5rem;max-width:100%;' +
                'border:1px solid #C9BEFB;background:transparent;color:#3A0C9C;border-radius:9999px;' +
                'font-size:0.8rem;font-weight:500;cursor:pointer;transition:all 0.15s;white-space:nowrap;overflow:hidden;">' +
                '<span class="reader-icon" style="display:inline-flex;width:22px;height:22px;border-radius:50%;background:#5E1AF4;color:#fff;align-items:center;justify-content:center;flex-shrink:0;">' +
                '<svg class="reader-play-icon" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>' +
                '<svg class="reader-pause-icon" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="display:none;"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>' +
                '</span>' +
                '<span class="reader-label" style="overflow:hidden;text-overflow:ellipsis;min-width:0;">' + label + '</span>' +
                '<span class="reader-dur" style="opacity:0.6;font-variant-numeric:tabular-nums;flex-shrink:0;"></span>' +
                '</button>' +
                '<audio class="reader-audio" preload="metadata" style="display:none;"><source src="' + src + '" type="audio/mpeg"></audio>';

            var pill = slot.querySelector('.reader-pill');
            var audio = slot.querySelector('.reader-audio');
            var playIcon = slot.querySelector('.reader-play-icon');
            var pauseIcon = slot.querySelector('.reader-pause-icon');
            var durEl = slot.querySelector('.reader-dur');

            function fmt(s) { s = Math.floor(s || 0); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); }

            pill.addEventListener('mouseenter', function () {
                if (audio.paused) pill.style.background = '#EDE3FB';
            });
            pill.addEventListener('mouseleave', function () {
                if (audio.paused) pill.style.background = 'transparent';
            });
            pill.addEventListener('click', function () { audio.paused ? audio.play() : audio.pause(); });

            audio.addEventListener('play', function () {
                playIcon.style.display = 'none';
                pauseIcon.style.display = 'block';
                pill.style.background = '#5E1AF4';
                pill.style.color = '#fff';
                pill.style.borderColor = '#5E1AF4';
            });
            audio.addEventListener('pause', function () {
                playIcon.style.display = 'block';
                pauseIcon.style.display = 'none';
                pill.style.background = 'transparent';
                pill.style.color = '#3A0C9C';
                pill.style.borderColor = '#C9BEFB';
            });
            audio.addEventListener('ended', function () {
                audio.currentTime = 0;
                durEl.textContent = '(' + fmt(audio.duration) + ')';
            });
            audio.addEventListener('timeupdate', function () {
                if (audio.duration && !isNaN(audio.duration) && !audio.paused) {
                    var left = audio.duration - audio.currentTime;
                    durEl.textContent = '(' + fmt(left) + ')';
                }
            });
            audio.addEventListener('loadedmetadata', function () {
                durEl.textContent = '(' + fmt(audio.duration) + ')';
            });
        });
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', mountAudioPills);
    } else {
        mountAudioPills();
    }
})();
