const {books} = require('./base')

function fantasyOrScienceFiction() {
    let u = books.filter((book)=>
        book.genre === "Fantasia" || book.genre === "Ficção Científica"
    )
    return u
  }

  console.log(fantasyOrScienceFiction());