//console.log('=== Module 11, Rysich ===');

// //R  get - читання (статус 200)
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//     .then((json) => console.log(json));
  
//----------------POST-------------------------
// //C  post - створення (статус 201)
// //body завжди формат json, тому JSON.stringify
// const options = {
//     method: "POST",
//     headers: {
//         "Content-type": "application/json",
//     },
//     body: JSON.stringify({
//         title: "Hello from JS",
//         body: "jkckhkchkckdc",
//         userId: 12,
//     }),
// };

// fetch('https://jsonplaceholder.typicode.com/posts', options)
// .then(resp => {
//         if (!resp.ok) {
//         throw new Error(resp.statusText)
//         }
//         return resp.json()
//     })
// .then(data => console.log(data))
// .catch(err => console.log(err))

//-----------POST-------------------------------
const addPost = document.querySelector('.js-add-post');
const listPosts = document.querySelector('.js-posts');
const formWrapper = document.querySelector('.js-form');
const errMessage = document.querySelector('.js-error');

addPost.addEventListener('click', handlerAddPost)

//додамо form для додавання коментаря
function handlerAddPost() {
    formWrapper.innerHTML = `
        <form action="submit" class="js-form-add">
            <input type="text" name="name">
            <textarea name="description" id="" cols="30" rows="10"></textarea>
            <button>Додати пост</button>
        </form>`
    
    const form = document.querySelector('.js-form-add')
form.addEventListener('submit', handlerFormSubmit)
}

function handlerFormSubmit(evt) {
    evt.preventDefault();

    //1.1 варіант запису
    const { name, description } = evt.currentTarget.elements;
    //створюємо об'єкт який будемо передавати в POST
    const data = {
        //title, body - обов'язкові назви
        title: name.value,
        body: description.value,
    };

    //1.2 варіант     зміна назви                  зміна назви
    //const { name: {value : title}, description: {value : body} } = evt.currentTarget.elements;
    //const data = {title, body};

    addPostService(data).then(obj => {
        listPosts.insertAdjacentHTML('beforeend', createPostMarckup(obj));
    })
        .catch(() => {
            errMessage.innerHTML = 'Не можливо додати пост'
        })
        .finally(() => {
            formWrapper.innerHTML = ''; //прибираємо форму, якщо промалювало значення
            setTimeout(() => {
                errMessage.innerHTML = '';
            }, 2000) // errMessage зникає через 2 секунди
        }) 
}
//створення розмітки (приймає об'єкт)
function createPostMarckup({ id, title, body }) {
    return `
    <li data-id="${id}">
        <h2>${title}</h2>
        <p>${body}</p>
    </li>
    `
}


//приймає об'єкт з інформацією (data)
//повертає результат fetch
function addPostService(data) {
    //body завжди формат json, тому JSON.stringify
const options = {
    method: "POST",
    headers: {
        "Content-type": "application/json",
    },
    body: JSON.stringify(data), //об'єкт з інформацією
};

   return fetch('https://jsonplaceholder.typicode.com/posts', options).then(
        (resp) => {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json();
        }
    );
}

// //Нове не додається
// // U PUT/PATCH - заміна(PUT повністю перезапише; PATCH - частково)
// //використовується id
// const options = {
//     method: "PATCH",
//     body: JSON.stringify({ //те що хочемо оновити
//         id: 1,
//         title: "cat",
//         body: "Hello dear cat"
//     }),
//     headers: {
//         "Content-type": "application/json",
//     },
// };

// fetch('https://jsonplaceholder.typicode.com/posts/1', options)
//     .then(resp => resp.json()).then(data => console.log(data))
//     .then(err => console.log(err));

//---------------
//DELETE, вказуємо якій елемент хочемо видалити, по id
const options = {
    method: "DELETE"
}
fetch('https://jsonplaceholder.typicode.com/posts/1', options)
    .then(resp => console.log('method: "DELETE"', resp));    

//======== 2 == Асинхронні функції async/await ========================================================
// //'https://restcountries.com/v3.1/name/'


// async function getCapital() {
//     //якщо опрацьовую http запит в середині функції і не важливо щось повертати з даної функциї
//     try { 
//          const URL = 'https://restcountries.com/v3.1/name/';
//     const resp = await fetch(`${URL}Ukraine`);
//     if (!resp.ok) {
//         throw new Error(resp.statusText);
//     }
//     const data = await resp.json();
//     console.log(data);
//     } catch (e) {
//     console.log(e)
//     }
   
// }
// getCapital()

//
// //then.catch.fynaly - якщо важливо повернення, тобто далі по коду будемо обробляти респонс з функції (поза межами функції)
// async function getCapital() {
  
