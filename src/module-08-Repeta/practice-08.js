console.log('8 модуль, Репета');

import throttle from 'lodash.throttle';

//localStorege
const STORAGE_KEY = 'feedback-msg';
const STORGE_KEY_OBJ = 'data-form';

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 200));

//---сюди ЗБЕРЕМО ВСІ ДАНІ З ФОРМИ (делегування на форму, і через evt.target розкладе, що в який інпут ввели)---------
const formData = {};
//делегування на форму
refs.form.addEventListener('input', evt => {
  // console.log(evt.target.name); //куди ввели
  // console.log(evt.target.value); //що ввели
  formData[evt.target.name] = evt.target.value;
  console.log(formData);
  localStorage.setItem(STORGE_KEY_OBJ, JSON.stringify(formData));
});
//-------------------------------------------

populateTextarea(); //відбувається при загрузці сторінки

//відправляємо нашу форму, очищаємо форму і сховище після відправки
function onFormSubmit(evt) {
  evt.preventDefault(); //заборона поведінки за замовчуванням, автоматичної відправки сторінки

  evt.currentTarget.reset(); //очищаємо форму після відправки, reset очищає усі поля форми
  localStorage.removeItem(STORAGE_KEY); //після відправки, очищуємо сховище
  localStorage.removeItem(STORGE_KEY_OBJ); //?
}
function onTextareaInput(evt) {
  //отримуємо значення із сховища
  //якщо там щось було, обновляємо DOM
  const message = evt.target.value;
  localStorage.setItem(STORAGE_KEY, message); // в JSON.stringify не потрібно, бо це вже рядок
}

//відбувається при загрузці сторінки
function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const savedDataForm = JSON.parse(localStorage.getItem(STORGE_KEY_OBJ)); //?

  //перевіряємо чи є в сховищі щось
  if (savedMessage) {
    refs.textarea.value = savedMessage; //якщо в сховищі є, то записуємо в textarea
  }
}
