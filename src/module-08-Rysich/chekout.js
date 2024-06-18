import { common } from './common'; //ключі localStorage
//import { createMarkup } from './helpers/createMarkup';
import { selectedProduct } from './helpers/selectedProduct'; //знаходимо обранний продукт; модальне вікно

const list = document.querySelector('.js-list');
list.addEventListener('click', onClick);

//розпаршуємо (продукти додані в корзину)
const basket = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? []; //якщо в localStorage щось є - виведе, якщо пусто то присвоїть []
createMarkup(basket);

function createMarkup(arr) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({ id, img, name }) =>
          `
  <li data-id="${id}" class="js-card list__card">
      <img src="${img}" alt="${name}" width='300' loading="lazy"/>
      <h2>${name}</h2>
      <p >
        <a class="js-info" href="#">More information</a>
      </p>
      <div class="list__button">
        
        <button class="js-bascket">"ЗРОБИТИ" - Видалити з корзини</button>
      </div>
    </li>`
      )
      .join('');
  } else {
    markup = `<p>Оберіть товар!</p>`;
  }

  list.innerHTML = markup;
  //list.insertAdjacentHTML('beforeend', markup);
}

function onClick(event) {
  event.preventDefault(); //відміна перезагрузки
  //якщо натиснули на "more information": знаходимо продукт по id і виводимо модалку з інформацією про обранний продукт (через бібліотеці)
  selectedProduct(event);
}
