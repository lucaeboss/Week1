const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5, 6];
const chunks = _.chunk(numbers, 2); 
console.log(chunks); 

const phrase = "hello world";
const camelCased = _.camelCase(phrase);
console.log(camelCased); 

const objects = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 }
];
const filtered = _.filter(objects, { age: 25 }); 
console.log(filtered); 

const numbers2 = [5, 2, 8, 1];
const minNumber = _.min(numbers2);
console.log(minNumber);

const names = ["John", "Jane", "Peter"];
const greetedNames = _.map(names, name => `Hello, ${name}!`);
console.log(greetedNames);