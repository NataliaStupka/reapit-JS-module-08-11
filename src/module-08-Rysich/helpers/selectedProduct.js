//my
import { findProduct } from './findProduct'; //знаходимо обранний продукт
import { createModal } from './createModal'; //модальне вікно

//якщо натиснули на "more information"
function selectedProduct(event) {
  if (event.target.classList.contains('js-info')) {
    const product = findProduct(event.target); //знаходимо продукт по id
    createModal(product); //модалка з інформацією про обранний продукт (через бібліотеку)
  }
}

export { selectedProduct };
