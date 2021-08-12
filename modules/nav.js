export default class Nav {
  constructor() {
    this.nav = document.querySelector('nav');
  }
  styleLink(link) {
    link.setAttribute('class', 'text-decoration-none');
    link.parentElement.parentElement.querySelectorAll('a')
    .forEach(el => {
      if(el !== link){
        el.setAttribute('class', 'text-decoration-none text-dark')
      }
    });
  }

  changeSection(section) {
    section.classList.remove('d-none');
    
    section.parentElement.querySelectorAll('section')
    .forEach(el => {
      if(el !== section && !(el.className.includes('d-none'))){
        el.classList.add('d-none');
      }
    });
  }

  showSection(navLink){
    this.styleLink(navLink);
    const sectionId = `section-${navLink.id.slice(4)}`;
    const section = document.getElementById(sectionId);
    this.changeSection(section);
  }
}