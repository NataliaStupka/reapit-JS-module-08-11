//бібліотека - модальне вікно
import * as basicLightbox from 'basiclightbox'; //підключення бібліотеки basicLightbox
import '../../../node_modules/basiclightbox/dist/basicLightbox.min.css'; //можна просто 'basiclightbox/dist/basicLightbox.min.css'
import { closeModal } from './closeModal';

function createModal(product) {
  //   //закриття по Esc
  //   const option = {
  //     onShow() { document.addEventListener('keydown', closeModal); },
  //     onClose() {}
  // }

  //при кліку відкриваємо модалку з інформацією, через встановленну бібліотеку
  const instance = basicLightbox.create(
    `
	 <div class="modal">
      <img src="${product.img}" alt="${product.name}" width="200"/>
      <h2>${product.name}</h2>
      <h3>${product.price} грн</h3>
      <p>${product.description}</p>
        <div>
        <button class="js-favorite">Add to favorite</button>
        <button class="js-bascket">Add to basket</button>
      </div>
    </div>
`,
    //закриття по Esc, не прив'язуючи до istance, щоб можна було перевикористати функцію closeModal
    {
      //object з опціями
      handler: null,
      onShow(instance) {
        //console.log('instance', instance);
        //bind назавжди прив'язує this
        this.handler = closeModal.bind(instance); //this прив1язали до closeModal, копію помістили у ключ handler
        document.addEventListener('keydown', this.handler); //слухає копію функції this.handler
      },
      onClose() {
        document.removeEventListener('keydown', this.handler);
      },
    }
  );
  instance.show();
}

export { createModal };
