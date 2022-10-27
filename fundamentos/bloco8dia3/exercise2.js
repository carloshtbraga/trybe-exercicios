const {books} = require('./base')

function nameAndAge() {
    
    let ajeita = books.map((book)=>({
        autor: book.author.name,
        age: book.releaseYear - book.author.birthYear,
    }))
    ajeita.sort((a,b)=> a.age - b.age)
    return ajeita
  }

  console.log(nameAndAge())