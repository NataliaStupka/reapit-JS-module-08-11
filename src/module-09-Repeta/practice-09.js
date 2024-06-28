console.log('Module-09-Repeta');

// ------- 2. Іподром --------------------------
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
