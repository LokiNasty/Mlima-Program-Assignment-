// Grab header and contact section
const header = document.querySelector('.header');
const contactSection = document.querySelector('#contact');

window.addEventListener('scroll', () => {
  const contactTop = contactSection.offsetTop;
  const contactHeight = contactSection.offsetHeight;
  const scrollPos = window.scrollY + window.innerHeight / 2;

  // If the middle of the viewport is inside the contact section
  if (scrollPos >= contactTop && scrollPos < contactTop + contactHeight) {
    header.classList.add('contact-active');
  } else {
    header.classList.remove('contact-active');
  }
});
