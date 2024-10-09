//console.log('=== Module 10, Rysich ===');

//https://www.weatherapi.com/docs/
//Weather API Key: 3fcd8518e6394e4c9f1103211241109 
//http://api.weatherapi.com/v1/forecast.json?key=3fcd8518e6394e4c9f1103211241109&q=Paris&days=5

const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');
search.addEventListener('submit', onSearch);

function onSearch(evt) {
    evt.preventDefault()
    //console.log(evt.currentTarget.elements.query.value)
    const {query, days} = evt.currentTarget.elements; //деструктуризація
    console.log(`city: ${query.value}, days: ${days.value}`)

    getWeather(query.value, days.value)
    .then((data) => list.innerHTML = (createMarkupWeather(data.forecast.forecastday)))
    .catch(err => console.log(err)); 

}


function getWeather(city, days) {
    const BASE_URL = 'http://api.weatherapi.com/v1';
    const API_KEY = '3fcd8518e6394e4c9f1103211241109';

    //обов'зково return
    //першим зеном прописуємо перевірку, як все відпрацювало, статус ok
   return fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}&lang=uk`)
    .then(resp => {
        //console.log('Результат запиту:', resp.json())
        if(!resp.ok){
            throw new Error('resp.statusText')   //сетемо нову помилку по такій конструкції, використовуємо statusText(що прийшов)
        }
      
        return resp.json();
    })
}
                                                        //в catch піде помилка з throw new Error
//getWeather('Paris', 5).then(data => console.log(data)).catch(err => console.log(err)); 


function createMarkupWeather(arr) {
    console.log('ARR:', arr)
    return arr.map(({date, day:{avgtemp_c, condition:{icon, text}}}) => `
         <li class="list_item">
            <img src="${icon}" alt="${text}">
            <p>${text}</p>
            <h2>${date}</h2>
            <h3>${avgtemp_c} &deg;C </h3>
        </li>
        `).join('')

}

//========== 2 приклад ==============
// //https://the-one-api.dev/documentation
// //Access token: pUYfDHtMiaWIjcH8InZD 

// // ПРИКЛАД -----
// //авторизація за допомогою Bearer токен
// const BASE_URL = 'https://the-one-api.dev/v2/';
// const  END_POINT = 'character';
// const KEY = 'pUYfDHtMiaWIjcH8InZD '

// //запит
// function getCharacter() {
//     const param = new URLSearchParams({
//         limit: 30,
//         page: 1,

//     });

// //передаєм другий параметр для авторизації за допомогою Bearer токен    
// const option = {
//     method: 'GET',
//     headers: {
//         Authorization: `Bearer ${KEY}`
//     }
// }

//     fetch(`${BASE_URL}${END_POINT}?${param}`,option).then(resp => console.log(resp))
// }

// //getCharacter()

//========== 2 приклад ==============
// 2.1 ==== завантаже ще кнопкою

const BASE_URL = 'https://api.themoviedb.org/3/';
const ENDPOINT = 'trending/movie/day';
const API_KEY = 'b16acf67b085ef63f730716a5f3f661c';

const listTrending = document.querySelector('.js-list_trending');
const loadMore = document.querySelector('.js-load');
let currentPage = 1;

loadMore.addEventListener('click', onLoad)

//кнопка завантажити ще
function onLoad() {
    currentPage += 1;
    getTrending(currentPage)
    .then((data) => {
        listTrending.insertAdjacentHTML('beforeend', createMarkup(data.results))

        //якщо більше немає чого завантажувати
        if(data.page === data.total_pages) {
            loadMore.hidden = true;
        } 
    })
    .catch(err => console.log(err))
}

//перший запит
function getTrending(page=1) {
   return fetch(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}&page=${page}`).then(resp => {
        if(!resp.ok){
            throw new Error(resp.statusText)
        }
        return resp.json();
    });
}

getTrending()
.then((data) => {
    listTrending.insertAdjacentHTML('beforeend', createMarkup(data.results))
    
    observer.observe(target) //---* спостерігач спостерігай за target (інфініті скрол)

    //робимо перевірку чи є що ще завантажувати, добавляємо кнопку завантажити ще
    if(data.page !== data.total_pages) {
        loadMore.hidden = false;
    }
}).catch(err => console.log(err))

function createMarkup(arr) {
    return arr.map(({poster_path, title}) => `
    <li class='list_item'>
        <img src="https://image.tmdb.org/t/p/w400${poster_path}" alt="${title}">
        <h2>${title}</h2>
    </li>
    `).join('')
}

// 2.2 === ---* ІНФІНІТІ СКРОЛ ---*
let currentPageScroll = 1;
let counter = 0;
document.addEventListener('scroll', onScroll);

function onScroll() {
    counter += 1;
    //console.log(counter)
}

//---* https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
const target = document.querySelector('.js-guard');
const options = {
    root: null, //тобто слідкуємо за всім елементом
    rootMargin: "200px",
    threshold: 1.0,
  };
  
  let observer = new IntersectionObserver(onLoadScroll, options);

  function onLoadScroll(entries, observer) {
    loadMore.hidden = true; //ця кнопка не потрібна при інфініті скрол
    
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            currentPageScroll +=1;
            getTrending(currentPageScroll)
            .then((data) => {
                listTrending.insertAdjacentHTML('beforeend', createMarkup(data.results))
                if(data.page === data.total_pages) {
                    observer.unobserve(target)//якщо вже немає що завантажувати
                }
            }).catch(err => console.log(err))
        }
    })
}

//createMarkup();
//getTrending()

