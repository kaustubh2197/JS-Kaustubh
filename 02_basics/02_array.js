const marvelHeroes = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

//marvelHeroes.push(dc)
console.log(marvelHeroes)

const superheroes = marvelHeroes.concat(dc)
console.log(superheroes)

console.log("**************************************")

const allheroes = [...marvelHeroes, ...dc]
console.log(allheroes)

console.log('*****************************************************')

const anotherarr = [1,2,3,[4,5,6],7,[8,9,[10,11]]];

const real_another_array = anotherarr.flat(Infinity)
console.log(real_another_array);

console.log("***********************************************************************")

console.log(Array.isArray("Hitesh"))
console.log(Array.from("kaustubh"))
console.log(Array.from({name: "kaustubh"}))

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2,score3))