function createMarkup(array, list) {
  const galleryList = array
    .map(
      ({ original, preview, description }) => `  
     <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        /></a>
    </li>
`
    )
    .join('');

  list.insertAdjacentHTML('beforeend', galleryList);
}

export { createMarkup };
