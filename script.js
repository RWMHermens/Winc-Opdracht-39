// A
const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }
]

// const findSpiderMan = (superhero) => {
//     return superhero.name === 'Spiderman';
// };
// console.log(superheroes.find(findSpiderMan));

const findSpiderMan = superheroes.find((superhero) => superhero.name === 'Spiderman');
console.log(findSpiderMan);
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

// B
const doubleArrayValues = [1, 2, 3];
const double = doubleArrayValues.map(x => x * 2);
console.log(double);
// result should be [2, 4, 6]

// C
// const numbers = [1, 4, 3, 6, 9, 7, 11];
const numbers = [1, 2, 1, 2, 1, 2];
const containsNumberBiggerThan10 = numbers.some((number) => number > 10);
console.log(containsNumberBiggerThan10);
// result should be true
// result should be false

// D
const great7 = ['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States'];
const isItalyInTheGreat7 = great7.some((country) => country === 'Italy');
console.log(isItalyInTheGreat7);
// result should be true

// E
// const timesTen = [1, 4, 3, 6, 9, 7, 11];
// const tenfold = timesTen.map((x) => x * 10);
// console.log(tenfold);

const tenfold2 = [1, 4, 3, 6, 9, 7, 11];
const timesTen2 = [];
tenfold2.forEach((number) => timesTen2.push(number * 10));
console.log(timesTen2);
// result should be [10, 40, 30, 60, 90, 70, 110]

// F
const lotofnumbers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98];
const isBelow100 = lotofnumbers.every((number) => number < 100);
console.log(isBelow100);
// result should be: false

// G
const add = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
const bigSum = add.reduce((total, number) => number + total, 0);
console.log(bigSum);
  // result should be 1118