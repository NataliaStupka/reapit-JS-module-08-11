// console.log('=== Module-10-Repeta ===')
// console.log('NewsAPI, Your API key is: 81f45f9200294d248df2a2d387a94758')


//======== Завантажити більше ===========
//??????? import articlesTpl from './templates.hbs'; //імпортуємо розмітку для рендера картинок
import { createMarkup } from './helpers/createMarkup';
import NewsApiService from './components/news-service' //імпортуємо клас робота з api
import LoadMoreBtn from './components/load-more-btn';

const refs = { 
    searchForm: document.querySelector('.js-search-form'),
    articlesContainer: document.querySelector('.js-articles-container'),
    //loadMoreBtn: document.querySelector('[data-action="load-more"]') //выключим, используем класс
}

const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-action="load-more"]',
    hidden: true,
});

//створюємо екземпляр класу роботи з api
const newsApiService = new NewsApiService(); //отримуємо об'єкт з методами та властивостями

refs.searchForm.addEventListener('submit', onSearch);
//refs.loadMoreBtn.addEventListener('click', onLoadMore);//выключим, используем класс
loadMoreBtn.refs.button.addEventListener('click', fetchArticle); //завантажити ще

//кнопка Шукати
function onSearch (e) {
    e.preventDefault(); //заборона перезавантаження сторінки

    //clearArticlesContainer(); //очистка списку, аббо помистити в середину

    //доступ до input, що шукаємо //записуємо при сабміті форми на наш об'єкт newsApiService,
    // в його властивість searchQuery за допомогою set, те що отримуємо з input(що шукаємо)  
    newsApiService.query = e.currentTarget.elements.query.value;

    if(newsApiService.query === '') {
        return alert ('Що шукаємо?')
    }

    loadMoreBtn.show();
    newsApiService.resetPage(); //повертає нумерацію сторінки до 1
    clearArticlesContainer();//очистка списку
    fetchArticle()
}

//завантажити ще
function fetchArticle() {
    loadMoreBtn.disable();
    //викликаємо об'єкт, що є в даному класі (якій повертає проміс)
    newsApiService.fetchArticles().then(articles => {
        appendArticlesMarkup(articles);
        loadMoreBtn.enable();
    })
}

// рендер фоток
function appendArticlesMarkup(articles) {
    refs.articlesContainer.insertAdjacentHTML('beforeend', createMarkup(articles));

}

//очистка списку
function clearArticlesContainer() {
    refs.articlesContainer.innerHTML = ''
}



