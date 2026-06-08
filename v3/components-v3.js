/*
 * components-v3.js – ENTWURF "Vanille-Heidelbeer WILD" – Nav + Footer für linja.me/v3
 * Wegwerf-Variante. Berührt die Live-Site NICHT.
 * Basis: Original-Brandfarben (Heidelbeer-Violett #7b6ba5 + Vanille-Creme) + Orange-Akzent #FF6230.
 * Extras: Gradient-Mesh-Hintergrund, Notizblock-Karten, Checkerboard, Squiggle-Divider.
 */
(function () {
    // KEIN Tracking im Wegwerf-Entwurf

    var scripts = document.querySelectorAll('script[src*="components-v3.js"]');
    var scriptTag = scripts[scripts.length - 1];
    var src = scriptTag.getAttribute('src') || '';
    var base = src.replace('components-v3.js', '');

    var activePage = scriptTag.getAttribute('data-active') || '';
    var bilingual = scriptTag.getAttribute('data-bilingual') === 'true';

    var isHome = !base && (activePage === 'home' || activePage === '');
    var contactHref = isHome ? '#kontakt' : base + 'index.html#kontakt';

    var blogClass = activePage === 'blog'
        ? 'text-stone-800 font-medium transition-colors hidden sm:inline'
        : 'hover:text-stone-800 transition-colors hidden sm:inline';
    var blogClassMobile = activePage === 'blog'
        ? 'block font-medium text-stone-900'
        : 'block text-stone-600 hover:text-stone-900';

    var langToggleDesktop = bilingual
        ? '<button id="lang-toggle" onclick="toggleLanguage()" style="background: rgba(255,255,255,0.6);" class="flex items-center text-xs px-2 py-1.5 border border-stone-200 rounded text-stone-400 hover:text-stone-600 hover:border-stone-400 cursor-pointer transition-colors font-mono tracking-wide hidden sm:flex"><span id="lang-label">EN</span></button>'
        : '';
    var langToggleMobile = bilingual
        ? '<button onclick="toggleLanguage()" class="block text-stone-400 hover:text-stone-600 font-mono text-xs tracking-wide"><span id="lang-label-mobile">EN</span></button>'
        : '';

    var contactDeLabel = bilingual ? '<span class="nav-de">Kontakt</span><span class="nav-en lang-hidden">Contact</span>' : 'Kontakt';
    var homeLinkHref = base + 'index.html';

    // Nav: Heidelbeer-Wortmarke, Orange CTA-Button
    var navHTML = ''
        + '<nav class="fixed top-0 left-0 right-0 z-50" style="background: rgba(250,250,248,0.82); backdrop-filter: blur(10px); border-bottom: 1px solid #e9e4f0;">'
        + '<div class="max-w-[920px] mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">'
        + '<a href="' + homeLinkHref + '" class="source-serif text-stone-900 text-lg flex items-center gap-2">'
        + '<span style="display:inline-block;width:14px;height:14px;border-radius:50%;background:#FF6230;"></span>Linja Scharffetter</a>'
        + '<div class="flex items-center gap-6 text-[0.8rem] text-stone-500">'
        + '<a href="' + base + 'blog.html" class="' + blogClass + '">Blog</a>'
        + langToggleDesktop
        + '<a href="' + contactHref + '" class="px-3.5 py-1.5 rounded-full text-white text-[0.75rem] font-medium transition-transform hover:scale-105 hidden sm:inline-block" style="background: #FF6230;">' + contactDeLabel + '</a>'
        + '<button id="menu-toggle" class="sm:hidden p-1" aria-label="Menü öffnen"><svg class="w-6 h-6 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/></svg></button>'
        + '</div></div>'
        + '<div id="mobile-menu" class="sm:hidden border-t px-5 py-4 space-y-3 text-[0.85rem]" style="border-color: #e9e4f0; background: rgba(250,250,248,0.98);">'
        + '<a href="' + base + 'blog.html" class="' + blogClassMobile + '">Blog</a>'
        + langToggleMobile
        + '<a href="' + contactHref + '" class="block font-medium" style="color: #FF6230;">' + contactDeLabel + '</a>'
        + '</div></nav>';

    var footerLinks = [
        { href: base + 'index.html', label: 'Start' },
        { href: base + 'blog.html', label: 'Blog' },
        { href: '/index.html', label: bilingual ? '<span class="nav-de">Zurück zur Live-Site</span><span class="nav-en lang-hidden">Back to live site</span>' : 'Live-Site' },
    ];
    var footerLinksHTML = footerLinks.map(function (link) {
        return '<a href="' + link.href + '" class="hover:text-stone-600 transition-colors">' + link.label + '</a>';
    }).join('\n            ');

    var footerHTML = ''
        + '<footer class="relative py-10 mt-8" style="background: #f6f4f9;">'
        + '<div class="v3-squiggle" style="position:absolute;top:-1px;left:0;right:0;"></div>'
        + '<div class="max-w-[920px] mx-auto px-5 sm:px-8 flex flex-col items-center gap-3 text-[0.72rem] text-stone-400">'
        + '<div class="flex items-center justify-center gap-4">' + footerLinksHTML + '</div>'
        + '<span class="font-mono text-[0.6rem] tracking-wider uppercase px-2.5 py-0.5 rounded-full" style="background:#FF6230; color:#fff;">Entwurf v3 · Wild</span>'
        + '</div></footer>';

    var navPlaceholder = document.getElementById('site-nav');
    if (navPlaceholder) navPlaceholder.outerHTML = navHTML;

    function injectFooter() {
        var fp = document.getElementById('site-footer');
        if (fp) fp.outerHTML = footerHTML;
    }
    if (document.getElementById('site-footer')) injectFooter();
    else if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', injectFooter);
    else injectFooter();

    setTimeout(function () {
        var toggle = document.getElementById('menu-toggle');
        if (toggle) {
            toggle.addEventListener('click', function () { document.getElementById('mobile-menu').classList.toggle('open'); });
            document.querySelectorAll('#mobile-menu a').forEach(function (link) {
                link.addEventListener('click', function () { document.getElementById('mobile-menu').classList.remove('open'); });
            });
        }
    }, 0);

    // ═══════════════════════════════════════════════════════════
    // WILD DECO — Gradient-Mesh-Hintergrund, Notizblock, Checkerboard, Squiggle
    // ═══════════════════════════════════════════════════════════
    (function mountDeco() {
        if (document.getElementById('v3-deco')) return;
        // Fixed gradient-mesh background layer
        var bg = document.createElement('div');
        bg.className = 'v3-bg';
        bg.setAttribute('aria-hidden', 'true');
        document.body.insertBefore(bg, document.body.firstChild);

        var st = document.createElement('style');
        st.id = 'v3-deco';
        st.textContent = ''
            // gradient mesh: vanille creme + heidelbeer violett + ein hauch orange
            + '.v3-bg{position:fixed;inset:0;z-index:-2;pointer-events:none;background:'
            + 'radial-gradient(46vw 46vw at 10% 4%, rgba(217,209,229,0.60), transparent 62%),'
            + 'radial-gradient(40vw 40vw at 92% 16%, rgba(255,98,48,0.14), transparent 60%),'
            + 'radial-gradient(50vw 50vw at 78% 88%, rgba(123,107,165,0.22), transparent 62%),'
            + 'radial-gradient(38vw 38vw at 20% 96%, rgba(255,98,48,0.10), transparent 60%),'
            + '#FAFAF8;}'
            // headline punch (keep Source Serif, just bolder/tighter)
            + 'h1.source-serif{letter-spacing:-0.02em;line-height:1.04;}'
            // Notizblock-Karte: liniertes Papier + Perforation + Badge
            + '.notepad{position:relative;background:#ffffff;border-radius:16px;padding:2.4rem 1.9rem 1.9rem;'
            + 'box-shadow:0 18px 50px -18px rgba(70,56,99,0.30);'
            + 'background-image:repeating-linear-gradient(180deg,transparent,transparent 31px,#ece8f2 31px,#ece8f2 32px);'
            + 'background-position:0 2.7rem;border:1px solid #efeaf4;}'
            + '.notepad::before{content:"";position:absolute;top:13px;left:20px;right:20px;height:7px;'
            + 'background-image:radial-gradient(circle at center,#d9d1e5 0 2.6px,transparent 3px);'
            + 'background-size:17px 7px;background-repeat:repeat-x;}'
            + '.notepad-badge{position:absolute;top:-23px;left:24px;width:56px;height:56px;border-radius:50%;'
            + 'background:#7b6ba5;color:#fff;display:flex;align-items:center;justify-content:center;text-align:center;'
            + 'font-family:"Geist Mono",ui-monospace,monospace;font-size:0.56rem;letter-spacing:0.06em;text-transform:uppercase;line-height:1.15;'
            + 'box-shadow:0 8px 20px -6px rgba(123,107,165,0.6);}'
            + '.notepad-badge.orange{background:#FF6230;box-shadow:0 8px 20px -6px rgba(255,98,48,0.6);}'
            // Checkerboard-Panel (Deko hinter/neben Porträt)
            + '.v3-checker{background-image:'
            + 'conic-gradient(#7b6ba5 0 25%, transparent 0 50%, #7b6ba5 0 75%, transparent 0);'
            + 'background-size:38px 38px;background-color:#ece8f2;}'
            // kleines Checker-Eck als Akzent
            + '.v3-checker-mini{background-image:'
            + 'conic-gradient(#FF6230 0 25%, transparent 0 50%, #FF6230 0 75%, transparent 0);'
            + 'background-size:20px 20px;}'
            // Squiggle-Divider (welle)
            + '.v3-squiggle{height:14px;background-repeat:repeat-x;background-size:48px 14px;'
            + 'background-image:url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'48\' height=\'14\' viewBox=\'0 0 48 14\'><path d=\'M0 7 C 8 -2, 16 16, 24 7 S 40 -2, 48 7\' fill=\'none\' stroke=\'%23FF6230\' stroke-width=\'2.5\'/></svg>");}'
            // Statement-Karte (große Aussage auf Farbe mit Squiggle-Hintergrund)
            + '.v3-statement{position:relative;overflow:hidden;border-radius:20px;padding:3rem 2.4rem;'
            + 'background:#7b6ba5;color:#fff;}'
            + '.v3-statement::before{content:"";position:absolute;inset:0;opacity:0.16;background-repeat:repeat;background-size:120px 120px;'
            + 'background-image:url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\' viewBox=\'0 0 120 120\'><path d=\'M-10 40 C 20 10, 40 70, 70 40 S 110 10, 140 40\' fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'8\'/><path d=\'M-10 90 C 20 60, 40 120, 70 90 S 110 60, 140 90\' fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'8\'/></svg>");}'
            + '.v3-statement > *{position:relative;z-index:1;}'
            + '@media (max-width:639px){'
            + '.prose h2{font-size:1.15rem;}.prose h3{font-size:0.98rem;}'
            + '.prose table{display:block;overflow-x:auto;}.prose pre{overflow-x:auto;}'
            + '}';
        document.head.appendChild(st);
    })();

    // Scroll Progress Bar — Orange
    (function mountScrollProgress() {
        if (document.getElementById('scroll-progress')) return;
        var bar = document.createElement('div');
        bar.id = 'scroll-progress';
        bar.setAttribute('aria-hidden', 'true');
        bar.style.cssText = 'position:fixed;top:0;left:0;height:3px;width:0%;background:#FF6230;z-index:9999;transition:width 0.05s linear;pointer-events:none;';
        document.body.appendChild(bar);
        function update() {
            var h = document.documentElement;
            var s = (h.scrollHeight - h.clientHeight);
            bar.style.width = (s > 0 ? (h.scrollTop / s) * 100 : 0) + '%';
        }
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        update();
    })();

    // Audio-Pill — Heidelbeer + Orange
    function mountAudioPills() {
        var slots = document.querySelectorAll('.reader-audio-slot');
        if (!slots.length) return;
        slots.forEach(function (slot) {
            if (slot.dataset.mounted) return;
            slot.dataset.mounted = '1';
            var srcA = slot.getAttribute('data-audio-src');
            var label = slot.getAttribute('data-audio-label') || 'Lieber hören statt lesen? Nutze die kurze Audio-Zusammenfassung.';
            if (!srcA) return;
            slot.innerHTML = '' +
                '<button type="button" class="reader-pill" aria-label="Audio-Zusammenfassung abspielen" ' +
                'style="display:inline-flex;align-items:center;gap:0.5rem;padding:0.35rem 0.9rem 0.35rem 0.5rem;max-width:100%;' +
                'border:1px solid #ecb89f;background:transparent;color:#7b3a22;border-radius:9999px;' +
                'font-size:0.8rem;font-weight:500;cursor:pointer;transition:all 0.15s;white-space:nowrap;overflow:hidden;">' +
                '<span class="reader-icon" style="display:inline-flex;width:22px;height:22px;border-radius:50%;background:#FF6230;color:#fff;align-items:center;justify-content:center;flex-shrink:0;">' +
                '<svg class="reader-play-icon" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>' +
                '<svg class="reader-pause-icon" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="display:none;"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>' +
                '</span>' +
                '<span class="reader-label" style="overflow:hidden;text-overflow:ellipsis;min-width:0;">' + label + '</span>' +
                '<span class="reader-dur" style="opacity:0.6;font-variant-numeric:tabular-nums;flex-shrink:0;"></span>' +
                '</button>' +
                '<audio class="reader-audio" preload="metadata" style="display:none;"><source src="' + srcA + '" type="audio/mpeg"></audio>';
            var pill = slot.querySelector('.reader-pill');
            var audio = slot.querySelector('.reader-audio');
            var playIcon = slot.querySelector('.reader-play-icon');
            var pauseIcon = slot.querySelector('.reader-pause-icon');
            var durEl = slot.querySelector('.reader-dur');
            function fmt(s) { s = Math.floor(s || 0); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); }
            pill.addEventListener('mouseenter', function () { if (audio.paused) pill.style.background = '#fdf0e9'; });
            pill.addEventListener('mouseleave', function () { if (audio.paused) pill.style.background = 'transparent'; });
            pill.addEventListener('click', function () { audio.paused ? audio.play() : audio.pause(); });
            audio.addEventListener('play', function () { playIcon.style.display = 'none'; pauseIcon.style.display = 'block'; pill.style.background = '#FF6230'; pill.style.color = '#fff'; pill.style.borderColor = '#FF6230'; });
            audio.addEventListener('pause', function () { playIcon.style.display = 'block'; pauseIcon.style.display = 'none'; pill.style.background = 'transparent'; pill.style.color = '#7b3a22'; pill.style.borderColor = '#ecb89f'; });
            audio.addEventListener('ended', function () { audio.currentTime = 0; durEl.textContent = '(' + fmt(audio.duration) + ')'; });
            audio.addEventListener('timeupdate', function () { if (audio.duration && !isNaN(audio.duration) && !audio.paused) { durEl.textContent = '(' + fmt(audio.duration - audio.currentTime) + ')'; } });
            audio.addEventListener('loadedmetadata', function () { durEl.textContent = '(' + fmt(audio.duration) + ')'; });
        });
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountAudioPills);
    else mountAudioPills();
})();
