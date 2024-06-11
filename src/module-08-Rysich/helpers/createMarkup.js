//розмітка інструментів
function createMarkup(arr, list) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({ id, img, name }) =>
          `
  <li data-id="${id}" class="js-card">
      <img src="${img}" alt="${name}" width='300' loading="lazy"/>
      <h2>${name}</h2>
      <p >
        <a class="js-info" href="#">More information</a>
      </p>
      <div>
         <button class="js-favorite">Add to favorite</button>
        <button class="js-bascket">Add to basket</button>
      </div>
    </li>`
      )
      .join('');
  } else {
    markup = `<p>Товар не обранно!</p>`;
  }

  list.innerHTML = markup;
}

export { createMarkup };
