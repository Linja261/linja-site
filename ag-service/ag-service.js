/*
 * ag-service.js – Shared Logic für linja.me/ag-service/ Mini-Site
 *
 * Einbinden: <script src="ag-service.js" data-active="dashboard"></script>
 * data-active = dashboard | idee | pitch | hypothesen | personas | markt | interviews | pilot
 *
 * Im HTML: <div id="ag-content">...</div>
 *
 * Kein Passwortschutz: die Seiten sind nicht indexiert, aber offen erreichbar.
 */
(function () {
    // Cookieloses Tracking laden (no-op solange in analytics.js keine ID gesetzt ist)
    if (!document.querySelector('script[src$="/analytics.js"]')) {
        var trk = document.createElement('script');
        trk.defer = true;
        trk.src = '/analytics.js';
        document.head.appendChild(trk);
    }

    var scripts = document.querySelectorAll('script[src*="ag-service.js"]');
    var scriptTag = scripts[scripts.length - 1];
    var activePage = scriptTag.getAttribute('data-active') || 'dashboard';

    // === NAV ===
    // Primary-Nav: 7 Einträge. Deck, Staffeln, Tracker, Pitch (Reading) erreicht
    // man bewusst über Dashboard-Tiles oder Cross-Links — nicht jede Seite muss in
    // den Hauptrhythmus.
    var navItems = [
        { id: 'dashboard', label: 'Übersicht', href: 'index.html' },
        { id: 'idee', label: 'Idee', href: 'idee.html' },
        { id: 'personas', label: 'Personas', href: 'personas.html' },
        { id: 'markt', label: 'Markt', href: 'markt.html' },
        { id: 'hypothesen', label: 'Hypothesen', href: 'hypothesen.html' },
        { id: 'interviews', label: 'Interviews', href: 'interviews.html' },
        { id: 'pilot', label: 'Pilot', href: 'pilot.html' },
    ];

    function buildNav() {
        var items = navItems.map(function (item) {
            var isActive = item.id === activePage;
            var cls = isActive
                ? 'text-violet-500 font-medium border-b-2 border-violet-400 pb-1'
                : 'text-stone-500 hover:text-stone-800 transition-colors pb-1 border-b-2 border-transparent';
            return '<a href="' + item.href + '" class="' + cls + '">' + item.label + '</a>';
        }).join('');

        // Tool-Links: Deck + Landing sind aus jeder Seite 1-Click erreichbar.
        // Visuell kleiner als Primary-Nav, aber immer sichtbar.
        var tools = ''
            + '<div class="flex items-center gap-2 shrink-0">'
            + '<a href="deck.html" class="font-mono text-[0.65rem] tracking-wider uppercase px-2.5 py-1 rounded border hover:border-violet-300 hover:text-violet-500 transition-all" style="border-color: #E5E2DB; color: #44403c;" title="Pitch-Deck (Fullscreen)">Deck</a>'
            + '<a href="/ag-service-pilot/" target="_blank" rel="noopener" class="font-mono text-[0.65rem] tracking-wider uppercase px-2.5 py-1 rounded border hover:border-violet-300 hover:text-violet-500 transition-all" style="border-color: #E5E2DB; color: #44403c;" title="Public Landing Page">Landing <span style="opacity: 0.5;">↗</span></a>'
            + '</div>';

        return ''
            + '<nav class="fixed top-0 left-0 right-0 z-50" style="background: rgba(250,250,248,0.94); backdrop-filter: blur(8px); border-bottom: 1px solid #E5E2DB;">'
            + '<div class="max-w-[1100px] mx-auto px-6 py-4 flex items-center justify-between gap-4">'
            + '<div class="flex items-center gap-3 shrink-0">'
            + '<span class="source-serif text-stone-900 text-base">AG Service</span>'
            + '<span class="font-mono text-[0.6rem] tracking-wider uppercase px-2 py-0.5 rounded hidden md:inline" style="background: #fae8de; color: #a86340;">intern</span>'
            + '</div>'
            + '<div class="flex items-center gap-5 text-[0.8rem] overflow-x-auto flex-1 min-w-0">' + items + '</div>'
            + tools
            + '</div></nav>';
    }

    // === NAV MOUNTING ===
    // Kein Passwort-Gate mehr: es war clientseitig und damit wirkungslos.
    // Die Seiten tragen <meta name="robots" content="noindex, nofollow">.
    function mountNav() {
        var content = document.getElementById('ag-content');
        if (content) content.style.display = 'block';
        var gate = document.getElementById('ag-gate');
        if (gate) gate.remove();
        var navPlaceholder = document.getElementById('ag-nav');
        if (navPlaceholder) navPlaceholder.outerHTML = buildNav();
    }

    // Mount on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', mountNav);
    } else {
        mountNav();
    }
})();
