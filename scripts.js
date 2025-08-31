const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const overlay = document.querySelector('.menu-overlay');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  overlay.classList.toggle('active');

  // Alterna entre ☰ e X
  menuToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
});

// Fecha o menu ao clicar no overlay
overlay.addEventListener('click', () => {
  navMenu.classList.remove('active');
  overlay.classList.remove('active');
  menuToggle.textContent = '☰';
});