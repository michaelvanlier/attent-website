/* ========================================
   ATTENT — Main JavaScript
   Interactions, scroll, translations
   ======================================== */

(function () {
  'use strict';

  /* ---- Translation dictionary ---- */
  const dict = {
    en: {
      'nav.features': 'Features',
      'nav.how': 'How it works',
      'hero.line1': 'Never miss a',
      'hero.sub': 'Attent helps you show up for the moments that matter.',
      'hero.cta1': 'Download for free',
      'hero.cta2': 'See how it works',
      'problem.label': 'THE UGLY TRUTH',
      'problem.title': 'Everyone wants to be thoughtful.\nAlmost no one is.',
      'problem.card1': '92% want to be more thoughtful to their loved ones. Wanting it isn\'t the problem.',
      'problem.card2': 'You know it\'s mom\'s birthday. But you don\'t know exactly when. Or her ring size. Or where to send that gift.',
      'problem.card3': 'A reminder on the day itself is a reminder to feel guilty.',
      'problem.stat': 'days in advance',
      'pivot.text': 'Imagine never missing a moment again.',
      'how.label': 'HOW IT WORKS',
      'how.title': 'Three steps to never forgetting again',
      'how.step1.title': 'Add your people',
      'how.step1.desc': 'Import contacts or add them by hand. Set birthdays, anniversaries, whatever matters.',
      'how.step2.title': 'Get smart reminders',
      'how.step2.desc': 'Attent tells you early enough to act. Not on the day when all you can do is send a panicked text.',
      'how.step3.title': 'Show up and build streaks',
      'how.step3.desc': 'Send a gift, write a message, or just check in. Every action builds your streak.',
      'stories.card1': 'Sarah turns 30 in 3 weeks. Attent told you in time. You got a gift sorted. You\'re the hero.',
      'stories.card1.tag': 'Smart reminders',
      'stories.card2': 'You remember your client loves sushi. That your colleague became a dad last month. Small details, big difference.',
      'stories.card2.tag': 'Everything in one place',
      'stories.card3': '7 days in a row of being thoughtful. Your streak grows. You\'re getting a little competitive about it.',
      'stories.card3.tag': 'Streaks that make it fun',
      'proof.title': 'A problem that was universally recognized.',
      'proof.quote1': '\u201cA solution that feels like it should have always existed.\u201d',
      'proof.attr1': 'Founder, pitch session',
      'proof.quote2': '\u201cI literally forgot my best friend\u2019s birthday last month. Take my money.\u201d',
      'proof.attr2': 'Developer, pitch session',
      'proof.quote3': '\u201cThe streak thing is genius. I\u2019d compete with my siblings over who\u2019s more thoughtful.\u201d',
      'proof.attr3': 'Creative, pitch session',
      'proof.rating': '4.9 from pitch sessions',
      'cards.label': 'WHAT YOU GET',
      'cards.title': 'Reminders that actually matter',
      'cards.sub': 'No boring notifications. Personal, timely nudges that help you show up.',
      'cta.title': 'Your people deserve someone who remembers.',
      'cta.sub': 'Be that someone.',
      'cta.btn': 'Download Attent for free',
      'footer.tagline': 'The thoughtfulness app.',
      'footer.product': 'Product',
      'footer.company': 'Company',
      'footer.legal': 'Legal',
      'footer.link.features': 'Features',
      'footer.link.how': 'How it works',
      'footer.link.download': 'Download',
      'footer.link.about': 'About us',
      'footer.link.blog': 'Blog',
      'footer.link.contact': 'Contact',
      'footer.link.privacy': 'Privacy',
      'footer.link.terms': 'Terms',
      'footer.credit': 'Made with love by Studio BLEACH',
      // Phone screens
      'phone.contacts': 'My people',
      'phone.birthday': 'Birthday: April 14',
      'phone.birthday2': 'Birthday: June 8',
      'phone.anniv': 'Anniversary: May 22',
      'phone.birthday3': 'Birthday: Dec 3',
      'phone.reminders': 'Reminders',
      'phone.in3weeks': 'In 3 weeks',
      'phone.sarah30': 'Sarah turns 30!',
      'phone.sarahHint': 'Time to sort a gift',
      'phone.in6weeks': 'In 6 weeks',
      'phone.mama': 'Mom\u2019s birthday',
      'phone.mamaHint': 'She wanted that book by Kluun',
      'phone.in2months': 'In 2 months',
      'phone.thomas': 'Anniversary Thomas & Eva',
      'phone.thomasHint': 'Book a dinner?',
      'phone.activity': 'Activity',
      'phone.streak': 'days in a row',
      'phone.sent': 'Gift sent to Sarah',
      'phone.checked': 'Checked in with Thomas',
      'phone.wrote': 'Message sent to Lisa'
    },
    nl: {
      'nav.features': 'Features',
      'nav.how': 'Hoe het werkt',
      'hero.line1': 'Je geeft om je mensen.',
      'hero.line2': 'Je vergeet het alleen soms.',
      'hero.sub': 'Attent helpt je om er te zijn op de momenten die ertoe doen.',
      'hero.cta1': 'Download gratis',
      'hero.cta2': 'Bekijk hoe het werkt',
      'problem.label': 'DE HARDE WAARHEID',
      'problem.title': 'Iedereen wil attent zijn.\nBijna niemand is het.',
      'problem.card1': '92% wil attenter zijn voor hun dierbaren. Het willen is niet het probleem.',
      'problem.card2': 'Je weet dat mama jarig is. Maar je weet niet precies wanneer. Of wat haar ringmaat is. Of waar je dat cadeautje naartoe moet sturen.',
      'problem.card3': 'Een herinnering op de dag zelf is een herinnering om je schuldig te voelen.',
      'problem.stat': 'dagen van tevoren',
      'pivot.text': 'Stel je voor dat je nooit meer een moment mist.',
      'how.label': 'HOE HET WERKT',
      'how.title': 'Drie stappen om nooit meer te vergeten',
      'how.step1.title': 'Voeg je mensen toe',
      'how.step1.desc': 'Importeer contacten of voeg ze handmatig toe. Stel verjaardagen, jubilea en alles wat ertoe doet in.',
      'how.step2.title': 'Krijg slimme herinneringen',
      'how.step2.desc': 'Attent vertelt het je vroeg genoeg om iets te doen. Niet op de dag zelf als je alleen nog een paniektekstje kunt sturen.',
      'how.step3.title': 'Laat zien dat je er bent',
      'how.step3.desc': 'Stuur een cadeautje, schrijf een berichtje, of check gewoon even in. Elke actie bouwt aan je streak.',
      'stories.card1': 'Sarah wordt 30 over 3 weken. Attent vertelde het je op tijd. Je hebt een cadeau geregeld. Je bent de held.',
      'stories.card1.tag': 'Slimme herinneringen',
      'stories.card2': 'Je weet nog dat je klant van sushi houdt. Dat je collega vorige maand vader is geworden. Kleine details, groot verschil.',
      'stories.card2.tag': 'Alles op \u00e9\u00e9n plek',
      'stories.card3': '7 dagen op rij attent geweest. Je streak groeit. Je wordt er een beetje competitief van.',
      'stories.card3.tag': 'Streaks die het leuk maken',
      'proof.title': 'Een probleem dat universeel werd herkend.',
      'proof.quote1': '\u201cEen oplossing die voelt alsof het er altijd al had moeten zijn.\u201d',
      'proof.attr1': 'Founder, pitchsessie',
      'proof.quote2': '\u201cIk was vorige maand letterlijk de verjaardag van mijn beste vriend vergeten. Take my money.\u201d',
      'proof.attr2': 'Developer, pitchsessie',
      'proof.quote3': '\u201cHet streak-ding is geniaal. Ik zou met mijn broers en zussen strijden over wie attenter is.\u201d',
      'proof.attr3': 'Creative, pitchsessie',
      'proof.rating': '4.9 uit pitchsessies',
      'cta.title': 'Je mensen verdienen iemand die het onthoudt.',
      'cta.sub': 'Wees diegene.',
      'cta.btn': 'Download Attent gratis',
      'footer.tagline': 'De attentheidsapp.',
      'footer.product': 'Product',
      'footer.company': 'Bedrijf',
      'footer.legal': 'Juridisch',
      'footer.link.features': 'Features',
      'footer.link.how': 'Hoe het werkt',
      'footer.link.download': 'Download',
      'footer.link.about': 'Over ons',
      'footer.link.blog': 'Blog',
      'footer.link.contact': 'Contact',
      'footer.link.privacy': 'Privacy',
      'footer.link.terms': 'Voorwaarden',
      'footer.credit': 'Gemaakt met liefde door Studio BLEACH',
      'phone.contacts': 'Mijn mensen',
      'phone.birthday': 'Verjaardag: 14 april',
      'phone.birthday2': 'Verjaardag: 8 juni',
      'phone.anniv': 'Jubileum: 22 mei',
      'phone.birthday3': 'Verjaardag: 3 dec',
      'phone.reminders': 'Herinneringen',
      'phone.in3weeks': 'Over 3 weken',
      'phone.sarah30': 'Sarah wordt 30!',
      'phone.sarahHint': 'Tijd om een cadeau te regelen',
      'phone.in6weeks': 'Over 6 weken',
      'phone.mama': 'Mama\u2019s verjaardag',
      'phone.mamaHint': 'Ze wilde dat boek van Kluun',
      'phone.in2months': 'Over 2 maanden',
      'phone.thomas': 'Jubileum Thomas & Eva',
      'phone.thomasHint': 'Dinertje boeken?',
      'phone.activity': 'Activiteit',
      'phone.streak': 'dagen op rij',
      'phone.sent': 'Cadeau verstuurd naar Sarah',
      'phone.checked': 'Ingecheckt bij Thomas',
      'phone.wrote': 'Berichtje gestuurd naar Lisa'
    }
  };

  let currentLang = 'nl';

  /* ---- DOM refs ---- */
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const ctaBtn = document.getElementById('ctaBtn');
  const confettiCanvas = document.getElementById('confetti');

  /* ========================================
     1. Scroll Reveal
     ======================================== */
  function initScrollReveal() {
    const els = document.querySelectorAll('.rv');
    if (!els.length) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    els.forEach(function (el) { observer.observe(el); });
  }

  /* ========================================
     2. Nav scroll state
     ======================================== */
  function initNavScroll() {
    let ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          if (window.scrollY > 60) {
            nav.classList.add('scrolled');
          } else {
            nav.classList.remove('scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ========================================
     3. Smooth scroll for anchor links
     ======================================== */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          var offset = 80;
          var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: top, behavior: 'smooth' });
          // Close mobile nav if open
          if (navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
          }
        }
      });
    });
  }

  /* ========================================
     4. Mobile hamburger
     ======================================== */
  function initHamburger() {
    if (!hamburger) return;
    hamburger.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  /* ========================================
     5. Step switching (How it works)
     ======================================== */
  function initSteps() {
    var steps = document.querySelectorAll('.step');
    var screens = document.querySelectorAll('.phone-screen');
    if (!steps.length) return;

    function switchStep(num) {
      steps.forEach(function (s) {
        var isActive = s.dataset.step === String(num);
        s.classList.toggle('active', isActive);
        s.setAttribute('aria-expanded', isActive ? 'true' : 'false');
      });
      screens.forEach(function (s) {
        s.classList.toggle('active', s.dataset.screen === String(num));
      });
    }

    steps.forEach(function (s) {
      s.addEventListener('click', function () {
        switchStep(parseInt(this.dataset.step, 10));
      });
    });
  }

  /* ========================================
     6. Language toggle
     ======================================== */
  function setLanguage(lang) {
    currentLang = lang;
    var translations = dict[lang];
    if (!translations) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (translations[key] !== undefined) {
        // Handle line breaks in titles
        var text = translations[key];
        if (text.indexOf('\n') !== -1) {
          el.innerHTML = text.replace(/\n/g, '<br>');
        } else {
          el.textContent = text;
        }
      }
    });

    // Update lang buttons
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update html lang attribute
    document.documentElement.lang = lang;
  }

  function initLangToggle() {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLanguage(this.dataset.lang);
      });
    });
  }

  /* ========================================
     7. Confetti
     ======================================== */
  function launchConfetti() {
    if (!confettiCanvas) return;
    var ctx = confettiCanvas.getContext('2d');
    var W = confettiCanvas.width = confettiCanvas.offsetWidth;
    var H = confettiCanvas.height = confettiCanvas.offsetHeight;
    var colors = ['#FFA2FF', '#6D2EFF', '#7DFFFF', '#E8FF3C', '#00FF80', '#FF69FF'];
    var particles = [];
    var count = 80;

    for (var i = 0; i < count; i++) {
      particles.push({
        x: W / 2 + (Math.random() - 0.5) * 200,
        y: H * 0.4,
        vx: (Math.random() - 0.5) * 12,
        vy: -(Math.random() * 14 + 4),
        w: Math.random() * 8 + 4,
        h: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 12,
        gravity: 0.25 + Math.random() * 0.15,
        opacity: 1
      });
    }

    var frameId;
    function draw() {
      ctx.clearRect(0, 0, W, H);
      var alive = false;
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx;
        p.vy += p.gravity;
        p.y += p.vy;
        p.rotation += p.rotSpeed;
        p.vx *= 0.99;
        if (p.y > H * 0.7) {
          p.opacity -= 0.02;
        }
        if (p.opacity <= 0) continue;
        alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
      if (alive) {
        frameId = requestAnimationFrame(draw);
      } else {
        ctx.clearRect(0, 0, W, H);
        cancelAnimationFrame(frameId);
      }
    }
    draw();
  }

  function initConfetti() {
    if (!ctaBtn) return;
    ctaBtn.addEventListener('click', function (e) {
      e.preventDefault();
      launchConfetti();
    });
  }

  /* ========================================
     Animated Text Cycle
     ======================================== */
  function initTextCycle() {
    var cycle = document.getElementById('textCycle');
    if (!cycle) return;
    var words = cycle.querySelectorAll('.text-cycle-word');
    if (words.length === 0) return;
    var current = 0;
    var interval = 3000;

    setInterval(function () {
      var prev = current;
      current = (current + 1) % words.length;
      words[prev].classList.remove('active');
      words[prev].classList.add('exit');
      setTimeout(function () { words[prev].classList.remove('exit'); }, 400);
      words[current].classList.add('active');
    }, interval);
  }

  /* ========================================
     Hero Gradient Background
     ======================================== */
  function initHeroGradient() {
    var el = document.getElementById('heroGradient');
    if (!el) return;

    // Attent brand colors in radial gradient
    var colors = ['#0C0C22', '#6D2EFF', '#FFA2FF', '#7DFFFF', '#E8FF3C'];
    var stops = [30, 50, 65, 80, 100];
    var width = 125;

    function render() {
      var gradStr = stops.map(function (s, i) { return colors[i] + ' ' + s + '%'; }).join(', ');
      el.style.background = 'radial-gradient(' + width + '% ' + (width + 20) + '% at 50% 0%, ' + gradStr + ')';
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    // Fade in
    setTimeout(function () { el.classList.add('active'); }, 100);
  }

  /* ========================================
     Stacked Card Animation
     ======================================== */
  function initCardStack() {
    var stack = document.getElementById('cardStack');
    if (!stack) return;
    var cards = stack.querySelectorAll('.stack-card');
    if (cards.length === 0) return;

    var current = 0;
    var visible = 3; // show 3 cards at a time

    function positionCards() {
      for (var i = 0; i < cards.length; i++) {
        cards[i].style.display = 'none';
        cards[i].classList.remove('active');
      }

      for (var j = 0; j < visible && j < cards.length; j++) {
        var idx = (current + j) % cards.length;
        var card = cards[idx];
        card.style.display = 'block';
        card.style.setProperty('--y', (j * -28) + 'px');
        card.style.setProperty('--s', (1 - j * 0.05).toString());
        card.style.zIndex = (visible - j).toString();
        card.style.opacity = j === visible - 1 ? '0.5' : '1';
        if (j === 0) card.classList.add('active');
      }
    }

    positionCards();

    setInterval(function () {
      // Animate top card out
      var topIdx = current % cards.length;
      var topCard = cards[topIdx];
      topCard.style.transition = 'transform 600ms cubic-bezier(0.23, 1, 0.32, 1), opacity 400ms ease';
      topCard.style.setProperty('--y', '300px');
      topCard.style.opacity = '0';

      setTimeout(function () {
        topCard.style.transition = 'none';
        current = (current + 1) % cards.length;
        positionCards();
        // Re-enable transitions after a frame
        requestAnimationFrame(function () {
          for (var i = 0; i < cards.length; i++) {
            cards[i].style.transition = 'transform 800ms cubic-bezier(0.23, 1, 0.32, 1), opacity 500ms ease';
          }
        });
      }, 600);
    }, 4000);
  }

  /* ========================================
     Init
     ======================================== */
  document.addEventListener('DOMContentLoaded', function () {
    initScrollReveal();
    initNavScroll();
    initSmoothScroll();
    initHamburger();
    initSteps();
    initLangToggle();
    initConfetti();
    initTextCycle();
    initHeroGradient();
    initCardStack();
  });

})();
