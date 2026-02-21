// immediately invoked function expression (IIFE)

(function chai(){   //named iife
    console.log(`hi`)
})();

((name)=>{
    console.log(`hello ${name}`)
})("Kaustubh");