const inputText = document.querySelector('input#name-input');
const spanText = document.querySelector('span#name-output');


const updateValue = event => {
    spanText.textContent = event.target.value 
  ? event.target.value
  : 'незнакомец';
};

inputText.addEventListener('input',updateValue);