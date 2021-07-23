const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

const markup = ingredients.map(item => {
  const newTeg = document.createElement('li');
  newTeg.innerHTML = `<p>${item}</p>`;
  return newTeg;
});

ingredientsList.append(...markup);