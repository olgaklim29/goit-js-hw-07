const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');
const totalValue = document.querySelector('#value');

let countValue = 0;

const incrementValue = function () {
  countValue += 1;
  totalValue.textContent = countValue;
};

const decrementValue = function () {
  countValue -= 1;
  totalValue.textContent = countValue;
};

increment.addEventListener('click', incrementValue);
decrement.addEventListener('click', decrementValue);