document.querySelectorAll('.faq-item').forEach(item => {
  const answer = item.querySelector('.faq-answer');

  item.addEventListener('click', () => {
    answer.classList.toggle('open');
    item.classList.toggle('active'); // ← вот это нужно!
  });
});
