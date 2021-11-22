// 1  implicit return //////////////////////////////////////////////////////////////////

// function countdown(num){
//   if (num === 0 ) return
//   console.log(num);
//   countdown(num - 1);
// }
// countdown(5);

// 2 //////////////////////////////////////////////////////////////////

// function countdown(num){
//   if (num > 0 ) {
//     console.log(num);
//     countdown(num - 1);
//   }
// }
// console.log(countdown(5));

// 3 //////////////////////////////////////////////////////////////////

// function countdown(num){
//   for (let i = num ; i > 0 ; i--) console.log(i);
// }
// countdown(5);

// fibonacci //////////////////////////////////////////////////////////////////

// function fibonacci(num){
//   if (num === 0 ) {
//     return  0 ;
//   }
//   if (num === 1 ) {
//     return  1 ;
//   }
//   else {
//     return fibonacci(num - 1) +  fibonacci(num - 2);
//   }
// }
// console.log(fibonacci(5));

// reverseStr with js function //////////////////////////////////////////////////////////////////

// function reverseStr(str){
//   return str.split('').reverse().join('');
// }
// let str = 'abc' ;
// console.log(reverseStr(str));

// reverseStr with for loop  //////////////////////////////////////////////////////////////////

// function reverseStr(arrOfStr){
//   for (let i = arrOfStr.length ; i >= 0 ; i--) console.log(arrOfStr[i]);
// }

// reverseStr with recursion //////////////////////////////////////////////////////////////////

// function reverseStr(arrOfStr){
//   if (arrOfStr.length == 1){
//     console.log(arrOfStr[0]);
//     return
//   }
//   else {
//     console.log(arrOfStr.pop());
//     reverseStr(arrOfStr);
//   }
// }

// const reverseStr = (Str) => {
//   return Str ? reverseStr(Str.substr(1)) + Str[0] : Str;
// }

// let res = reverseStr("abc") ;

// const arrOfStr = ['a','b','c']
// console.log(reverseStr(arrOfStr));

// q1 exponent of num //////////////////////////////////////////////////////////////////

// function exp(a, n){
//   if (n === 1){
//     return a
//   }
//   return a * exp (a, n - 1);
// }
// console.log(exp(2, 3));

// q2 binary search //////////////////////////////////////////////////////////////////
// function search(arr, val) {
//   let start = 0;
//   let middle = Math.floor(arr.length/ 2);
//   let end = arr.length;

//   if (start == end - 1) return arr[middle] === val ? middle : false;
//   if (arr[middle] > val) return search(arr.slice(start, middle), val);
//   else if (arr[middle] < val) return middle +  search(arr.slice(middle, end), val);
//   else return middle;
// }

const arr = [1, 2, 4, 6, 8, 10, 56];

// console.log(search(arr, 546)); //return 5

function recursiveFunction (arr, x, start, end) {
  if (start > end) return false;
  let mid=Math.floor((start + end)/2);
  if (arr[mid]===x) return true;
  if(arr[mid] > x)
      return recursiveFunction(arr, x, start, mid-1);
  else
      return recursiveFunction(arr, x, mid+1, end);
}

console.log(recursiveFunction(arr, 546, 0, arr.length)); //return 5

//Ex  7. -- Decode String///////////////////////////////////////

function decodeStr(s){
  if (s.length == 0) return; 
  if s.slice(0)
}