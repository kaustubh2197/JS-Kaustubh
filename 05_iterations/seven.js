const myNumbers = [1,2,3,4,5]

const initialvalue = 0;
const myTotal = myNumbers.reduce( (acc, currval) => acc+ currval, initialvalue )

console.log(myTotal)