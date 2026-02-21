const name = "Kaustubh Kolhe"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName  = new String("Kaustubh Kolhe");
console.log(gameName[0]);

console.log(gameName.__proto__)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(7))
console.log(gameName.indexOf('t'))
console.log(gameName.split(' '))

const newString = gameName.substring(0,6)
console.log(newString);

const anotherString = gameName.slice(-8, 9);
console.log(anotherString)