const categoriesItems = document.querySelectorAll('.item');
console.log(`В списке ${categoriesItems.length} категории.`);

const categoriesTitles = document.querySelectorAll('li.item');
categoriesTitles.forEach(el =>
  console.log(
    'Категория:',
    el.firstElementChild.textContent,
    'Количество элементов:',
    el.lastElementChild.children.length,
  ),
);

//const categoriesName = document.querySelectorAll('#categories');
//const categoriesTitles = document.querySelectorAll('h2');
//categoriesTitles.forEach(el => console.log('Категория:', el.textContent));
//const childItem = document.querySelectorAll('.ul');
//childItem.forEach(el => console.log('Количество элементов:', el.children.length));
