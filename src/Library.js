function createLibrary(name, shelves) {
  return {
    name: name,
    shelves: {
      fantasy:[],
      fiction:[],
      nonFiction:[]






    }
  };
}


  function addBook(name, book) {
    name.shelves[book.genre].push(book);
  }

  function checkoutBook(name, bookResult) {
    console.log(bookResult)
    for (var i = 0; i < name.shelves.fiction.length; i++){
      if (name.shelves.fiction[i].title.includes(bookResult)) {
          name.shelves.fiction.splice(i, 1)
      return `You have now checked out ${bookResult} from the ${name.name}`
    }
  }
    return `Sorry, there are currently no copies of ${bookResult} available at the ${name.name}`
};






















module.exports = {
createLibrary: createLibrary,
addBook: addBook,
checkoutBook: checkoutBook
}
