console.log('8 модуль, Рисіч');
//   магазин інструменів
//  ПРАВИЛЬНЕ ЗАКРИТТЯ МОДАЛЬНОГО ВІКНА, З БІБЛІОТЕКИ, ПО ESC
//----- 2 Shop instruments--------------------

//масив [інструменти]
import instruments from './helpers/instruments.js';

import { common } from './common.js'; //ключі LocalStorage
import { createMarkup } from './helpers/createMarkup.js'; //функция розмітка початкової сторінки інструментів
import { findProduct } from './helpers/findProduct.js'; //обранний продукт (знаходимо в масиві продуктів)
import { selectedProduct } from './helpers/selectedProduct.js'; //'more information';

const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');
search.addEventListener('input', onSearch);
list.addEventListener('click', onClick); //делегування, слухаємо: more information, button favorite, button basket

//для LocalStorage
const favoriteArr = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? []; //якщо в localStorage щось є - виведе, якщо пусто то присвоїть []
const basketArr = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];

function onSearch(event) {
  console.log('input:', event.target.value);
  const findProduct = instruments.filter(({ name }) =>
    name.toLowerCase().includes(event.target.value)
  );
  createMarkup(findProduct, list);
}

// розмітка початкової сторінки інструментів
createMarkup(instruments, list);

//делегування, слухаємо: more information, add to favorite, add to basket
function onClick(event) {
  event.preventDefault(); //відміна перезагрузки

  //якщо натиснули на "more information": знаходимо продукт по id
  // і виводиться модалка з інформацією про обранний продукт(через бібліотеку)
  selectedProduct(event);

  //якщо натиснули на "add to favorite"
  if (event.target.classList.contains('js-favorite')) {
    const product = findProduct(event.target); //занйшли продукт по id, через функцію
    //не добавляємо продукт якщо він вже є в localStorage
    const inStorage = favoriteArr.some(({ id }) => id === product.id);
    if (inStorage) {
      return;
    }
    favoriteArr.push(product); //добавляємо продукт в масив
    localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favoriteArr)); //JSON.stringify приводить до JSON формату
  }

  //якщо натиснули на "Add to basket"
  if (event.target.classList.contains('js-bascket')) {
    const product = findProduct(event.target); //занйшли продукт по id, через функцію
    const inStorage = basketArr.some(({ id }) => id === product.id); //не добавляємо продукт якщо він вже є в localStorage
    if (inStorage) {
      return;
    }
    basketArr.push(product); //добавляємо продукт в масив
    localStorage.setItem(common.KEY_BASKET, JSON.stringify(basketArr));
  }
}
