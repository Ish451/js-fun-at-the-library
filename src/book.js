function createTitle(title) {
  return `The ${title}`;

};

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns,
  }
};

function saveReview(newReview, bookReviews) {
  if (bookReviews.includes(newReview) === true) {
    return bookReviews;
  }
  return bookReviews.push(newReview);


};

function calculatePageCount(bookTitle){
  return bookTitle.length * 20
}

function writeBook(bookTitle, mainCharacter, pageCount, genre){
  return{

    title: bookTitle,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre:"fantasy"


  }
}





function editBook(ghoulBook){
  ghoulBook.pageCount = ghoulBook.pageCount * .75;
}


 module.exports = {


  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
};
