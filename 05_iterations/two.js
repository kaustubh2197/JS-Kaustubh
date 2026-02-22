// for of

const arr = [1,2,3,4,5];

for (const element of arr) {
    console.log(element)
}

let a = new String("greeting");

for (const element of a) {
    console.log(element)
}

// map

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IND', "India");

console.log(map);

for (const [key, value] of map) {
    console.log(key + "->" + value)
}

const myObj = {
    Game1 : "NFS",
    Game2 : "SPiderman"
}

// for (const [key, value] of myObj) {
//     console.log(key, value)
// }