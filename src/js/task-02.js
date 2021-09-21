const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsList = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const listItem = document.createElement('li');
  listItem.textContent= ingredient;
   
  return listItem;
  
});


console.log(elements);
ingredientsList.append(...elements);
//ingredientsList.append(...ingredients);

// const counterValue = document.querySelector('#value');
// const remove = document.querySelector("[data-action='decrement']");
// const add = document.querySelector("[data-action='increment']");

// const increment= () => counterValue.textContent ++;
// const decrement= () => counterValue.textContent --;

// remove.addEventListener('click', decrement);
// add.addEventListener('click', increment);



