// Recreate the challenge from the exercise 6.3- looping_with_arrays ,but this time using a while loop.

arr = ["boo", "doooo", "hoo","ro"];

// function arrLengths(arr){
//   lengths =[];
//   for (let i = 0; i < arr.length ; i++){
//     lengths.push(arr[i].length);
//   }
//   return lengths;
// }

function arrLengths(arr){
  lengths =[];
  let i = 0 ;
  while (i < arr.length){
    lengths.push(arr[i].length);
    i ++ ;
  }
  return lengths;
}
console.log(arrLengths(arr));