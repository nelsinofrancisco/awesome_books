export default class ListSection {
  constructor() {
    this.form = document.querySelector('form');
    this.bookList = document.getElementById('book-list');
  }

  updateSelections() {
    this.form = document.querySelector('form');
    this.bookList = document.getElementById('book-list');
  }

  generateBookCard(bookObj) {
    this.bookCard = document.createElement('li');
    this.textContainer = document.createElement('div');
    this.bookTitle = document.createElement('p');
    this.bookAuthor = document.createElement('p');
    this.sperator = document.createElement('span');
    this.removeBtn = document.createElement('button');

    this.bookCard.classList.add('book-card', 'd-flex', 'align-items-center', 'p-1');
    this.textContainer.classList.add('d-flex', 'flex-wrap', 'text-container');
    this.bookTitle.classList.add('book-card-text', 'mb-0');
    this.bookAuthor.classList.add('book-card-text', 'mb-0');
    this.sperator.classList.add('mx-1');
    this.removeBtn.classList.add('remove-book', 'ms-auto', 'bg-white', 'border', 'border-2', 'border-dark', 'px-1');
    const title = `"${bookObj.title}"`;
    this.bookTitle.textContent = title;
    this.bookAuthor.textContent = bookObj.author;
    this.sperator.textContent = 'by';
    this.removeBtn.textContent = 'Remove';

    this.textContainer.appendChild(this.bookTitle);
    this.textContainer.appendChild(this.sperator);
    this.textContainer.appendChild(this.bookAuthor);
    this.bookCard.appendChild(this.textContainer);
    this.bookCard.appendChild(this.removeBtn);

    return this.bookCard;
  }

  clearBooksSection() {
    this.bookList.innerHTML = '';
  }

  displayBooksSection(bookArray, dateTime) {
    for (let i = 0; i < bookArray.length; i += 1) {
      const bookCard = this.generateBookCard(bookArray[i]);
      this.bookList.appendChild(bookCard);
    }

    const date = document.getElementById('date');
    console.log(dateTime);
    date.innerText = `${dateTime}`;
  }

  generate(bookArray, dateTime) {
    this.clearBooksSection();
    this.displayBooksSection(bookArray, dateTime);
    this.updateSelections();
  }
}