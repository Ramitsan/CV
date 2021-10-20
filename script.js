'use strict';

//кнопка прокрутки
const upButton = document.querySelector('.btn--up');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 800) {
    upButton.classList.add('shown');
  } else {
    upButton.classList.remove('shown');
  }
});

upButton.addEventListener('click', () => {
  window.scrollTo(0, 0);
});