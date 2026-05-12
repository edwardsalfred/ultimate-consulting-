/**
 * Ultimate Consulting theme — front-end JS.
 * Replaces React/framer-motion behavior in the original site:
 *   - sticky/scrolled navbar
 *   - mobile menu toggle
 *   - scroll-reveal fade-ins (IntersectionObserver)
 *   - stat number count-up animations
 *   - lucide icon initialization
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    initLucide();
    initNavbar();
    initMobileMenu();
    initScrollReveals();
    initCounters();
  });

  // ---------------------------------------------------------------------------
  // Lucide icons — replaces <i data-lucide="..."> tags with inline SVGs.
  // ---------------------------------------------------------------------------
  function initLucide() {
    if (typeof window.lucide !== 'undefined' && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  // ---------------------------------------------------------------------------
  // Navbar — toggles a "scrolled" style after the user scrolls past 50px.
  // ---------------------------------------------------------------------------
  function initNavbar() {
    var nav = document.querySelector('[data-uc-navbar]');
    if (!nav) return;

    function update() {
      var scrolled = window.scrollY > 50;
      nav.classList.toggle('uc-nav-scrolled', scrolled);
      if (scrolled) {
        nav.style.background = 'rgba(10, 20, 45, 0.97)';
        nav.style.backdropFilter = 'blur(12px)';
        nav.style.webkitBackdropFilter = 'blur(12px)';
        nav.style.boxShadow = '0 1px 0 rgba(255,255,255,0.06)';
        nav.classList.remove('py-6');
        nav.classList.add('py-4');
      } else {
        nav.style.background = 'transparent';
        nav.style.backdropFilter = '';
        nav.style.webkitBackdropFilter = '';
        nav.style.boxShadow = 'none';
        nav.classList.remove('py-4');
        nav.classList.add('py-6');
      }
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  // ---------------------------------------------------------------------------
  // Mobile menu toggle.
  // ---------------------------------------------------------------------------
  function initMobileMenu() {
    var btn = document.querySelector('[data-uc-mobile-toggle]');
    var panel = document.getElementById('uc-mobile-panel');
    if (!btn || !panel) return;

    btn.addEventListener('click', function () {
      var open = panel.classList.toggle('hidden') === false;
      btn.setAttribute('aria-expanded', String(open));
      var menuIcon = btn.querySelector('.uc-icon-menu');
      var closeIcon = btn.querySelector('.uc-icon-close');
      if (menuIcon) menuIcon.classList.toggle('hidden', open);
      if (closeIcon) closeIcon.classList.toggle('hidden', !open);
    });
  }

  // ---------------------------------------------------------------------------
  // Scroll-reveal fade-ins. Add class .uc-fade-in to any element.
  // ---------------------------------------------------------------------------
  function initScrollReveals() {
    var items = document.querySelectorAll('.uc-fade-in');
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    items.forEach(function (el) { io.observe(el); });
  }

  // ---------------------------------------------------------------------------
  // Animated number counters.
  // Usage: <div data-uc-counter data-target="200" data-suffix="+" data-decimals="0">0+</div>
  // ---------------------------------------------------------------------------
  function initCounters() {
    var counters = document.querySelectorAll('[data-uc-counter]');
    if (!counters.length) return;

    if (!('IntersectionObserver' in window)) {
      counters.forEach(animateCounter);
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    counters.forEach(function (el) { io.observe(el); });
  }

  function animateCounter(el) {
    var target = parseFloat(el.getAttribute('data-target') || '0');
    var suffix = el.getAttribute('data-suffix') || '';
    var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    var duration = 2500;
    var start = performance.now();

    function frame(now) {
      var t = Math.min(1, (now - start) / duration);
      // easeOutCubic
      var eased = 1 - Math.pow(1 - t, 3);
      var value = target * eased;
      el.textContent = value.toFixed(decimals) + suffix;
      if (t < 1) requestAnimationFrame(frame);
      else el.textContent = target.toFixed(decimals) + suffix;
    }
    requestAnimationFrame(frame);
  }
})();
