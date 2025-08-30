// Открытие модалок
document.querySelectorAll('[data-open]').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-open');
    document.getElementById(targetId).classList.remove('modal--hidden');
  });
});

// Закрытие при клике вне контента
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.add('modal--hidden');
    }
  });
});

// Закрытие по кнопке "×"
document.querySelectorAll('[data-close]').forEach(button => {
  button.addEventListener('click', () => {
    button.closest('.modal').classList.add('modal--hidden');
  });
});

// Обработка формы "Записаться сейчас"
document
  .querySelector('#modal-application .modal__form')
  .addEventListener('submit', e => {
    e.preventDefault();

    const name = e.target.querySelector('input[type="text"]').value.trim();
    const phone = e.target.querySelector('input[type="tel"]').value.trim();
    const email = e.target.querySelector('input[type="email"]').value.trim();

    console.log('Заявка отправлена:');
    console.log('Имя:', name);
    console.log('Телефон:', phone);
    console.log('Email:', email);

    e.target.closest('.modal').classList.add('modal--hidden');
  });

// Обработка вопроса из textarea
document
  .querySelector('#modal-question .pricing-button')
  .addEventListener('click', e => {
    e.preventDefault();

    const question = document
      .querySelector('#modal-question .modal__textarea')
      .value.trim();

    if (question) {
      console.log('Вопрос пользователя:', question);
    } else {
      console.log('Пользователь не ввёл вопрос.');
    }

    e.target.closest('.modal').classList.add('modal--hidden');
  });
