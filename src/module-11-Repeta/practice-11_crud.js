console.log('=== Module 11, Repeta CRUD===');
//если простая - используем then (.then().catch())

const BASE_URL = 'http://localhost:4040';

function addBook(book) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
    };

    return fetch(`${BASE_URL}/books`, options).then(res => res.json());
}

function renderBook(book) {
    console.log('Пришел ответ от бекенда можно рисовать');
    console.log(book);
}
//----- 2 ----------

function fetchBooks() {
    return fetch(`${BASE_URL}/books`).then(res => res.json())
}

function fetchBookById(bookId) {
    return fetch(`${BASE_URL}/books/${bookId}`).then(res => res.json());
}
//----- 3 ----------

function removeBook(bookId) {
    const url = `${BASE_URL}/books/${bookId}`;
    const options = {
        method: 'DELETE'
    };
    //при remove (res => res.json()) можно не писать 
    return fetch(url, options).then(res => res.json())
}

 //------ 4 ----
function updateBookById(update, bookId) {
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(update),
    }

    return fetch(`${BASE_URL}/books/${bookId}`, options).then(res => res.json())
}