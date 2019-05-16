let mybook = {
    title : "1984",
    author : "George Orwell",
    pageCount : 326
}

let otherbook = {
    title : "A People History",
    author : "Howard Zinn",
    pageCount : 723
}

function getSummary (book)
{
    return {
        summary:`${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let booksummary = getSummary(mybook);
let otherbooksummary = getSummary(otherbook);

console.log(booksummary.pageCountSummary);


