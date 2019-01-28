function toggleMenu(visible) {
  document.querySelector('.mobile-sidebar').classList.toggle('show', visible)
}

document.querySelector('#hamburger-mobile').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu()
});