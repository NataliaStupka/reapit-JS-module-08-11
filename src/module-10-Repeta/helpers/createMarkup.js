//розмітка картинок
function createMarkup(arr) {
    console.log('ARRRRR:', arr)
    return arr.map(({url, urlToImage, title, author, description}) => {
        return `
    <li class="list-item-card">
        <a href="${url}" target="_blank" rel="noopener noreferrer">
            <article>
                <img src="${urlToImage}" alt="" width="240">
                <h2>${title}</h2>
                <p>Posted by: ${author}</p>
                <p>${description}</p>
            </article>
        </a>
    </li>`
}).join('');
    
 }

 export { createMarkup };


 