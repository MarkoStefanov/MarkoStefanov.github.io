// Shared behaviour for every page of the site.
(() => {
  const body = document.body;
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  const backdrop = document.querySelector('.menu-backdrop');
  const mobileQuery = window.matchMedia('(max-width: 860px)');

  // ----- Mobile menu -----
  const setMenu = (open) => {
    if (!toggle) return;
    body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (open) {
      nav.querySelector('a')?.focus();
    }
  };

  toggle?.addEventListener('click', () => {
    setMenu(!body.classList.contains('menu-open'));
  });

  backdrop?.addEventListener('click', () => setMenu(false));

  nav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && body.classList.contains('menu-open')) {
      setMenu(false);
      toggle.focus();
    }
  });

  // Close the drawer if the viewport grows past the mobile breakpoint.
  mobileQuery.addEventListener('change', (e) => {
    if (!e.matches) setMenu(false);
  });

  // ----- Header shadow + compact brand once the masthead scrolls away -----
  const masthead = document.querySelector('.masthead');
  if (header && masthead && 'IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      header.classList.toggle('is-scrolled', !entry.isIntersecting);
    }).observe(masthead);
  } else {
    header?.classList.add('is-scrolled');
  }

  // ----- Dateline: today's date, newspaper style -----
  const dateEl = document.querySelector('[data-today]');
  if (dateEl) {
    dateEl.textContent = new Date().toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  // ----- Footer year -----
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
})();
