const input = document.querySelector('#validation-input');

const handleInputBlue = event => {
const  evtCurTar = event.currentTarget;

  if (evtCurTar.value.length >= 
    Number(evtCurTar.dataset.length)) {

      evtCurTar.classList.remove('invalid');
      evtCurTar.classList.add('valid');
    }else {

      evtCurTar.classList.remove('valid');
      evtCurTar.classList.add('invalid');
         }
         console.dir(evtCurTar);
};

input.addEventListener('change', handleInputBlue);