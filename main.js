const BOOKS_DATA = [
  { title: 'first book', author: 'person 1' },
  { title: 'second book', author: 'person 2' },
];

const form = document.querySelector('form');
const removeBtns = document.querySelectorAll('.remove-book');

function addBook() {
  const bookTitle = document.getElementById('book-title');
  const bookAuthor = document.getElementById('book-author');

  const bookObj = {};

  bookObj.title = bookTitle.value;
  bookObj.author = bookAuthor.value;

  return bookObj;
}

function removeBook(index) {
  BOOKS_DATA.splice(index, 1);
}

form.addEventListener('submit', (event) => {
  BOOKS_DATA.push(addBook());
  event.preventDefault();
});

for (let i = 0; i < removeBtns.length; i += 1) {
  removeBtns[i].addEventListener('click', () => {
    removeBook(i);
  });
}