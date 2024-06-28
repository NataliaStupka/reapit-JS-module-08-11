import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.js-feedback-form'),
  email: document.querySelector('.js-feedback-form input'),
  textarea: document.querySelector('.js-feedback-form textarea'),
};

const STORAGE_KEY = 'feedback-form-state'; //localStorage

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInputForm, 500)); //делегування на form, через target дістаємо до всіх полів

const dataForm = {}; //обьект в який будемо зберігати дані з форми
populateForm();

//збираємо дані з форми
function onInputForm(event) {
  dataForm[event.target.name] = event.target.value; // в яке поле: що ввели
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm)); //зберігаємо у localStorage
}
//після відправки очистка форми і localStorage
function onFormSubmit(event) {
  event.preventDefault(); //заборона поведінки за замовчуванням, автоматичної перезавантаження сторінки
  event.currentTarget.reset(); //очищаємо форму після відправки, reset очищає усі поля форми
  localStorage.removeItem(STORAGE_KEY); //після відправки, очищуємо сховище
}

//при завантаженні сторінки, якщо є дані в localStorage, то вписуємо ії у форму
function populateForm(event) {
  const savedDataForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedDataForm) {
    console.log('savedDataForm', savedDataForm);
    // refs.email.value = savedDataForm.email;
    // refs.textarea.value = savedDataForm.message;
    //--------------
    Object.keys(savedDataForm).forEach(key => {
      refs.form.elements[key].value = savedDataForm[key];
    });
  }
}
