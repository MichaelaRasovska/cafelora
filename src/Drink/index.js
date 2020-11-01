import { Layer } from '../Layer';
import './style.css';

export const Drink = (props) => {
  const drinkClass = document.createElement('div');
  drinkClass.className = 'drink';
  drinkClass.innerHTML = `<div class="drink__product">
  <div class="drink__cup">
    <img src="../assets/cups/${props.id}.png" />
  </div>
  <div class="drink__info">
    <h3>${props.name}</h3>
</div>
</div>
<div class="drink__controls">
  <button class="order-btn">Objednat</button>
</div>`;

  const drinkInfo = drinkClass.querySelector('.drink__info');
  for (let k = 0; k < props.layers.length; k++) {
    drinkInfo.appendChild(Layer(props.layers[k]));
  }
  const orderBtn = drinkClass.querySelectorAll('.order-btn');
  const drinkCup = drinkClass.querySelectorAll('.drink__cup');

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

  return drinkClass;
};

/*
<div class="drink">
            <div class="drink__product">
              <div class="drink__cup">
                <img src="/assets/cups/cappuccino.png" />
              </div>
              <div class="drink__info">
                <h3>Cappuccino</h3>
            </div>
          </div>
            <div class="drink__controls">
              <button class="order-btn">Objednat</button>
            </div>
          </div>
          */
