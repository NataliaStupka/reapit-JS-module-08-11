import { common } from './common'; //ключі localStorage
//import { createMarkup } from './helpers/createMarkup'; //розмітка початкової сторінки інструментів
import { selectedProduct } from './helpers/selectedProduct'; //знаходимо обранний продукт; модальне вікно
import { findProduct } from './helpers/findProduct';

const list = document.querySelector('.js-list');
list.addEventListener('click', onClick);

const basketArr = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? []; //для додати до корзини

//розпаршуємо (обрані продукти)
const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? []; //якщо в localStorage щось є - виведе, якщо пусто то присвоїть []
createMarkup(favorite, list);

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
        <a class="js-info" href="#">Більше інформації</a>
      </p>
      <div class="list__button">
        <button class="js-favorite-delete">"ЗРОБИТИ" - Видалити з улюбленного</button>
        <button class="js-bascket">Додати до корзни</button>
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
  //якщо натиснули на "more information": знаходимо продукт по id
  // і виводимо модалку з інформацією про обранний продукт(через бібліотеку)
  selectedProduct(event);

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

  //якщо натиснули на "Видалити з улюбленного" ?????
  if (event.target.classList.contains('js-favorite-delete')) {
    const productId = Number(event.target.closest('.js-card').dataset.id); //знайшли id продукта, по батьку (closest)
    const product = favorite.find(({ id }) => id === productId); //продукт знайшли по id
    const indexProduct = favorite.indexOf(product); //індекс продукта в масиві favorite
    const removedProduct = favorite.splice(indexProduct, 1); //видаляємо з масиву favorite продукт

    localStorage.removeItem(common.KEY_FAVORITE); //????? ЯК ВИДАЛИТИ НЕ ВЕСЬ КЛЮЧ ??????? бо прийдеться заново записувати у сховище:
    localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favorite)); //JSON.stringify приводить до JSON формату

    // console.log('id:', productId);
    // console.log('name:', product.name);
    // console.log('index:', indexProduct);
    // console.log('Видаляємо:', removedProduct);
    // console.log('arrFavorite:', favorite);

    //перерендурюємо favorite
    createMarkup(favorite);
  }
}
