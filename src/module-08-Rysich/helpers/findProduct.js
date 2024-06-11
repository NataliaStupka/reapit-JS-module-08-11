import instruments from './instruments'; //[instruments]
//знаходимо id, а потім по ньому обранний продукт із всього масива
function findProduct(element) {
  //data-атрибут повертає рядок, тому приводимо до числа
  const productId = Number(element.closest('.js-card').dataset.id); //знайшли id продукта, по батьку (closest)
  return instruments.find(({ id }) => id === productId); //знайшли  в масиві продукт по id
}

export { findProduct };
