const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesList = document.querySelector('#gallery');

const loadImages = obj => {
  return `<li class= 'gallery__list'><img class='images__item' src ='${obj.url}' alt ='${obj.alt}' width ='400' </li> `;
};

const elementList = images.map(loadImages).join(' ');
imagesList.insertAdjacentHTML('beforeend', elementList);

console.log(elementList);

// Object.keys(loadImages).forEach(function () {
//   loadImages.setAttribute("list - style", "none");
// })

// const p = document.querySelector("p"), // выбираем первый элемент <p> в документе
// function setAttr() {
//   p.setAttribute("style", "color:red"); // устанавливаем значение атрибута style у элемента
// }
// function updateList(elementList) {
//   loadImages.getElementsByTagName('li').setAttribute("list - style", "none");
// }

//style, list - style, none, display: flex, justify - content: space - between,
//style, 'list - style: none', 'display: flex', 'justify - content: space - between', )
//function fun() {
//document.getElementById("change").setAttribute("type", "button");}  .getElementsByTagName(name)
//loadImages.setAttribute(display, flex );
// imagesList.classList.add('list');
// imagesList.setAttribute("style", "list - style: none");
// imagesList.setAttribute("style", "display:flex");
// imagesList.setAttribute("style","justify - content:space - between");
// imagesList.setAttribute("style", "margin-right:30px");
