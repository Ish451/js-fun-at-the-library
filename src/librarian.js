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
  findBook(correctBook) {
    var shelfNames = Object.keys(this.library.shelves)
      for (var i = 0; i < shelfNames.length; i++) {
      var bookObjs = this.library.shelves[shelfNames[i]];
      for (var j = 0; j < bookObjs.length; j++) {
        var bookTitles= bookObjs[j].title;
        var bookIndex = bookObjs.indexOf(bookObjs[j]);
        if (correctBook === bookTitles) {
          bookObjs.splice(bookIndex, 1);
          return `Yes, we have ${correctBook}`
        } else if (correctBook !== bookTitles) {
          return `Sorry, we do not have ${correctBook}`
        }
      }
    }
  }
 calculateLateFee(overdue) {
   return Math.ceil(overdue * .25);
 }
}









module.exports = Librarian;
