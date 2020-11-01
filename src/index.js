import {Layer} from './Layer'
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

const orderBtn = document.querySelectorAll('.order-btn');
const drinkCup = document.querySelectorAll('.drink__cup');

for (let i = 0; i < orderBtn.length; i++) {
  orderBtn[i].addEventListener('click', () => {
    for (let j = 0; j < drinkCup.length; j++) {
      drinkCup[j].classList.toggle('drink__cup--selected');
      if (drinkCup[j].classList.contains('drink__cup--selected')) {
        orderBtn[i].textContent = 'Zrušit';
      } else {
        orderBtn[i].textContent = 'Objednat';
      }
    }
  });
}
const ingredients = [
  { color: '#feeeca', label: 'mléčná pěna' },
  { color: '#fed7b0', label: 'teplé mléko' },
  { color: '#613916', label: 'espresso' },
];

const drinkInfo = document.querySelector('.drink__info');
for (let k = 0; k < ingredients.length; k++) {
  drinkInfo.appendChild(Layer(ingredients[k]));
}