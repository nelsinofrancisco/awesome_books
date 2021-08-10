import { Book } from './modules/book.js';

const book = new Book();
book.print()


let form = document.querySelector('form');
let bookList = document.getElementById('book-list');

function updateSelections() {
  form = document.querySelector('form');
  bookList = document.getElementById('book-list');
}


function generateBookCard(bookObj) {
  const bookCard = document.createElement('li');
  const bookTitle = document.createElement('p');
  const bookAuthor = document.createElement('p');
  const removeBtn = document.createElement('button');

  bookCard.classList.add('book-card', 'mb-1');
  bookTitle.classList.add('book-card-text');
  bookAuthor.classList.add('book-card-text');
  removeBtn.classList.add('remove-book', 'mb-05');

  bookTitle.textContent = bookObj.title;
  bookAuthor.textContent = bookObj.author;
  removeBtn.textContent = 'Remove';

  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(removeBtn);
  return bookCard;
}

function clearBooksSection() {
  bookList.innerHTML = '';
}

function displayBooksSection(bookArray) {
  for (let i = 0; i < bookArray.length; i += 1) {
    const bookCard = generateBookCard(bookArray[i]);
    bookList.appendChild(bookCard);
  }
}

displayBooksSection(book.list());
updateSelections();

document.addEventListener('click', (event) => {
  if (event.target && event.target.className === 'remove-book mb-05') {
    book.remove(event.target);
    
    clearBooksSection();
    displayBooksSection(book.list());
    updateSelections();
  }
});

form.addEventListener('submit', (event) => {

  book.add();

  clearBooksSection();
  displayBooksSection(book.list());
  updateSelections();
  event.preventDefault();
});
