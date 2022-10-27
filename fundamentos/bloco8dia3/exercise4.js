const { books } = require("./base");

let ano = new Date().getFullYear();
function oldBooksOrdered() {
 let livro= books.filter((book)=> ano - book.releaseYear > 60)
    livro.sort((booka,bookb)=> booka.releaseYear - bookb.releaseYear)
    return livro
}
console.log(oldBooksOrdered());
