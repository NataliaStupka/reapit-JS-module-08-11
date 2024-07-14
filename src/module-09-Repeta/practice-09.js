console.log('Module-09-Repeta');
// 1. Сповіщення ==============================-------------------------------------
const NOTICATION_DELAY = 5000;
let timeoutid = null; //для зняття setTimeout

const notification = document.querySelector('.js-alert-sms');
notification.addEventListener('click', onNotificationClick);

showNotification();

function onNotificationClick() {
  hideNotification();
  //при кліку, очищаємо setTimeout
  clearTimeout(timeoutid);
}

function showNotification() {
  notification.classList.add('is-visible-sms');

  //ховаємо сповіщеня, через деякий час; з назвою щоб по ній відмінити setTimeout
  timeoutid = setTimeout(() => {
    console.log('Ховаємо алерт, щоб не висів');
    hideNotification();
  }, NOTICATION_DELAY);
}

function hideNotification() {
  notification.classList.remove('is-visible-sms');
}

// 2. Підписка-набридалка-модалка ===============---bootstrap(html, css)--bootstrap.native(js)------------------------------------------
import { Modal } from 'bootstrap.native';

const refsModal = {
  modal: document.querySelector('#myModal'),
  subscribeBtn: document.querySelector('button[data-subscibe]'),
};

const PROMT_DELAY = 2000; // проміжок часу між повторюваннями
const MAX_PROMT_ATTEMPTS = 3; //кількість повторюваннь
let promptCounter = 0;
let hasSubscribed = false; //чи підписанний
const modal = new Modal('#myModal'); //по бібліотеці

openModal();

//s hown.bs.modal - модальні події з бібліотеки; modal.hide()
refsModal.modal.addEventListener('hide.bs.modal', () => {
  console.log('Закрилась набридалка');
  openModal(); //відкрилась набридалка
});
//кнопка Підписатись
refsModal.subscribeBtn.addEventListener('click', () => {
  hasSubscribed = true;
  modal.hide();
});

function openModal() {
  if (promptCounter === MAX_PROMT_ATTEMPTS || hasSubscribed) {
    console.log(
      'максимальна кількість набридалок вже було відкрито або підписався'
    );
    return;
  }

  setTimeout(() => {
    console.log('Відкриваємо набридалку');
    modal.show();
    promptCounter += 1;
  }, PROMT_DELAY);
}
// ============---- 3. ТАЙМЕР ==========================================-------------------------------
const refsTimer = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

//class займається тільки підрахунками часу
class Timer {
  //для утворення екземпляра
  constructor({ onTick }) {
    this.intervalId = null; // для зупинки інтервалу
    this.isActive = false; // чи запущенний таймер
    this.onTick = onTick; // малює інтерфейс
    this.init(); //при першому завантаженні промалювуємо інтерфейс
  }

  //при першому завантаженні промалювуємо інтерфейс
  init() {
    const time = getTimeComponents(0); //часв звичному форматі
    this.onTick(time); //малюємо інтерфейс
  }
  //метод початок таймера
  start() {
    //якщо таймер вже запущено - виходимо
    if (this.isActive) {
      return;
    }
    const startTime = Date.now();
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now(); // Поточний час
      const deltaTime = currentTime - startTime; //різниця часу

      const time = getTimeComponents(deltaTime); //в звичному форматі

      this.onTick(time); //малюємо інтерфейс
    }, 1000);
  }
  //зупиняємо таймер
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    //при зупинці обнуляємо лічильнтк
    const time = getTimeComponents(0); //часв звичному форматі
    this.onTick(time); //малюємо інтерфейс
  }
}
//в екземпляр передамо ссилку на функцію на промальовку інтерфейсу
//передамо у об'єкт налаштувань
const timer = new Timer({
  onTick: updateClockface,
});

//--------2 спосіб, не class Timer-(об'єкт timer)--------------------------
// const timer = {
//   intervalId: null, // для зупинки інтервалу
//   isActive: false,
//   //метод початок таймера
//   start() {
//     //якщо таймер вже запущено - виходимо
//     if (this.isActive) {
//       return;
//     }
//     const startTime = Date.now();
//     this.isActive = true;

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now(); // Поточний час
//       const deltaTime = currentTime - startTime; //різниця часу

