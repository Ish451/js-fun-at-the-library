function shelfBook(book, shelfGenre) {
  if (shelfGenre.length < 3) {
        shelfGenre.unshift(book)
    }

}

function unshelfBook(book, shelfGenre) {
  for (var i = 0; i < shelfGenre.length; i++) {
  if(shelfGenre[i].title === book) {
    shelfGenre.splice(i,1);
    }
  }
  }

function listTitles(shelfGenre) {
  return shelfGenre.title[0,1,2]

}

module.exports = {
shelfBook: shelfBook,
unshelfBook: unshelfBook,
listTitles: listTitles,
  // searchShelf: searchShelf
};
