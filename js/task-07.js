const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', () => {
   
    textEl.style.fontSize =  `${inputEl.value}px`; 
});

// const inputEl = document.querySelector('#font-size-control');
// const textEl = document.querySelector('#text');
// function changeFontSize(event) {
//     textEl.style.fontSize = `${event.target.value}px`;
// }
// inputEl.addEventListener('input', changeFontSize);
