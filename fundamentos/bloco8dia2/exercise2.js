const {books} = require("./base")

function smallerName() {
    let nameBook;
    books.forEach((book)=>{
        if(!nameBook || book.name.length < nameBook.length){
          nameBook = book.name  
        }
    })
    return nameBook;
  }
console.log(smallerName())
  