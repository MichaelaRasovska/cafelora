import { Layer } from './Layer';
import { Drink } from './Drink';
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
const ingredients = [
  { color: '#feeeca', label: 'mléčná pěna' },
  { color: '#fed7b0', label: 'teplé mléko' },
  { color: '#613916', label: 'espresso' },
];

const drinks = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    ordered: false,
    layers: [
      {
        color: '#feeeca',
        label: 'mléčná pěna',
      },
      {
        color: '#fed7b0',
        label: 'teplé mléko',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
  {
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
];

for (let m = 0; m < drinks.length; m++) {
  const drinksList = document.querySelector('.drinks-list');
  drinksList.appendChild(Drink(drinks[m]));
}
