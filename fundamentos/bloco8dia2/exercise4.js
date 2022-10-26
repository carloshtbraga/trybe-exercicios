const {books} = require("./base")

function booksOrderedByReleaseYearDesc() {
   return books.sort((book1,book2)=> book2.releaseYear - book1.releaseYear )
  }
  console.log(booksOrderedByReleaseYearDesc())