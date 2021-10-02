const inputEl = document.querySelector('#validation-input');
const textLength = inputEl.value.length;

inputEl.addEventListener('blur', () => {
  if (textLength === Number(inputEl.getAttribute('data-length'))) {
    inputEl.classList.add('valid');
    inputEl.classList.replace('invalid', 'valid');
  } else {
    inputEl.classList.replace('valid', 'invalid');
  }
});

//почти супер, но не хватает начального задания класса 
//если лимит === длине вводимого то { добавляем класс валид и реплейсим класс инвалид - валид } 
//иначе { добавляем класс инвалид реплейсим класс валид инвалид }

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

// const inputEl = document.querySelector('#validation-input');
//  const textLength = inputEl.value.length;

// inputEl.addEventListener('blur', () => {
//   if (textLength === Number(inputEl.getAttribute('data-length'))) {
//     inputEl.classList.add('valid');
//     inputEl.classList.remove('invalid');
//   } else {
//     inputEl.classList.add('invalid');
//     inputEl.classList.remove('valid');
//   }
// });
