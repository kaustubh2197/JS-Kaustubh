const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} is for ${myObject[key]}`)
}

const myArr = ["js", "rb", "py", "c#"]

for (const key in myArr) {
    console.log(myArr[key])
}