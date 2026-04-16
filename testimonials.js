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
      quote: 'Besonders beeindruckend ist ihre F\u00e4higkeit, komplexe Zusammenh\u00e4nge klar zu strukturieren und f\u00fcr unterschiedliche Zielgruppen verst\u00e4ndlich zu machen. Sie \u00fcbersetzt zwischen Business, Produkt und Technologie, macht implizite Annahmen sichtbar und schafft geteiltes Verst\u00e4ndnis. Methodik ist f\u00fcr sie kein Selbstzweck, sondern Werkzeug, um Klarheit zu erzeugen und Entscheidungsf\u00e4higkeit zu st\u00e4rken.',
      role: 'Abteilungsleiter Digitale Produkte'
    },
    en: {
      quote: 'What\u2019s particularly impressive is her ability to structure complex topics clearly and make them accessible for different audiences. She translates between business, product, and technology, makes implicit assumptions visible, and creates shared understanding. For her, methodology isn\u2019t an end in itself \u2014 it\u2019s a tool to create clarity and strengthen decision-making.',
      role: 'Head of Digital Products'
    },
    name: 'Jan H\u00f6lter',
    company: 'ABS Safety',
    linkedin: 'https://linkedin.com/in/janhoelter',
    hidden: false
  },
  {
    de: {
      quote: 'In unserer Zusammenarbeit hat mich vor allem ihre F\u00e4higkeit beeindruckt, implizite Annahmen sichtbar zu machen. Sie \u00fcbersetzt zwischen Business, Produkt und Technologie so, dass alle Beteiligten tats\u00e4chlich mitkommen \u2014 nicht nur nicken. Sie versteckt sich nicht hinter Frameworks. Sie stellt die Fragen, die andere vermeiden, und bringt Dinge auf den Punkt.',
      role: 'Team Lead UX/UI'
    },
    en: {
      quote: 'What impressed me most in our collaboration was her ability to make implicit assumptions visible. She translates between business, product, and technology in a way that everyone actually follows along \u2014 not just nods. She doesn\u2019t hide behind frameworks. She asks the questions others avoid and gets straight to the point.',
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
  },
  {
    de: {
      quote: 'Was ich pers\u00f6nlich besonders gesch\u00e4tzt habe: Linja hat Vertrauen geschaffen und Verantwortung erm\u00f6glicht. Als Entwickler hatte man nicht nur Tickets, sondern echten Gestaltungsspielraum \u2013 bei gleichzeitig klarer Produktvision.',
      role: 'Senior Software Engineer'
    },
    en: {
      quote: 'What I personally valued most: Linja built trust and enabled ownership. As a developer, you didn\u2019t just get tickets \u2014 you had real creative freedom, paired with a clear product vision.',
      role: 'Senior Software Engineer'
    },
    name: 'Tobias Kraus',
    company: 'pemedia',
    linkedin: 'https://linkedin.com/in/tobias-kraus-io',
    hidden: false
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
    // Recalculate after fonts load (Source Serif reflows text)
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(setFixedHeight);
    }

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
