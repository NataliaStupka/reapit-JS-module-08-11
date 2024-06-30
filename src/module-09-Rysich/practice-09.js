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

let counter = 4; //для таймеру

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
}, 2000);

function onClick() {
  box.style.display = 'none';
}
//------------ 3 game "OneArmedBandit" (Promis)----------------------
const start = document.querySelector('.js-start');
const container = document.querySelector('.js-container');

start.addEventListener('click', onStart);

//map, Promise.allSettled(приймає масив, повертає масив об'єктів)
function onStart() {
  let counter = 0;

  //console.dir(container); //можемо використати children
  //так як це псевдомасив, то розпилимо його(перетворимо у повноційний масив із методами)
  [...container.children].forEach(box => (box.textContent = ''));

  const promises = [...container.children].map((_, i) => createPromise(i)); //в 'map' якщо перший або другий параметр не потрібен, щоб його не підсвічувало як не використанний, ставимо _

  // Promise.allSettled приймає масив промісів, повертає масив об'єктів (в якому є статус і значення)
  Promise.allSettled(promises).then(items => {
    items.forEach((item, i) => {
      setTimeout(() => {
        if (item.status === 'fulfilled') {
          counter += 1;
        }
        //по черзі в кожне 'віконце' підсавляємо в текстовий контент item.value, якщо не має то item.reason
        container.children[i].textContent = item.value || item.reason;

        //перевіряємо чи переміг чи програш
        if (container.children.length - 1 === i) {
          setTimeout(() => {
            if (counter === container.children.length || !counter) {
              alert('Winner');
            } else {
              alert('Lost money');
            }
          }, 500);
        }
      }, i * 1000);
    });
  });
}

function createPromise() {
  return new Promise((res, rej) => {
    const random = Math.random();

    if (random > 0.5) {
      res('🤑');
    } else {
      rej('😈');
    }
  });
}
//==== 2 спосіб:

// //---forEach, додаткова обробка then/catch/finally, if/else---
// function onStart() {
//   const result = [];
//   //console.dir(container); //можемо використати children
//   //так як це псевдомасив, то розпилимо його(перетворимо у повноційний масив із методами)
//   [...container.children].forEach(box => (box.textContent = ''));
//   [...container.children].forEach((box, i) => {
//     createPromise(i)
//       .then(smile => {
//         box.textContent = smile;
//         result.push('1');
//       })
//       .catch(smile => {
//         box.textContent = smile;
//       })
//       .finally(() => {
//         setTimeout(() => {
//           if (i === container.children.length - 1) {
//             if (!result.length || result.length === 3) {
//               alert('Winner');
//             } else {
//               alert('Lost money');
//             }
//           }
//         }, 500);
//       });
//   });
// }
//
// function createPromise(delay) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const random = Math.random();

//       if (random > 0.5) {
//         res('🤑');
//       } else {
//         rej('😈');
//       }
//     }, 1000 * delay);
//   });
// }
