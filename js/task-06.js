const inputEl = document.querySelector('#validation-input');
 const textLength = inputEl.value.length;

  
inputEl.addEventListener('blur', () => {
  if (textLength === Number(inputEl.getAttribute('data-length'))) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
});

// const inputEl = document.querySelector('#validation-input');
// inputEl.addEventListener('change', inputElCheck);

// function inputElCheck (event) {
// if (fieldInput.hasAttribute('class')) {
//     fieldInput.removeAttribute('class');
// };
// if (event.currentTarget.value.length !== Number(fieldInput.getAttribute('data-length'))) {
//         return fieldInput.classList.add('invalid');};
//         return fieldInput.classList.add('valid');
// };
