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

const reverseString = (str) =>{
  return str ? reverseStr(str.substr(1)) + str[0] : str;
}

const res = reverseString ("abc");
console.log(res);
// const arrOfStr = ['a','b','c']
// console.log(reverseStr(arrOfStr));