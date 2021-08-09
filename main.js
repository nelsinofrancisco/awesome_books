const BOOKS_DATA = [
  { title: 'first book', author: 'person 1' },
  { title: 'second book', author: 'person 2' },
];

let form = document.querySelector('form');
let removeBtns = document.querySelectorAll('.remove-book');
let bookList = document.getElementById('book-list');

function updateSelections() {
  
  form = document.querySelector('form');
  removeBtns = document.querySelectorAll('.remove-book');
  bookList = document.getElementById('book-list');

};

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
  removeBtn.onclick = assignRemoveEvents();

  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(removeBtn);
  return bookCard;
}

function clearBooksSection () {
  bookList.innerHTML = '';
}

function displayBooksSection(bookArray) {

  for (let i = 0; i < bookArray.length; i += 1){
    const bookCard = generateBookCard(bookArray[i]);

    bookList.appendChild(bookCard);
  }
}

displayBooksSection(BOOKS_DATA);
updateSelections();

form.addEventListener('submit', (event) => {
  BOOKS_DATA.push(addBook());
  clearBooksSection();
  displayBooksSection(BOOKS_DATA);
  updateSelections();
  event.preventDefault();
});

function assignRemoveEvents() {
  const removeBtns = document.querySelectorAll('.remove-book');
  for (let i = 0; i < removeBtns.length; i += 1) {
    removeBtns[i].addEventListener('click', () => {
      removeBook(i);
      clearBooksSection();
      displayBooksSection(BOOKS_DATA);
      updateSelections();
    });
  }
}