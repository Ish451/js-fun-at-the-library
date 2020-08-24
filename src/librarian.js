var checkoutBook = require('../src/library.js').checkoutBook;
var searchShelf = require('../src/shelf.js').searchShelf;

class Librarian {
  constructor(name, library) {
    this.name = name
    this.library = library

    }


  greetPatron(patron, morningTime) {
    if (morningTime == true){
      return `Good morning, ${patron}!`
    }else{
      return `Hello, ${patron}!`

    }
  }

 findbook(book) {
   if (book === name.shelves.fantasy[0]) {
    return `Yes, we have ${book}`
  } else if (bookConfirmation === name.shelves.nonFiction[0]) {
  return `Sorry, we do not have ${book}`

}
   }
 }










module.exports = Librarian;
