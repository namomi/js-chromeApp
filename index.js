/* string
const what = "Nicolas";*/
/* Bloolean
const wat = true;
*/
/*
Number;
const wat = 666;
*/
/*
const wat = 55.1;
*/
/*
const something = "Something";

const dayOfWeek = ["mon", "Thu", "Wed", "Thu", "Fri", "Sat", "Sun", something];

console.log(dayOfWeek);*/

/* const nicoInfo = {
  name: "Nico",
  age: 33,
  gender: "Male",
  isHandsome: true,
  favMovise: ["Along the gods", "LOTR", "Oldboy"],
  favFood: [
    { name: "Kimchi", fatty: false },
    { name: "Cheese burger", fatty: true },
  ],
};

console.log(nicoInfo.favFood[1]); */

/*function sayHello(name, age) {
  return `Hello ${name} you are ${age} years odl`;
}

const greetKana = sayHello("kana", 14);*/

/*const calculator = {
  plus: function (a, b) {
    return a + b;
  },
};
const plus = calculator.plus(5, 5);*/

/*const title = document.querySelector("#title");
/*itle.innerHTML = "HI! From JS";
title.style.color = "red";
document.title = "i own you now";
console.dir(document);*/

/*function handleClick() {
  title.style.color = "blue";
}

title.addEventListener("click", handleClick);*/

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}

function int() {
  title.addEventListener("click", handleClick);
}
int();
