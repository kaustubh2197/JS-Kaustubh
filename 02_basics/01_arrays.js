// array

const myArr = [0,1,2,"Hello"]

const myHeroes = ["IronMan", "Thor", "Black window"]

const myArr2 = new Array(1,2,3,4);
console.table(myArr)

// array methods
myArr.push(4);
console.log(myArr)
myArr.pop()
console.log(myArr)

myArr.unshift(5)
console.log(myArr)

myArr.shift();
console.log(myArr)

const newArr = myArr.join()
console.log(newArr);

myArr.splice(1,1)
console.log(myArr)