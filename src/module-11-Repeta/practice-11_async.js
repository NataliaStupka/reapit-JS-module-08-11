console.log('=== Module 11, Repeta async ===');
//если сложная операция - async/await (try{}catch(){})

const BASE_URL = 'http://localhost:4040';

async function addBook(book) {
     const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(book), //JSON.stringify переведет к строке
     };
    
    const response = await fetch(`${BASE_URL}/books`, options);//возвращается промис
    const newBook = await response.json();

    return newBook;
    //або
    //return await response.json();
}

//try/catch используем так где вызываем функцию addBook
async function addBookAndUpdateUI() {
    try {
        const book = await addBook({});
        console.log(book)
    } catch (error) {
        console.log(error);
    }
}
addBookAndUpdateUI();

//----- 2 ---------
async function fetchBooks() {
    const response = await fetch(`${BASE_URL}/books`);
    //const books = await response.json();
    return await response.json();;
}

async function fetchBookById(bookId) {
    const response = await fetch(`${BASE_URL}/books/${bookId}`);
    return response.json();
}

//---- 3 -----
async function removeBook(bookId) {
    const url = `${BASE_URL}/books/${bookId}`;
    const options = {
        method: 'DELETE'
    };

    const response = await fetch(url, options);
    //при remove (response.json()) можно не писать 
    const book = await response.json();
    return book;   
}

//----- 4 -----
async function updateBookById(update, bookId) {
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(update),
    }
 
    const response = await fetch(`${BASE_URL}/books/${bookId}`, options);
    const book = response.json();
    return book;
}