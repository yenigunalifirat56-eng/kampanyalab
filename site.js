(() => {
  const trackEvent = (eventName, params = {}) => {
    try {
      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, { event_category: 'KampanyaLab', ...params });
      }
    } catch (error) {
      console.warn('[Analytics] event tracking failed', eventName, error);
    }
  };

  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  const closeMenu = () => {
    navLinks?.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    navToggle?.setAttribute('aria-expanded', 'false');
    navToggle?.setAttribute('aria-label', 'Menüyü aç');
  };

  navToggle?.addEventListener('click', () => {
    const isOpen = navLinks?.classList.toggle('is-open');
    document.body.classList.toggle('menu-open', Boolean(isOpen));
    navToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
    navToggle.setAttribute('aria-label', isOpen ? 'Menüyü kapat' : 'Menüyü aç');
  });

  navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', event => {
    if (!document.body.classList.contains('menu-open')) return;
    if (!navLinks?.contains(event.target) && !navToggle?.contains(event.target)) closeMenu();
  });

  document.querySelectorAll('[data-track]').forEach(item => {
    item.addEventListener('click', () => {
      trackEvent(item.dataset.track, {
        page_path: window.location.pathname,
        link_text: (item.textContent || '').trim().slice(0, 80),
        link_url: item.getAttribute('href') || ''
      });
    });
  });
})();
