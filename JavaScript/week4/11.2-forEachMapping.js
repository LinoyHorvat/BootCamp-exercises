// 1. Write a function called doubleValues which accepts an array of integers and returns a new array with all the values in the array passed to the function doubled.
const arr = [1, 2, 3, 4];
const doubledArr = arr.map(function(num){
  return num * 2;
}) 

// 2. Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function.

function onlyEvenValues(arr){
  const even = []; 
  arr.forEach(num => {
    if (num % 2 === 0) even.push(num) ;
  });
  return even ;
}

//3. Write a function called showFirstAndLast which accepts an array as an argument and returns a new array with only the first and last elements from the function’s argument array. The returned array should only contain elements that are strings.
const arr1 = ['first','sec','th', 'last'];
const arr2 = [true,'sec','th', false];
function showFirstAndLast(arr){
  const res = [] ; 
  arr.forEach(function(elem,idx){
    if (typeof elem == 'string' && idx === 0 || typeof elem == 'string' && idx === arr.length - 1) res.push(elem) ;
  })
  return res ;
}

// 4. Write a function called vowelCount which accepts a string as an argument. The function should return an object which has the count of the number of vowel’s that are in the string. The key should be the vowel and the value should be the count. e.g. {a:3, o:2,u:4}. Should not be case sensitive.

str = "Write a function" ;
function vowelCount(str){
  const obj = {};
  const arr = str.toLocaleLowerCase().split('');
  arr.forEach(function(letter){
    if (letter ==='v' || letter ==='o' || letter ==='w' || letter ==='e' || letter ==='l'){
      letter in obj ? obj[letter] ++ : obj[letter] =1;
    }
  })
  return obj;
}

// 5. Write a function capitalize that takes a string as an argument and will return the whole string capitalized.

function capitalize(str){
  const arr = str.toLocaleLowerCase().split('').map(function(letter){return letter.toUpperCase()})
  return arr.join('');
}

// 6. Write a function called shiftLetters that takes a string as an argument and return’s an encoded string with each letter shifted down the alphabet by one.

function shiftLetters(str){
  const alphabet = 'abcdefghijklmnopqrstuvwxyza'.split('');
  const arr = str.toLocaleLowerCase().split('');arr.forEach(function(letter, idx) {
    if (letter === ' ') arr[idx] = ' '
    else arr[idx] = alphabet[alphabet.indexOf(letter)+1];
  })
  return arr.join('');
}

// 7. Create a function called swapCase that takes a string as an argument and returns a string that every other word is capitalized. (you can use the fifth’s exercise's function to keep it dry)

function swapCase(str){
  const arr = str.split(' ');
  arr.forEach(function(word, idx){
    if (idx % 2 === 0){
      arr[idx] = capitalize(arr[idx]);
    }
  })
  return arr;
}