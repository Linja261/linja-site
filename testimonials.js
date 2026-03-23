/**
 * Testimonial Slider — Single Source of Truth
 *
 * Einbindung in HTML:
 *   DE-Block: <div id="testimonials-de"></div>
 *   EN-Block: <div id="testimonials-en"></div>
 *   (oder beides in einem Block: <div id="testimonials"></div>)
 *   + <script src="testimonials.js"></script>
 *
 * Steuerung: hidden: true → Testimonial wird überall ausgeblendet
 */

var TESTIMONIALS = [
  {
    de: {
      quote: 'Linja denkt strategisch und bleibt dabei menschlich. Sie hat die seltene F\u00e4higkeit, implizite Annahmen sichtbar zu machen und als \u00dcbersetzerin zwischen Disziplinen zu wirken. Auch in schwierigen Situationen beh\u00e4lt sie Humor und Klarheit.',
      role: 'Abteilungsleiter Digitale Produkte'
    },
    en: {
      quote: 'Linja thinks strategically while staying human. She has the rare ability to make implicit assumptions visible and to act as a translator between disciplines. Even in difficult situations, she keeps her humor and clarity.',
      role: 'Head of Digital Products'
    },
    name: 'Jan H\u00f6lter',
    company: 'ABS Safety',
    linkedin: 'https://linkedin.com/in/janhoelter',
    hidden: false
  },
  {
    de: {
      quote: 'Was mich \u00fcberzeugt hat: Linja gibt klaren Kontext \u2013 Warum machen wir das? F\u00fcr wen? Mit welcher Hypothese? \u2013 und l\u00e4sst dann Raum f\u00fcr eigene L\u00f6sungen. Sie vereint verschiedene Disziplinen unter einer gemeinsamen Vision, ohne sich in Details einzumischen.',
      role: 'Team Lead UX/UI'
    },
    en: {
      quote: 'What convinced me: Linja provides clear context \u2014 Why are we doing this? For whom? Based on what hypothesis? \u2014 then leaves room for the team to find their own solutions. She unites different disciplines under a shared vision without micromanaging.',
      role: 'Team Lead UX/UI'
    },
    name: 'David Latz',
    company: 'ABS Safety',
    linkedin: 'https://linkedin.com/in/davidlatz',
    hidden: false
  },
  {
    de: {
      quote: 'Linja war zentrale Ansprechpartnerin in unserer internationalen Zusammenarbeit. Sie hat es geschafft, zwischen L\u00e4nderorganisationen zu vermitteln, kulturelle Unterschiede zu ber\u00fccksichtigen und die EU-weite Steuerung \u00fcber 17 M\u00e4rkte mit Ruhe und Struktur zu koordinieren.',
      role: 'AI Business Solutions Lead'
    },
    en: {
      quote: 'Linja was the central point of contact in our international collaboration. She managed to mediate between country organizations, bridge cultural differences, and coordinate EU-wide governance across 17 markets with calm and structure.',
      role: 'AI Business Solutions Lead'
    },
    name: 'Marian Pintea',
    company: 'Microsoft',
    linkedin: 'https://linkedin.com/in/marianpintea',
    hidden: true
  }
];

