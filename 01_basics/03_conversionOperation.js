let score = 33;
console.log(typeof score);

console.log("------------------------------------")

score= "33";
console.log(score);
console.log(typeof score)

console.log("------------------------------------")

let score1 = "33abc"
console.log(typeof score1)
let valueInNumber = Number(score1);
console.log(typeof valueInNumber);
console.log(valueInNumber)

console.log("------------------------------------")

let score2 = null;
console.log(typeof score2)
let valueofscore2 = Number(score2)
console.log(typeof valueofscore2)
console.log(valueofscore2)

console.log("------------------------------------")

let score3 = undefined;
console.log(typeof score3)
let valueofscore3 = Number(score3)
console.log(typeof valueofscore3)
console.log(valueofscore3)

console.log("------------------------------------")

let score4 = true;
console.log(typeof score4)
let valueofscore4 = Number(score4)
console.log(typeof valueofscore4)
console.log(valueofscore4)


/*
    "33" => 33
    "33abc" => NaN
    true => 1; false=>0

*/
console.log("------------------------------------")

let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

/* 
    1 => true; 0 => false;
    "" => false
    "Hello" => true;
*/

console.log("------------------------------------")

let someNumber = 45
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)