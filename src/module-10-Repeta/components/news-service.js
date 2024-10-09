//тут уся логіка роботи з api

const API_KEY = '81f45f9200294d248df2a2d387a94758';
const BASE_URL = 'https://newsapi.org/v2';
const options = {
    headers: {
        Authorization: API_KEY,
    },
};

//створюємо клас (будемо використовувати екземпляри в інших файлах)
export default class NewsApiService {
    constructor() { 
        //властивості
    this.searchQuery = ''; //input, що шукаємо
    this.page = 1;
    }

    //метод, що відповідає за запити
    fetchArticles() {
    console.log('До запиту:', this);

   
    const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;
        // запит (return щоб повернути проміс і використати його в зовнішньому коді(practice.js))
     return fetch(url, options)
     .then(response => response.json()).then(({articles}) => {
        //console.log('data:', data)
        this.page += 1;
        
        return articles //так як в articles приходить масив об'єктів (проміс)
     })
    }

    //метод, що повертає нумерацію сторінки до 1
    resetPage() {
        this.page = 1
    }

    //щоб із зовнішнього коду щось записати в this.searchQuery
    get query() { //отримуємо searchQuery
        return this.searchQuery;
    }
    set query(newQuery) { //перезаписуємо searchQuery
        this.searchQuery = newQuery;
    }
}