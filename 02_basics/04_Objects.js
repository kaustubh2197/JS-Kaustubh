//const tinderusr = {} //literal

//const tinderuser = new Object()  //singelton object

const tinderuser = {}
tinderuser.id = "123abc"
tinderuser.name = "sam"
tinderuser.isLoggedIn = false


const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Kaustubh",
            lastname : "Kolhe"
        }
    }
}

console.log(regularUser.fullname.userfullname)

console.log(tinderuser)

console.log("***********************************************************")

const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "a",
    4 : "b"
}

const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)

console.log("***********************************************************")

const obj4 = {...obj1, ...obj2}
console.log(obj4)