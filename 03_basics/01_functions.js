function sayMyName(){
    console.log("Heiseinberg")
}

sayMyName();

function addTwoNumbers(num1,num2){
    return num1+num2
    // console.log(num1+num2);
}

const result = addTwoNumbers(3,4)
console.log(`result is ${result}`)


console.log("****************************************************")

function loggedInuserMessage(username="sam"){
    if(!username)
    {
        console.log(`Please enter a username`);
        return
    }
    return `${username} logged in successfully`;
}

console.log(loggedInuserMessage(""))

console.log("****************************************************")

function cartcalcultion(val1, ...num1)
{
    return num1;
}

console.log(cartcalcultion(200, 400, 600));