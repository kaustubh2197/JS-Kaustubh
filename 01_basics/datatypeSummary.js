// stack (primitive), heap (non-primitive)

let myName = "Kaustubh";
let anothername = myName;
console.log(anothername)

anothername = "Kolhe"
console.log(myName);
console.log(anothername);

console.log("****************************************")

let userOne = {
    email : "kaustubh@gmail.com",
    upiId : "user@ybl.com"
}

let userTwo = userOne;

userTwo.email = "kolhe@gmail.com";

console.log(userOne)

let abc = "Kaustubh"
