//  q1 -Fill an array with 100 of a same object using array fill method.
let arr = new Array(100).fill(0);
// q2 -Create an array with numbers ranging from 1-100 using the Array.from method.
let arr2 = Array.from({length: 100}, (_, i) => i + 1)
console.log(arr2);
// q3 -Convert only values of an object into one array.
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};
console.log(Object.values(object1));
// q4 -Convert an array into one object.
arr3=['a','b','c'];
const object2 = {};
let i=0;
for (const elm of arr3){
  object2[i]=elm;
  i++;
}
console.log(object2);

// q5 -Find out if an array is an array.
console.log(Array.isArray(arr3));

// q6 -Create a copy of an array that won’t effect the original array if modified.
console.log(arr3);
const arr4 = arr3; 
arr4.push('d');
console.log(arr4);
console.log(arr3);



