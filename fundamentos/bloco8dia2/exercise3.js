const {books} = require("./base")



  function getNamedBook() {
    return books.find((book) => book.name.length === 26 )
  }
  console.log(getNamedBook())