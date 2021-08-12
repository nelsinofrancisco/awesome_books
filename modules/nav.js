export default class Nav {
  constructor() {
    this.nav = document.querySelector('nav');
  }

  styleLink(link) {
    if (link.className.includes('links')) {
      link.setAttribute('class', 'links text-decoration-none fs-6 fw-bold px-2');
    } else {
      link.setAttribute('class', 'text-decoration-none fs-6 fw-bold px-1');
    }
    link.parentElement.parentElement.querySelectorAll('a')
      .forEach((el) => {
        if (el !== link) {
          if (el.className.includes('links')) {
            el.setAttribute('class', 'links text-decoration-none text-dark fs-6 fw-bold px-2');
          } else {
            el.setAttribute('class', 'text-decoration-none text-dark fs-6 fw-bold px-1');
          }
        }
      });
  }

  changeSection(section) {
    section.classList.remove('d-none');
    section.parentElement.querySelectorAll('section')
      .forEach((el) => {
        if (el !== section && !(el.className.includes('d-none'))) {
          el.classList.add('d-none');
        }
      });
  }

  showSection(navLink) {
    this.styleLink(navLink);
    const sectionId = `section-${navLink.id.slice(4)}`;
    const section = document.getElementById(sectionId);
    this.changeSection(section);
  }
}

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["styleLink", "changeSection"] }] */