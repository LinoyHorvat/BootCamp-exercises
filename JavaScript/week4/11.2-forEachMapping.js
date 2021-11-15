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
console.log(onlyEvenValues(arr));