/*
 * nav.js – Shared Navigation für die nicht indexierten Bereiche von linja.me
 *
 * Nachfolger von office/office.js. Der Passwortschutz ist entfallen: er war
 * clientseitig und damit wirkungslos. Diese Seiten tragen stattdessen
 * <meta name="robots" content="noindex, nofollow"> und stehen nicht im Index.
 * Nichts Vertrauliches gehört hierher.
 *
 * Einbinden: <script src="/nav.js" data-active="skills"></script>
 */
(function () {
    var AUTH_KEY = 'office-auth';

    var scripts = document.querySelectorAll('script[src*="nav.js"]');
    var scriptTag = scripts[scripts.length - 1];
    var activePage = (scriptTag && scriptTag.getAttribute('data-active')) || 'dashboard';

    // === MOBILE-FEINSCHLIFF (<640px, Desktop unberührt) ===
    (function () {
        if (document.getElementById('office-mobile-tweaks')) return;
        var st = document.createElement('style');
        st.id = 'office-mobile-tweaks';
        st.textContent = '@media (max-width:639px){'
            + 'table.cmp{display:block;overflow-x:auto;-webkit-overflow-scrolling:touch;}'
            + 'table.cmp thead,table.cmp tbody{display:table;width:100%;min-width:560px;}'
            + '}';
        document.head.appendChild(st);
    })();

    // === NAV ===
    var clusters = [
        { id: 'publikationen', label: 'Publikationen', items: [
            { id: 'blog', label: 'Blog', href: '/publikationen/index.html' },
            { id: 'promo', label: 'Promo', href: '/publikationen/promo.html' },
            { id: 'netzwerkabend', label: 'Vortrag · Netzwerkabend', href: '/publikationen/netzwerkabend/index.html' },
            { id: 'ki-studium', label: 'Uni-Vortrag · KI im Studium', href: '/publikationen/ki-studium/index.html' },
        ]},
        { id: 'projekte', label: 'Projekte', items: [
            { id: 'projekte', label: 'Übersicht', href: '/projekte/index.html' },
            { id: 'p-matgrid', label: 'MatGrid', href: '/projekte/projekt-matgrid.html' },
            { id: 'p-mamabande', label: 'mamabande', href: '/projekte/projekt-mamabande.html' },
            { id: 'p-agservice', label: 'AG Service', href: '/projekte/projekt-ag-service.html' },
            { id: 'p-koaly', label: 'Koaly', href: '/projekte/projekt-koaly.html' },
            { id: 'p-reader', label: 'Reader', href: '/projekte/projekt-reader.html' },
        ]},
        { id: 'wissen', label: 'Wissen', items: [
            { id: 'skills', label: 'Skills', href: '/skills/index.html' },
            { id: 'lernplan', label: 'Lernplan', href: '/skills/lernplan.html' },
            { id: 'workflows', label: 'Workflows', href: '/skills/workflows.html' },
            { id: 'spec-driven', label: 'Spec-Driven Development', href: '/skills/spec-driven.html' },
            { id: 'brandkit', label: 'Brand Kit', href: '/brandkit/index.html' },
        ]},
    ];

    function buildNav() {
        var clusterButtons = clusters.map(function (c, idx) {
            var hasActive = c.items.some(function (i) { return i.id === activePage; });
            var btnCls = hasActive
                ? 'text-violet-500 font-medium pb-1 border-b-2 border-violet-400'
                : 'text-stone-500 hover:text-stone-800 transition-colors pb-1 border-b-2 border-transparent';
            var menuItems = c.items.map(function (i) {
                var isActive = i.id === activePage;
                var iCls = isActive
                    ? 'block px-4 py-2 text-sm text-violet-500 bg-violet-50 font-medium'
                    : 'block px-4 py-2 text-sm text-stone-700 hover:bg-stone-50 transition-colors';
                return '<a href="' + i.href + '" class="' + iCls + '">' + i.label + '</a>';
            }).join('');
            // Last cluster aligns dropdown to right edge to prevent off-screen
            var alignCls = (idx === clusters.length - 1) ? 'right-0' : 'left-0';
            return ''
                + '<div class="relative">'
                + '<button type="button" data-cluster-btn="' + c.id + '" class="' + btnCls + ' flex items-center gap-1 cursor-pointer" style="touch-action: manipulation;">'
                + '<span>' + c.label + '</span>'
                + '<svg class="w-3 h-3 transition-transform" data-cluster-chevron="' + c.id + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>'
                + '</button>'
                + '<div data-cluster-menu="' + c.id + '" class="hidden absolute top-full ' + alignCls + ' mt-2 min-w-[180px] bg-white border rounded-lg shadow-lg overflow-hidden z-50" style="border-color: #E5E2DB;">'
                + menuItems
                + '</div>'
                + '</div>';
        }).join('');

        // Mobile burger panel: all clusters as sections
        var mobileSections = clusters.map(function (c) {
            var items = c.items.map(function (i) {
                var isActive = i.id === activePage;
                var iCls = isActive
                    ? 'block px-4 py-3 text-sm text-violet-500 bg-violet-50 font-medium'
                    : 'block px-4 py-3 text-sm text-stone-700 hover:bg-stone-50 transition-colors';
                return '<a href="' + i.href + '" class="' + iCls + '">' + i.label + '</a>';
            }).join('');
            return ''
                + '<div class="border-b" style="border-color: #E5E2DB;">'
                + '<p class="px-4 pt-4 pb-2 font-mono text-[0.6rem] tracking-wider uppercase text-stone-400">' + c.label + '</p>'
                + items
                + '</div>';
        }).join('');

        return ''
            + '<nav class="fixed top-0 left-0 right-0 z-50" style="background: rgba(250,250,248,0.94); backdrop-filter: blur(8px); border-bottom: 1px solid #E5E2DB;">'
            + '<div class="max-w-[1100px] mx-auto px-6 py-4 flex items-center justify-between gap-6">'
            + '<a href="index.html" class="flex items-center gap-3 group flex-shrink-0">'
            + '<span class="source-serif text-stone-900 text-base group-hover:text-violet-500 transition-colors">Office</span>'
            + '<span class="font-mono text-[0.6rem] tracking-wider uppercase px-2 py-0.5 rounded" style="background: #fae8de; color: #a86340;">intern</span>'
            + '</a>'
            + '<div class="hidden md:flex items-center gap-5 text-[0.8rem]">' + clusterButtons + '</div>'
            + '<div class="hidden md:flex items-center gap-3 flex-shrink-0">'
            + '</div>'
            + '<button type="button" id="office-burger" class="md:hidden flex items-center justify-center w-10 h-10 -mr-2 text-stone-700" style="touch-action: manipulation;" aria-label="Menü">'
            + '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>'
            + '</button>'
            + '</div>'
            + '<div id="office-mobile-panel" class="hidden md:hidden bg-white border-t" style="border-color: #E5E2DB; max-height: calc(100vh - 64px); overflow-y: auto;">'
            + mobileSections
            + '<div class="border-b" style="border-color: #E5E2DB;">'
            + '</div>'
            + '</div>'
            + '</nav>';
    }

    // === NAV MOUNTING ===
    // Kein Passwort-Gate mehr. Diese Seiten sind nicht indexiert, aber offen.
    function mountNav() {
        var content = document.getElementById('office-content');
        if (content) content.style.display = 'block';
        var gate = document.getElementById('office-gate');
        if (gate) gate.remove();
        var navPlaceholder = document.getElementById('office-nav');
        if (navPlaceholder) navPlaceholder.outerHTML = buildNav();
        attachNavHandlers();
    }

    function closeAllClusters() {
        document.querySelectorAll('[data-cluster-menu]').forEach(function (m) { m.classList.add('hidden'); });
        document.querySelectorAll('[data-cluster-chevron]').forEach(function (c) { c.style.transform = ''; });
    }

    function toggleCluster(id) {
        var menu = document.querySelector('[data-cluster-menu="' + id + '"]');
        var chevron = document.querySelector('[data-cluster-chevron="' + id + '"]');
        if (!menu) return;
        var willOpen = menu.classList.contains('hidden');
        // Close all first
        closeAllClusters();
        if (willOpen) {
            menu.classList.remove('hidden');
            if (chevron) chevron.style.transform = 'rotate(180deg)';
        }
    }

    function attachNavHandlers() {
        // Cluster buttons (desktop)
        document.querySelectorAll('[data-cluster-btn]').forEach(function (btn) {
            btn.addEventListener('click', function (ev) {
                ev.stopPropagation();
                ev.preventDefault();
                toggleCluster(btn.getAttribute('data-cluster-btn'));
            });
        });

        // Burger (mobile)
        var burger = document.getElementById('office-burger');
        var panel = document.getElementById('office-mobile-panel');
        if (burger && panel) {
            burger.addEventListener('click', function (ev) {
                ev.stopPropagation();
                ev.preventDefault();
                panel.classList.toggle('hidden');
            });
            // Close panel on item click (links navigate, but panel state reset on next page)
            panel.addEventListener('click', function (ev) {
                if (ev.target.closest('a')) {
                    panel.classList.add('hidden');
                }
            });
        }
    }

    // Outside-click closes any open cluster + mobile panel
    document.addEventListener('click', function (ev) {
        var inClusterBtn = ev.target.closest('[data-cluster-btn]');
        var inClusterMenu = ev.target.closest('[data-cluster-menu]');
        var inBurger = ev.target.closest('#office-burger');
        var inPanel = ev.target.closest('#office-mobile-panel');
        if (!inClusterBtn && !inClusterMenu) closeAllClusters();
        if (!inBurger && !inPanel) {
            var panel = document.getElementById('office-mobile-panel');
            if (panel) panel.classList.add('hidden');
        }
    });

    document.addEventListener('keydown', function (ev) {
        if (ev.key === 'Escape') {
            closeAllClusters();
            var panel = document.getElementById('office-mobile-panel');
            if (panel) panel.classList.add('hidden');
        }
    });

    // Ziel aus ?next= – nur eigene Office-Pfade, damit niemand von außen
    // einen fremden Redirect in den Link schmuggeln kann.
    // === LOCAL STORAGE HELPERS ===
    window.officeStore = {
        get: function (key, fallback) {
            try {
                var raw = localStorage.getItem('office-' + key);
                return raw ? JSON.parse(raw) : (fallback !== undefined ? fallback : null);
            } catch (e) {
                return fallback !== undefined ? fallback : null;
            }
        },
        set: function (key, value) {
            localStorage.setItem('office-' + key, JSON.stringify(value));
        },
        remove: function (key) {
            localStorage.removeItem('office-' + key);
        },
        exportAll: function () {
            var data = {};
            for (var i = 0; i < localStorage.length; i++) {
                var k = localStorage.key(i);
                if (k && k.indexOf('office-') === 0) {
                    data[k] = JSON.parse(localStorage.getItem(k));
                }
            }
            return data;
        },
    };

    // === UTILS ===
    window.officeUtils = {
        today: function () {
            return new Date().toISOString().slice(0, 10);
        },
        weekOf: function (dateStr) {
            var d = dateStr ? new Date(dateStr) : new Date();
            d.setHours(0, 0, 0, 0);
            // ISO week: Thursday trick
            var target = new Date(d.valueOf());
            var dayNr = (d.getDay() + 6) % 7;
            target.setDate(target.getDate() - dayNr + 3);
            var firstThursday = target.valueOf();
            target.setMonth(0, 1);
            if (target.getDay() !== 4) {
                target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
            }
            return 1 + Math.ceil((firstThursday - target) / 604800000);
        },
        downloadJSON: function (filename, data) {
            var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            var url = URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        },
    };

    // Mount on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', mountNav);
    } else {
        mountNav();
    }
})();
