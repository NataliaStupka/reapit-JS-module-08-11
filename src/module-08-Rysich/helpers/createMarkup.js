//розмітка інструментів
function createMarkup(arr, list) {
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
         <button class="js-favorite">Додати до улюбленного</button>
        <button class="js-bascket">Додати до корзни</button>
      </div>
    </li>`
      )
      .join('');
  } else {
    markup = `<p>Оберіть товар!</p>`;
  }

  list.innerHTML = markup;
}

export { createMarkup };
