// Write the following functions using the reduce built-in function.
// 1 Write a function called extractOnlyValue which accepts an array of objects and a key and returns a new array with the value of each object at the key

arr = [
  {key1: 'value1'},
  {key2: 'value2'},
  {key3: 'value3'}
];

const switch1 = (key, val) => {val: 'key'};

function extractOnlyValue (arr){
  const arr2 = arr.reduce((key, val) => {val: 'key'},[]);
  return arr2;
}

console.log(extractOnlyValue (arr));
