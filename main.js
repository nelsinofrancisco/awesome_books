import Book from './modules/book.js';
import ListSection from './modules/list_section.js';
import Nav from './modules/nav.js';

const book = new Book();
const listSection = new ListSection();
const form = document.querySelector('form');
const nav = new Nav();

listSection.generate(book.list());

nav.nav.addEventListener('click', (event) => {
  
  if(event.target.id === 'nav-home'){
    nav.showSection(document.getElementById('nav-list'));
  } else if (event.target.nodeName === 'A'){
    nav.showSection(event.target);
  }
});


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