(function() {
  var visible = TESTIMONIALS.filter(function(t) { return !t.hidden; });
  if (!visible.length) return;

  function renderSlider(lang, suffix) {
    var slidesHtml = visible.map(function(t, i) {
      var d = t[lang];
      return '<div class="testimonial-slide' + suffix + ' transition-opacity duration-500' + (i > 0 ? ' hidden' : '') + '" data-slide="' + i + '">' +
        '<div class="border-l-3 pl-8 py-6" style="border-color: #7b6ba5;">' +
          '<p class="source-serif text-[1.1rem] text-stone-700 leading-relaxed mb-4">' +
            '\u201c' + d.quote + '\u201d' +
          '</p>' +
          '<p class="font-mono text-[0.72rem] text-stone-500 tracking-wider uppercase">' +
            '<a href="' + t.linkedin + '" target="_blank" class="font-medium text-stone-600 hover:text-stone-800 transition-colors">' + t.name + '</a> \u00b7 ' + d.role + ' \u00b7 ' + t.company +
          '</p>' +
        '</div>' +
      '</div>';
    }).join('');

    var dotsHtml = visible.map(function(_, i) {
      var label = lang === 'de' ? 'Zitat ' + (i + 1) : 'Quote ' + (i + 1);
      return '<button class="testimonial-dot' + suffix + ' w-2 h-2 rounded-full transition-colors" data-dot="' + i + '" style="background: ' + (i === 0 ? '#7b6ba5' : '#d9d1e5') + ';" aria-label="' + label + '"></button>';
    }).join('');

    return '<div class="rounded-lg py-12 px-8" style="background: #f6f4f9;">' +
      '<div class="relative">' +
        '<div class="overflow-hidden testimonial-container' + suffix + '">' + slidesHtml + '</div>' +
        '<div class="flex justify-center gap-2 mt-5">' + dotsHtml + '</div>' +
      '</div>' +
    '</div>';
  }

  // Render into separate DE/EN containers (used by index.html with site-de/site-en blocks)
  var deContainer = document.getElementById('testimonials-de');
  var enContainer = document.getElementById('testimonials-en');

  if (deContainer) deContainer.innerHTML = renderSlider('de', '');
  if (enContainer) enContainer.innerHTML = renderSlider('en', '-en');

  // Fallback: single combined container (if a page uses just one div)
  var combined = document.getElementById('testimonials');
  if (combined) {
    combined.innerHTML =
      '<div class="lang-de">' + renderSlider('de', '') + '</div>' +
      '<div class="lang-en lang-hidden">' + renderSlider('en', '-en') + '</div>';
  }

  // Slider logic
  function initSlider(slideSelector, dotSelector, containerSelector) {
    var slides = document.querySelectorAll(slideSelector);
    var dots = document.querySelectorAll(dotSelector);
    var containers = document.querySelectorAll(containerSelector);
    if (!slides.length || !containers.length) return;

    var current = 0;
    var total = slides.length;
    // With multiple containers (DE + EN), we need per-container logic
    // But slides/dots are unique per suffix, so this works globally

    function setFixedHeight() {
      containers.forEach(function(c) {
        var cSlides = c.querySelectorAll('[data-slide]');
        c.style.height = 'auto';
        cSlides.forEach(function(s) { s.classList.remove('hidden'); s.style.position = 'static'; });
        var maxH = 0;
        cSlides.forEach(function(s) { if (s.offsetHeight > maxH) maxH = s.offsetHeight; });
        c.style.minHeight = maxH + 'px';
        c.style.height = maxH + 'px';
        cSlides.forEach(function(s, i) {
          s.style.position = 'absolute';
          s.style.top = '0';
          s.style.left = '0';
          s.style.right = '0';
          if (i !== current) s.classList.add('hidden');
        });
        c.style.position = 'relative';
      });
    }
    setFixedHeight();
    window.addEventListener('resize', setFixedHeight);

    function show(index) {
      slides.forEach(function(s) { s.classList.add('hidden'); });
      slides[index].classList.remove('hidden');
      dots.forEach(function(d) { d.style.background = '#d9d1e5'; });
      dots[index].style.background = '#7b6ba5';
      current = index;
    }

    dots.forEach(function(dot) {
      dot.addEventListener('click', function() {
        show(parseInt(this.dataset.dot));
      });
    });

    setInterval(function() { show((current + 1) % total); }, 6000);
  }

  // Expose for re-init after language toggle
  window.initTestimonialSliders = function() {
    initSlider('.testimonial-slide', '.testimonial-dot', '.testimonial-container');
    initSlider('.testimonial-slide-en', '.testimonial-dot-en', '.testimonial-container-en');
  };

  window.initTestimonialSliders();
})();
