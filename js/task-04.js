const counterValue = document.querySelector('#value');
const remove = document.querySelector("[data-action='decrement']");
const add = document.querySelector("[data-action='increment']");

const increment= () => counterValue.textContent ++;
const decrement= () => counterValue.textContent --;

remove.addEventListener('click', decrement);
add.addEventListener('click', increment);

