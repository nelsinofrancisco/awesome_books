export class Book {
  constructor(){
    this.BOOKS_DATA = JSON.parse(localStorage.getItem('books_data')) || [];
  }
  print(){
    console.log(this.BOOKS_DATA);
  }

  list(){
    return this.BOOKS_DATA;
  }

  setStorage(){
    localStorage.setItem('books_data', JSON.stringify(this.BOOKS_DATA));
  }

  add(){
    const bookTitle = document.getElementById('book-title');
    const bookAuthor = document.getElementById('book-author');

    const bookObj = {};

    let exists = false;

    for (let i = 0; i < this.BOOKS_DATA.length; i += 1) {
      if (this.BOOKS_DATA[i].title === bookTitle.value && this.BOOKS_DATA[i].author === bookAuthor.value) {
        exists = true;
      }
    }

    if (!exists) {
      bookObj.title = bookTitle.value;
      bookObj.author = bookAuthor.value;
      this.BOOKS_DATA.push(bookObj);
    }

    this.setStorage();
  }

  remove(element){
    const textElements = element.parentElement.querySelectorAll('.book-card-text');

    this.BOOKS_DATA = this.BOOKS_DATA.filter((obj) => {
      if (textElements[0].innerText === obj.title && textElements[1].innerText === obj.author) {
        return false;
      }

      return true;
    })
    this.setStorage();
  }
  
}

export class ListSection {
  constructor() {
    this.form = document.querySelector('form');
    this.bookList = document.getElementById('book-list');
  }

  updateSelections() {
    this.form = document.querySelector('form');
    this.bookList = document.getElementById('book-list');
  }


  generateBookCard(bookObj) {
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

  clearBooksSection() {
    this.bookList.innerHTML = '';
  }

  displayBooksSection(bookArray) {
    for (let i = 0; i < bookArray.length; i += 1) {
      const bookCard = generateBookCard(bookArray[i]);
      this.bookList.appendChild(bookCard);
    }
  }
}