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
  var fantasyShelfTitles = [];
  for (var i = 0; i < shelfGenre.length; i++) {
    fantasyShelfTitles.push(shelfGenre[i].title)
  }
  return fantasyShelfTitles.join(', ')
}

module.exports = {
shelfBook: shelfBook,
unshelfBook: unshelfBook,
listTitles: listTitles,
  // searchShelf: searchShelf
};
