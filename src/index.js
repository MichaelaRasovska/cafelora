import './index.html';
import './style.css';

console.log('funguju!');

const navBtn = document.querySelector('#nav-btn');
navBtn.addEventListener('click', () => {
  const navElm = document.querySelector('#nav-items');
  navElm.classList.toggle('nav-closed');
});

const navLinks = document.querySelectorAll('.nav-links');
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', () => {
    const navElm = document.querySelector('#nav-items');
    navElm.classList.add('nav-closed');
  });
}
