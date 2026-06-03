/*
 * analytics.js – Zentrales, cookieloses Tracking für linja.me (Umami)
 *
 * Eingebunden über:
 *   - components.js  (alle öffentlichen Seiten + Blog)
 *   - ag-service.js  (MatGrid-Pilot-Mini-Site)
 *   - Direkt-Snippet  (Recht-Seiten, Einzel-Ausreißer)  ->  <script defer src="/analytics.js"></script>
 *
 * Prinzip:
 *   - Cookieless (kein Consent-Banner, DSGVO-konform).
 *   - office/-Cockpit wird NICHT getrackt (Linjas private Nutzung verfälscht keine Zahlen).
 *   - Zusätzlich zu den automatischen Pageviews feuern wir benannte Funnel-Events.
 *
 * EINMALIGE KONFIGURATION (nach Umami-Account-Anlage):
 *   -> WEBSITE_ID unten mit der echten Website-ID aus dem Umami-Dashboard ersetzen.
 *      Solange der Platzhalter steht, lädt das Tracking bewusst NICHTS.
 */
(function () {
    'use strict';

    // ====== KONFIG ======
    var WEBSITE_ID = '__UMAMI_WEBSITE_ID__';            // <- hier echte ID einsetzen
    var SCRIPT_SRC = 'https://cloud.umami.is/script.js'; // EU-Region: 'https://eu.umami.is/script.js'
    // =====================

    // Noch nicht konfiguriert -> nichts laden (Seite bleibt tracking-frei)
    if (WEBSITE_ID.indexOf('__') === 0) return;

    // Office-Cockpit (Linjas private Seiten) nie tracken
    if (location.pathname.indexOf('/office/') !== -1) return;

    // Respektiere "Do Not Track" und eine lokale Opt-out-Flag
    if (navigator.doNotTrack === '1' || window.doNotTrack === '1') return;
    try { if (localStorage.getItem('linja-no-track') === '1') return; } catch (e) {}

    // ---- Umami-Script laden ----
    var s = document.createElement('script');
    s.defer = true;
    s.src = SCRIPT_SRC;
    s.setAttribute('data-website-id', WEBSITE_ID);
    // Saubere Pfade gruppieren (Trailing-Slash egal); keine eigene Domain-Filterung nötig
    document.head.appendChild(s);

    // ---- Helfer: Event feuern (no-op falls umami noch nicht da) ----
    function track(name, data) {
        try {
            if (window.umami && typeof window.umami.track === 'function') {
                data ? window.umami.track(name, data) : window.umami.track(name);
            }
        } catch (e) {}
    }

    var p = location.pathname;
    var isArticle = /\/blog\/[^/]+\.html$/.test(p) && p.indexOf('/blog/index') === -1;
    var slug = p.split('/').pop().replace('.html', '') || 'start';

    // ---- Klick-Events (Delegation, capture) ----
    document.addEventListener('click', function (e) {
        var el = e.target.closest ? e.target.closest('a, button') : null;
        if (!el) return;
        var href = (el.getAttribute('href') || '').toLowerCase();

        if (href.indexOf('mailto:') === 0)            track('kontakt-email');
        else if (href.indexOf('tel:') === 0)          track('kontakt-telefon');
        else if (href.indexOf('#kontakt') !== -1)     track('kontakt-cta', { quelle: slug });
        else if (href.indexOf('linkedin.com') !== -1) track('outbound-linkedin');
        else if (href.indexOf('substack.com') !== -1) track('outbound-substack');
        else if (href.indexOf('calendly.com') !== -1) track('termin-buchung');
        else if (href.indexOf('cv.linja.me') !== -1)  track('cv-besuch');
        else if (/^https?:\/\//.test(href) && href.indexOf('linja.me') === -1) track('outbound', { ziel: href });

        // Angebots-CTAs (Buttons/Links Richtung Angebote oder Leistungsseiten)
        if (href.indexOf('angebote') !== -1)              track('cta-angebote', { quelle: slug });
        else if (href.indexOf('strategy-execution') !== -1) track('cta-strategy');
        else if (href.indexOf('product-management') !== -1) track('cta-product');
    }, true);

    // ---- Sprachwechsel DE/EN ----
    document.addEventListener('click', function (e) {
        var b = e.target.closest ? e.target.closest('#lang-toggle, #lang-toggle-mobile, [onclick*="toggleLanguage"]') : null;
        if (b) track('sprachwechsel', { seite: slug });
    }, true);

    // ---- Reader-Audio Play (nur erstes Play je Seite) ----
    var audioFired = false;
    document.addEventListener('play', function (e) {
        if (audioFired) return;
        if (e.target && e.target.tagName === 'AUDIO') {
            audioFired = true;
            track('audio-play', { artikel: slug });
        }
    }, true);

    // ---- Lesetiefe auf Artikeln: einmaliges Event bei 75% ----
    if (isArticle) {
        var read = false;
        window.addEventListener('scroll', function () {
            if (read) return;
            var doc = document.documentElement;
            var reached = (window.scrollY + window.innerHeight) / (doc.scrollHeight || 1);
            if (reached >= 0.75) {
                read = true;
                track('artikel-gelesen', { artikel: slug });
            }
        }, { passive: true });
    }
})();
