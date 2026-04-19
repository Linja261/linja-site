/*
 * office.js – Shared Logic für linja.me/office Backoffice
 *
 * Einbinden: <script src="office.js"></script>
 * Konfiguration über data-Attribute am <script>-Tag:
 *   data-active="dashboard"  → Welcher Nav-Link aktiv ist (dashboard|workflows|blog|angebote|ziele|zeit)
 *
 * Im HTML: <div id="office-gate"></div><div id="office-content" style="display:none">...</div>
 */
(function () {
    var PASS = 'Lagerfeuer2026';
    var AUTH_KEY = 'office-auth';

    var scripts = document.querySelectorAll('script[src*="office.js"]');
    var scriptTag = scripts[scripts.length - 1];
    var activePage = scriptTag.getAttribute('data-active') || 'dashboard';

    // === NAV ===
    var navItems = [
        { id: 'dashboard', label: 'Dashboard', href: 'index.html' },
        { id: 'workflows', label: 'Workflows', href: 'workflows.html' },
        { id: 'blog', label: 'Blog', href: 'blog.html' },
        { id: 'angebote', label: 'Angebote', href: 'angebote.html' },
        { id: 'ziele', label: 'Ziele', href: 'ziele.html' },
        { id: 'zeit', label: 'Zeit', href: 'zeit.html' },
    ];

    function buildNav() {
        var items = navItems.map(function (item) {
            var isActive = item.id === activePage;
            var cls = isActive
                ? 'text-violet-500 font-medium border-b-2 border-violet-400 pb-1'
                : 'text-stone-500 hover:text-stone-800 transition-colors pb-1 border-b-2 border-transparent';
            return '<a href="' + item.href + '" class="' + cls + '">' + item.label + '</a>';
        }).join('');

        return ''
            + '<nav class="fixed top-0 left-0 right-0 z-50" style="background: rgba(250,250,248,0.94); backdrop-filter: blur(8px); border-bottom: 1px solid #E5E2DB;">'
            + '<div class="max-w-[1100px] mx-auto px-6 py-4 flex items-center justify-between gap-6">'
            + '<div class="flex items-center gap-3">'
            + '<span class="source-serif text-stone-900 text-base">Office</span>'
            + '<span class="font-mono text-[0.6rem] tracking-wider uppercase px-2 py-0.5 rounded" style="background: #fae8de; color: #a86340;">intern</span>'
            + '</div>'
            + '<div class="flex items-center gap-5 text-[0.8rem] overflow-x-auto">' + items + '</div>'
            + '<button onclick="officeLogout()" class="text-[0.7rem] text-stone-400 hover:text-stone-600 font-mono tracking-wide hidden sm:inline">LOGOUT</button>'
            + '</div></nav>';
    }

    // === GATE ===
    function buildGate() {
        return ''
            + '<div class="min-h-screen flex items-center justify-center px-6">'
            + '<div class="max-w-sm w-full text-center">'
            + '<p class="font-mono text-[0.65rem] tracking-wider uppercase mb-3 text-violet-400">Office · intern</p>'
            + '<h1 class="source-serif text-2xl text-stone-900 mb-2">Office.</h1>'
            + '<p class="text-sm text-stone-400 mb-6">Nur für Linja.</p>'
            + '<form onsubmit="return officeCheckPass()">'
            + '<input type="password" id="office-pass" placeholder="Passwort" autofocus '
            + 'class="w-full px-5 py-4 rounded-2xl border text-sm bg-white focus:outline-none focus:border-violet-300 mb-3" '
            + 'style="border-color: #E5E2DB;">'
            + '<button type="submit" class="w-full bg-violet-400 hover:bg-violet-500 text-white font-semibold px-6 py-4 rounded-2xl text-sm transition-all">Öffnen</button>'
            + '</form>'
            + '<p id="office-error" class="text-xs text-red-400 mt-3 hidden">Falsches Passwort.</p>'
            + '</div></div>';
    }

    // === AUTH FLOW ===
    function isAuthed() {
        return sessionStorage.getItem(AUTH_KEY) === 'true';
    }

    function mountGate() {
        var gate = document.getElementById('office-gate');
        var content = document.getElementById('office-content');
        if (!gate || !content) return;

        if (isAuthed()) {
            gate.style.display = 'none';
            content.style.display = 'block';
            // Inject nav at top of content if placeholder exists
            var navPlaceholder = document.getElementById('office-nav');
            if (navPlaceholder) navPlaceholder.outerHTML = buildNav();
        } else {
            gate.innerHTML = buildGate();
            gate.style.display = 'block';
            content.style.display = 'none';
        }
    }

    window.officeCheckPass = function () {
        var input = document.getElementById('office-pass').value;
        if (input === PASS) {
            sessionStorage.setItem(AUTH_KEY, 'true');
            location.reload();
        } else {
            document.getElementById('office-error').classList.remove('hidden');
        }
        return false;
    };

    window.officeLogout = function () {
        sessionStorage.removeItem(AUTH_KEY);
        location.reload();
    };

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
        document.addEventListener('DOMContentLoaded', mountGate);
    } else {
        mountGate();
    }
})();
