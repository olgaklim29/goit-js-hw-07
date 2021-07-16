const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

const createIngredientsLi = element => {
    const elementList = document.createElement('li');
    elementList.textContent = element;
    
    return elementList;
};

const ingredientItem = ingredients.map(ingredient => 
  createIngredientsLi(ingredient));

ingredientsList.append(...ingredientItem);

console.log(ingredientsList);