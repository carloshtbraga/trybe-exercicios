const {books} = require('./base')


  function formatedBookNames() {
    return books.map((book)=> (`${book.name} - ${book.genre} - ${book.author.name}`))
  }

console.log(formatedBookNames());