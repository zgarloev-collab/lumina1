(function () {
  if (window.__altaiLandingInit) return;
  window.__altaiLandingInit = true;

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initReveal(scope) {
    var items = (scope || document).querySelectorAll('[data-altai-reveal]:not(.is-visible)');
    if (!items.length) return;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });

    items.forEach(function (el) { observer.observe(el); });
  }

  function initFaq(scope) {
    (scope || document).querySelectorAll('[data-altai-faq]').forEach(function (faq) {
      if (faq.dataset.altaiFaqReady) return;
      faq.dataset.altaiFaqReady = 'true';
      var items = faq.querySelectorAll('details');
      items.forEach(function (item) {
        item.addEventListener('toggle', function () {
          if (!item.open) return;
          items.forEach(function (other) {
            if (other !== item) other.open = false;
          });
        });
      });
    });
  }

  function init(scope) {
    root.classList.add('altai-js');
    initReveal(scope);
    initFaq(scope);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { init(); });
  } else {
    init();
  }

  // Re-run when sections are added or edited in the Shopify theme editor.
  document.addEventListener('shopify:section:load', function (event) {
    init(event.target);
  });
})();
