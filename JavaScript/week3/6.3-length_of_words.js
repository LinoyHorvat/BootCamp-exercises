arr = ["boo", "doooo", "hoo","ro"];
function arrLengths(arr){
  lengths =[];
  for (let i = 0; i < arr.length ; i++){
    lengths.push(arr[i].length);
  }
  return lengths;
}
console.log(arrLengths(arr));