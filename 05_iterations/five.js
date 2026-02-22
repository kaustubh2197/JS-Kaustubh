const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const newNums = myNums.filter(num => num>4)
console.log(newNums)

const newNum = myNums.filter( (num) => {
    //if(num>4)
        return num>4;
} )

console.log(newNum)