const burger = document.getElementById('burger');
const overlay = document.getElementById('overlay');
const navLinks = overlay.querySelectorAll('.burger-nav-list a');

burger.addEventListener('click', () => {
  overlay.classList.toggle('active');
});

// закрытие при клике по фону
overlay.addEventListener('click', e => {
  if (e.target === overlay) {
    overlay.classList.remove('active');
  }
});

// закрытие при клике на пункт меню
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    overlay.classList.remove('active');
  });
});
