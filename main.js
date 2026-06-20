/* =========================================================
   Ware Hackspace — main.js
   Deliberately small: just the mobile nav toggle. Nothing here
   is required for the site to work — if JS fails to load, the
   nav links are still in the page, just not collapsible.
   ========================================================= */

(function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('navLinks');
  if (!toggle || !nav) return;

  function closeNav() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close the menu after choosing a link, and on Escape
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeNav);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });
})();
