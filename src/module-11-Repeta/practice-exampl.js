console.log('Example');

async function addAndrenderBook() {
    try {
        const book = await addBook({})
        console.log(book) //напримертут рисуем разметку
    } catch (error) {
        console.log(error)
    }
    
    
}