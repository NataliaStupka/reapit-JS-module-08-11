//видалення продукта із масиву favorite/basket
function removeProduct(element, arr, KEY) {
  const productId = Number(element.target.closest('.js-card').dataset.id); //знайшли id продукта, по батьку (closest)
  const product = arr.find(({ id }) => id === productId); //продукт знайшли по id
  const indexProduct = arr.indexOf(product); //індекс продукта в масиві favorite
  const removedProduct = arr.splice(indexProduct, 1); //видаляємо з масиву favorite продукт
  localStorage.removeItem(KEY); //видаляємо зі сховища, поки все, не знаю як щось одне з ключа
  localStorage.setItem(KEY, JSON.stringify(arr)); //зберігаємо до сховища
}

export { removeProduct };
