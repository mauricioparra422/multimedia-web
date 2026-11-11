// Sin JavaScript, todos los enlaces siguen visibles y utilizables.
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navegacion');
const mobile = window.matchMedia('(max-width: 600px)');

function setOpen(open) {
  toggle.setAttribute('aria-expanded', String(open));
  nav.dataset.collapsed = String(mobile.matches && !open);
}
function syncMenu() {
  toggle.hidden = !mobile.matches;
  setOpen(false);
}
toggle.addEventListener('click', () => {
  setOpen(toggle.getAttribute('aria-expanded') !== 'true');
});
nav.addEventListener('click', (event) => {
  if (mobile.matches && event.target.closest('a')) {
    setOpen(false);
    toggle.focus();
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobile.matches && toggle.getAttribute('aria-expanded') === 'true') {
    setOpen(false);
    toggle.focus();
  }
});
mobile.addEventListener('change', syncMenu);
syncMenu();