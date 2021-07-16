const refs = {
    step: 1,
    counterValue: document.querySelector('span#value'),
    btnIncrement: document.querySelector('button[data-action="increment"]'),
    btnDecrement: document.querySelector('button[data-action="decrement"]'),
  };
  
  let number = 0;
  
  function increment(){
    refs.counterValue.textContent = (number += refs.step);
  }
  
  function decrement(){
    refs.counterValue.textContent = (number -= refs.step);
  }
  
  refs.btnIncrement.addEventListener('click', increment);
  refs.btnDecrement.addEventListener('click', decrement);