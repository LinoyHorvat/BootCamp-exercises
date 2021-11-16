const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

// a.1. Sort the array of strings from descending to ascending order

foods.sort();

// a.2. Sort the array of strings from ascending to descending order.

foods.sort().reverse();

const foodsWithUpperCase = [
  "aaa",
  "aad",
  "aab",
  "aac",
];

// b.1. Sort the array of strings from descending to ascending order.

// foodsWithUpperCase.sort((a, b) => a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0)); 

foodsWithUpperCase.sort(
  function(a, b) {
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    return 0;});
console.log(foodsWithUpperCase);


// b.2. Sort the array of strings from ascending to descending order.

foodsWithUpperCase.sort((a, b) => b.toLowerCase().charCodeAt(0) - a.toLowerCase().charCodeAt(0)); 

// c. Longest word

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

// c.1. Sort the array of strings from the longest word to the shortest word only using the sort function

words.sort((a,b) => a.length - b.length);
