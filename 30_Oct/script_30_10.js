// scope of variable

if(true) {
    let user = "Anant Jadhav";
    /* console.log(user); */
}


// data types in javascript
//1. strings
let str = 'abcd';

//2. numbers
let num = 123;

//3. booleans
let bull = true;

//4. null
let nothing = null;

//5. undefined
let notDefined = undefined;

/* console.log(typeof str);
console.log(typeof num);
console.log(typeof bull);
console.log(typeof nothing);
console.log(typeof notDefined); */


// type conversion

let a = "7";
let b = 5;

a = Number(a);

/* console.log(a + b); */

//Type coercion

/* console.log(1 + '1'); */


let one = true + 1;
let two = false + 1;
let three = [1,2] + 1;

/* console.log(one);
console.log(two);
console.log(three);
 */

let price = 10;
let tax = '5';

let totalPrice = Number(price) + Number(tax);

/* console.log(totalPrice); */

let y = 8;
let x = 9;

if(y >= x) {
    /* console.log("Hi Bro how are you!"); */
} else {
    /* console.log('I don"t know who are you?'); */
}

/* console.log(true && false);
console.log(false || false);
console.log(!true); */


console.log(19 % 3);
console.log(10 == 3);
console.log(10 !=="10");
console.log(2 < "10");
console.log("5" > 2);
console.log((false && true) || false)