//     const URL = 'https://restcountries.com/v3.1/name/';
//     const resp = await fetch(`${URL}Ukraine`);
//     if (!resp.ok) {
//         throw new Error(resp.statusText);
//     }
//     return resp.json(); 
// }

// getCapital()
// .then(data => console.log(data))
// .catch(e => console.log(e))
//

//------------- ПАРАЛЕЛЬНІ ЗАПИТИ ------------------------
//створюємо масив запитів, щоб отримати ВІДПОВІДІ ОДНОЧАСНО
async function getCapital() {
    try {
        const URL = 'https://restcountries.com/v3.1/name/';
        const arr = ['Ukraine', 'France', 'Germany']

        const responses = arr.map(async (ctr) => {
            //console.log('ctr', ctr)
            const resp = await fetch(`${URL}${ctr}`)

            if (!resp.ok) {
                throw new Error('Not found')
                //Promise.rejected('Not found')
            }
            return resp.json();
        })

        //allSettled опрацює всі проміси (і виконані - fulfilled, і відхилені - rejected). Маємо статус(status) rejected/fulfiled, зможемо відібрати потрібне
        //all - опрацює проміси якщо всі успішні, якщо хоч одна з помилкою - все попаде в Error
        //race
        const prom = await Promise.allSettled(responses)
        return prom 
    } catch (e) {
        console.log(e)
    }
}

getCapital()
    .then(data => {
        const resp = data.filter(({ status }) => status === 'fulfilled').map(({value}) => value[0]);
        const rej = data.filter(({ status }) => status === 'rejected');
        // console.log('resp.filter_fulfilled:', resp);
        // console.log('resp.filter_rejected:', rej);
    })
    .catch(e => console.log(e));


// Практичний приклад -------
const searchForm = document.querySelector('.js-search');
const addCountry = document.querySelector('.js-add');
const list = document.querySelector('.js-list');
const formContainer = document.querySelector('.js-form-container'); //створили, для зручності додавання після input (insertAdjacentHTML('beforeend'))

addCountry.addEventListener('click', handlerAddInput);
//додає новий input
function handlerAddInput() {
    const marckup = '<input type="text" name="country">';
    formContainer.insertAdjacentHTML('beforeend', marckup)
}
 
searchForm.addEventListener('submit', handlerForm);

function handlerForm(evt) {
    evt.preventDefault();
    const data = new FormData(evt.currentTarget); //збираємо всі значення форми (FormData)
    //        з input name="country", 
    const arr = data.getAll('country')
        .filter(item => item)  //через filter повернемо тільки заповнені поля
        .map(item => item.trim()); //прибере пробіли   
    
    getCountries(arr)
        .then(async resp => {
            const capitals = resp.map(({ capital }) => capital[0]);
            const weatherService = await getWeather(capitals);
            console.log('weatherService', weatherService)
            list.innerHTML = createMarckup(weatherService);
       
    })
        .catch(e => console.log(e))
       // .finally(() =>  evt.currentTarget.reset());
}

//функція для запиту, асинхронна
async function getCountries(arr) {
    //resps - масив промісів
    const resps = arr.map(async item => {
        //якщо вказуємо await, то fetch повернеться як готовий об'єкт респонсу (якщо не вказуємо - то як проміс)
        const resp = await fetch(`https://restcountries.com/v3.1/name/${item}`)
        if (!resp.ok) {
            throw new Error();
        }
        return resp.json()
    })
                        //повертає проміс
    const data = await Promise.allSettled(resps)
    //повертаємо тількі ті, де статус fulfilled, і добираємось до його value
    const countryObj = data.filter(({ status }) => status === 'fulfilled').map(({ value }) => value[0]);
        
    return countryObj; //повертає об'єкти країн
}

//приймає масив міст
async function getWeather(arr) {
    const BASE_URL = 'http://api.weatherapi.com/v1';
    const API_KEY = '3fcd8518e6394e4c9f1103211241109';

    const resps = arr.map(async city => {
        const params = new URLSearchParams({
        key: API_KEY,
        q: city,
        lang: 'uk'
        });

        const resp = await fetch(`${BASE_URL}/current.json?${params}`);

         if(!resp.ok){
            throw new Error('resp.statusText');
         }
        return resp.json()
    })
    
    const data = await Promise.allSettled(resps)
    const objs = data.filter(({ status }) => status === 'fulfilled').map(({ value }) => value.current);

   return objs
}

function createMarckup(arr) {
    console.log('arr:', arr)
    return arr.map(({ current: { temp_c, condition: { text, icon } }, location: { country, name } }) =>
        `<li>
            <div>
             <h2>${country}</h2>
             <h3>${name}</h3>
            </div>
            <img src="${icon}" alt="${text}">
             <p>${text}</p>
             <p>${temp_c}</p>
        </li>
    `
    ).join('')
}