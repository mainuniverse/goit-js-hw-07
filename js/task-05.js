const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');
inputEl.addEventListener('input', () => {
    nameEl.textContent = inputEl.value === '' ? 'незнакомец' : inputEl.value;
});


// const inputName = document.querySelector('#name-input');
// const outputName = document.querySelector('#name-output');

// function inputNewName(event) {
//     if (inputName === "") {
//         outputName.textContent = 'незнакомец'
//     } else {
//         outputName.textContent = event.target.value
//     }
        
//   }

// inputName.addEventListener('input', inputNewName);