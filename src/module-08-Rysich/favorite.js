import { common } from './common'; //ключі localStorage
import { createMarkup } from './helpers/createMarkup'; //розмітка початкової сторінки інструментів
import { selectedProduct } from './helpers/selectedProduct'; //знаходимо обранний продукт; модальне вікно

const list = document.querySelector('.js-list');
list.addEventListener('click', onClick);

//розпаршуємо (обрані продукти)
const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? []; //якщо в localStorage щось є - виведе, якщо пусто то присвоїть []
createMarkup(favorite, list);

function onClick(event) {
  event.preventDefault(); //відміна перезагрузки
  //якщо натиснули на "more information": знаходимо продукт по id і виводимо модалку з інформацією про обранний продукт (через бібліотеці)
  selectedProduct(event);
}
