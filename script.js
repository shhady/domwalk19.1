//*1
const startHere = document.querySelector(".start-here");
startHere.innerText = "main title";

//* 2 = change li inside ul
// const subTitle = document.querySelectorAll(ul li");
// subTitle.innerText = "sub title 4";
// console.log(subTitle);

//? createElement
const newLi = document.createElement("li");
newLi.innerText = "sub title 4";
const ul = document.querySelector("ul ul");
ul.appendChild(newLi);
//* 3 deleting element
const ulRemove = document.querySelector("ul ul");
const removeMe = ulRemove.removeChild(ulRemove.lastElementChild);
//* 4 change li inside ul

const Ul = document.querySelector("ul");
Ul.children[3].innerText = "Master Of The Dom";
console.log(Ul);

//* 5 change the text of P
const P = document.querySelector("p");
P.innerText = "lorem ipsum";
