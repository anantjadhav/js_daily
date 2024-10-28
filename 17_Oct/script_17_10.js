// javascript data types

/* 1. number */

let age = 25; // number
let name = "John"; // string
let isTure = true; // boolean
let myArray = [1, 2, 3, 4, 5]; // array
let myObject = { name: "John", age: 25 }; // object
let notDefind; // undefined
let myNull = null; // null
let mysymbol = Symbol("id"); // symbol
let myBigint = 9007199254740991n; // bigint

console.log(typeof age);
console.log(typeof name);
console.log(typeof isTure);
console.log(typeof myArray);
console.log(typeof myObject);
console.log(typeof notDefind);
console.log(typeof myNull);
console.log(typeof mysymbol);
console.log(typeof myBigint);

// Display the types in the corresponding HTML elements
document.getElementById("Age").textContent = typeof age;
document.getElementById("Name").innerHTML = typeof name;
document.getElementById("isTure").innerHTML = typeof isTure;
document.getElementById("myArray").innerHTML = typeof myArray;
document.getElementById("myObject").innerHTML = typeof myObject;
document.getElementById("notDefind").innerHTML = typeof notDefind;
document.getElementById("myNull").innerHTML = typeof myNull;
document.getElementById("mysymbol").innerHTML = typeof mysymbol;
document.getElementById("myBigint").innerHTML = typeof myBigint;

let myName = "Anant Jadhav";

document.getElementById("myName1").innerHTML = myName;