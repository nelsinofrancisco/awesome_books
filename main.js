import Book from './modules/book.js';
import ListSection from './modules/list_section.js';

const book = new Book();
const listSection = new ListSection();
const form = document.querySelector('form');

listSection.generate(book.list());

document.addEventListener('click', (event) => {
  if (event.target && event.target.className.includes('remove-book')) {
    book.remove(event.target);
    listSection.generate(book.list());
  }
});

form.addEventListener('submit', (event) => {
  book.add();
  listSection.generate(book.list());
  event.preventDefault();
});