//       const time = getTimeComponents(deltaTime); //в звичному форматі

//       updateClockface(time); //малюємо інтерфейс
//       console.log(`${time.hours}:${time.mins}:${time.secs}`); // час в звичному форматі
//     }, 1000);
//   },
//   //зупиняємо таймер
//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//   },
// };
//
//refsTimer.startBtn.addEventListener('click', timer.start());
// refsTimer.stopBtn.addEventListener('click', timer.stop());

// //малює інтерфейс
// function updateClockface({ hours, mins, secs }) {
//   refsTimer.clockface.textContent = `${hours}:${mins}:${secs}`;
// }

//--*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*---**-*-*-*-*-*-*------------------

//так як тут срілочна функція, при якій this буде вказувати на startBtn/stopBtn
//прив'зуємо контекст this, щоб він зсилався на потрібний об'єкт (timer)
refsTimer.startBtn.addEventListener('click', timer.start.bind(timer));
refsTimer.stopBtn.addEventListener('click', timer.stop.bind(timer));

//малює інтерфейс
function updateClockface({ hours, mins, secs }) {
  refsTimer.clockface.textContent = `${hours}:${mins}:${secs}`;
}

//------------------------------------
function pad(value) {
  return String(value).padStart(2, '0');
}
//час у звичному форматі
function getTimeComponents(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { hours, mins, secs };
}

// =============--- 4. ІПОДРОМ ========================================---------------------------
const horses = [
  'Secretarial',
  'Eclipce',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];

let raceCounter = 0; //номер заїзду
const refs = {
  startBtn: document.querySelector('.js-start-race'),
  winnerField: document.querySelector('.js-winner'),
  progressField: document.querySelector('.js-progress'),
  tableBody: document.querySelector('.js-result-table > tbody'),
};

refs.startBtn.addEventListener('click', onStart);

function onStart() {
  raceCounter += 1;
  const promises = horses.map(horse => run(horse));
  // console.log(promises);
  updateWinnerField(``); //очищуємо поле переможця перед новим заїздом
  updateProgressField('Заїзд розпочався, ставки не приймаються!'); //оновлення поля прогрес
  console.log(
    '%c Заїзд розпочався, ставки не приймаються!',
    'color: brown; font-size: 14px;'
  );
  determineWinner(promises); //визначення переможця
  waitForAll(promises); //всі учасники фінішували
}

//визначення переможця
function determineWinner(horsesPromises) {
  //Promise.race приймає масив промісів, повертає один перший виконанний
  Promise.race(horsesPromises).then(({ horse, time }) => {
    updateWinnerField(`Переміг '${horse}', фінішував із часом: ${time}`);
    console.log(
      `%c Переміг '${horse}', фінішував із часом: ${time}`,
      'color: green; font-size: 14px;'
    );
    updateResultTable({ horse, time, raceCounter });
  });
}

//очікуємо всіх учасників
function waitForAll(horsesPromises) {
  // Promise.all приймає масив промісів, повертає всі проміси масивом
  Promise.all(horsesPromises).then(x => {
    updateProgressField('Заїзд закінчився, приймаються ставки.');

    console.log('Усі учасники:', x);
    console.log(
      '%c Заїзд закінчився, приймаються ставки.',
      'color: blue; font-size: 14px;'
    );
  });
}

//оновлення полів переможця і прогрессу
function updateWinnerField(message) {
  refs.winnerField.textContent = message;
}
function updateProgressField(message) {
  refs.progressField.textContent = message;
}
//оновлення таблиці переможця
function updateResultTable({ horse, time, raceCounter }) {
  const tr = `<tr>
      <td>${raceCounter}</td>
      <td>${horse}</td>
      <td>${time}</td>
    </tr>`;
  refs.tableBody.insertAdjacentHTML('beforeend', tr);
}

//запускаємо коня
function run(horse) {
  //повертаємо проміс
  return new Promise(resolve => {
    const time = getRandomTime(2000, 3500);

    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

//імітація бігу коня
function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
