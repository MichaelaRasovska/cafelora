import './style.css';

export const Layer = (props) => {
  const divElement = document.createElement('div');
  divElement.className = 'layer';
  divElement.innerHTML = `<div
  class="layer__color"
  style="background-color: ${props.color}"
></div>
<div class="layer__label">${props.label}</div>`;
  return divElement;
}; //vrací DOM element