console.log('Module-09-Rysich');
//------------ 1. Календар, годинник -------------------------
// Дата:
const day = document.querySelector('.date-day'); // день тижня
const date = document.querySelector('.date'); // день місяця
const month = document.querySelector('.date-month'); //місяць
const year = document.querySelector('.date-year'); //рік
// digitalClock:
const digitalClock = document.querySelector('.digital-clock');
//clock:
const arrowSecond = document.querySelector('.clock-seconds__arrow'); //секундна стрілка
const arrowMinutes = document.querySelector('.clock-minutes__arrow'); //хвилинна стрілка
const arrowHours = document.querySelector('.clock-hours__arrow'); //годинна стрілка

//масиви для коректного виводу значення Date
const namesOfMonth = [
  'Січень',
  'Лютий',
  'Березень',
  'Квітень',
  'Травень',
  'Червень',
  'Липень',
  'Серпень',
  'Вересень',
  'Жовтень',
  'Листопад',
  'Грудень',
];
const arrDay = [
  'Неділя',
  'Понеділок',
  'Вівторок',
  'Середа',
  'Четвер',
  'П`ятниця',
  'Субота',
];

//для актуальних даних, наприклад на межі 23:59 і наступного дня
setInterval(() => {
  //Дата
  const currentTime = new Date();
  const currentDay = arrDay[currentTime.getDay()]; // день тижня
  const currentDate = currentTime.getDate(); // день місяця
  const currentMonth = namesOfMonth[currentTime.getMonth()]; //місяць
  const currentYear = currentTime.getFullYear(); //рік

  //годинник
  const currentHour = currentTime.getHours(); //години
  const currentMinutes = currentTime.getMinutes(); //хвилини
  const currentSeconds = currentTime.getSeconds(); //секунди

  //механічний годинник
  const changeSecond = (360 / 60) * currentSeconds; //360 повне коло / на 60 сек
  const changeMinutes = (360 / 60) * currentMinutes;
  const changeHours =
    (360 / 12) * currentHour + (360 / 12 / 60) * currentMinutes; //щоб стрілка апоказувала не трого на годину, а між теж

  //форматуємо для електронного годинника (якщо 1 сек, щоб прописало 01)
  // padStart - приймає (довжина яка має бути; якщо символів не вистачає, то що підставляємо); працює із строкою
  const formatTime = `${currentHour
    .toString()
    .padStart(2, '0')} : ${currentMinutes
    .toString()
    .padStart(2, '0')} : ${currentSeconds.toString().padStart(2, '0')}`;

  //-----------------
  // console.log('Date:', currentTime);
  // console.log('Day:', currentTime.getDay());
  // console.log('Day from arr:', arrDay[currentTime.getDay()]);
  // console.log('число:', currentTime.getDate());
  // console.log(
  //   `getMonth(0-11): ${currentTime.getMonth()}, from arr: ${currentMonth}`
  // );
  // console.log('Year:', currentYear);
  //------------------
  day.textContent = currentDay;
  date.textContent = currentDate;
  month.textContent = currentMonth;
  year.textContent = currentYear;

  digitalClock.textContent = `Поточний час: ${formatTime}`; //електронний годинник

  //стрілка по колу
  arrowSecond.style.transform = `rotate(${changeSecond}deg)`; //секундна стрілка рухається по колу
  arrowMinutes.style.transform = `rotate(${changeMinutes}deg)`; //хвилинна стрілка рухається по колу
  arrowHours.style.transform = `rotate(${changeHours}deg)`; //годинникова стрілка рухається по колу
}, 1000);

// ------------ 2. реклама ---------
const box = document.querySelector('.js-box');
const titleTimer = document.querySelector('.js-timer');

let counter = 6; //для таймеру

setTimeout(() => {
  box.style.display = 'block'; //показали перший раз рекламу

  //таймер до зникнення реклами
  const id = setInterval(() => {
    counter -= 1;
    titleTimer.textContent = counter + 's';

    //якщо дійшли до нуля
    if (!counter) {
      clearInterval(id);
      // //для закриття реклами кліком по хрестику
      // titleTimer.textContent = 'X';
      // titleTimer.addEventListener('click', onClick);
      box.style.display = 'none'; //закрили рекламу
    }
  }, 1000);
}, 3000);

function onClick() {
  box.style.display = 'none';
}
//----------------------------------
