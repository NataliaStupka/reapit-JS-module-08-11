import { galleryItems } from './gallery-items'; //масив зображень

import { createMarkup } from '../helpers/01-gallery/createMarkup'; //функція розмітки

import SimpleLightbox from 'simplelightbox'; //імпорт бібліотеки
import 'simplelightbox/dist/simple-lightbox.min.css'; // Додатковий імпорт стилів бібліотеки

// Change code below this line
console.log('Home worck 8.1: "simplelightbox"');

const list = document.querySelector('.js-gallery');

//розмітка
createMarkup(galleryItems, list);

//модальне вікно
new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});

//--------------------------------------------------------
import throttle from 'lodash.throttle';
// или var throttle = require('lodash.throttle');
const STOROGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');

const savedForm = localStorage.getItem(STOROGE_KEY);
if (savedForm) {
  const parseSavedForm = JSON.parse(savedForm);
  Object.keys(parseSavedForm).forEach(key => {
    formEl.elements[key].value = parseSavedForm[key];
  });
}

formEl.addEventListener('submit', event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STOROGE_KEY)));
  formEl.reset();
  localStorage.removeItem(STOROGE_KEY);
});

formEl.addEventListener(
  'input',
  throttle(event => {
    const storedForm = localStorage.getItem(STOROGE_KEY);
    const savedForm = storedForm ? JSON.parse(storedForm) : {};
    savedForm[event.target.name] = event.target.value;
    localStorage.setItem(STOROGE_KEY, JSON.stringify(savedForm));
  }, 500)
);
