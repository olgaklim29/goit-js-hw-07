const numberOfCategoryElements = document.querySelectorAll('.item');
console.log(`В списке ${numberOfCategoryElements.length} категории`);
const showCategoriesElements = document.querySelectorAll(`h2`);
const listElements = showCategoriesElements.forEach(el =>
    console.log(`Категория: ${el.textContent}
    Количество элементов: ${el.parentNode.querySelectorAll(`li`).length}`),)