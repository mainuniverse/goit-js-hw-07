const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
   nameEl.textContent = inputEl.value.trim() === '' ? 'незнакомец' : inputEl.value ;
    
});
// const result = inputEl.trim;
// console.log(result);

// const inputEl = document.querySelector('#name-input');
// const outputEl = document.querySelector('#name-output');


// const nameAdd = nameEl.textContent;
// nameAdd.trim  = inputEl.value === '' ? 'незнакомец' : inputEl.value ;

// const inputEl = document.getElementById("name-input");
// const nameOutput = document.getElementById("name-output");

// inputEl.oninput = function () {
//     if (inputEl.value === '') {
//        nameOutput.innerHTML = 'незнакомец';
//     } else{
//     nameOutput.innerHTML = input.value;
//     }
// }
// inputEl.addEventListener('input', inputEl);