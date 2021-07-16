const rangeFontInput = document.querySelector('#font-size-control');
const spanTextSize = document.querySelector('#text');


rangeFontInput.value = 15;
rangeFontInput.max = 100;
rangeFontInput.min = 10;


const handleGetSizeClick = () => {
   spanTextSize.style.fontSize = `${rangeFontInput.value}px`;

}

rangeFontInput.addEventListener('input', handleGetSizeClick)