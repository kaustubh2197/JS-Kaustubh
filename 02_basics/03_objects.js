//object literals

//Object.create

const JsUser = {
    name: "Kaustubh",
    "full Name" : "Kaustubh Kolhe",
    age: 28,
    location : "Akola",
    email: "kaustubh@gmail.com",
    isLoggedIn : true,
    lastLoginDays : ["Monday", "Tuesday"]
}

console.log(JsUser.name)
console.log(JsUser["lastLoginDays"])
console.log(JsUser["full Name"])

//Object.freeze(JsUser);
JsUser.age = 18;
console.log(JsUser.age)

JsUser.greeting = function(){
    console.log(`Hello JsUser`)
}

JsUser.greetingTwo = function(){
    console.log(`Hello JsUser , my name is ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())