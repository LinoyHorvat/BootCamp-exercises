function printItems(arr){
  for (let i=0; i<arr.length; i++){
    console.log(arr[i]);
  }
}
function arrayLength(arr){
  let i = 0 ;
  arr[-1]
  while (arr[i] != undefined){
    i+=1;
  }
  return i;
}

function arraySum(arr){
  let sum = 0; 
  for (let i=0; i<arr.length; i++){
    sum += arr[i];
  }
  return sum ;
}

function arrayMulti(arr){
  let res = 1; 
  for (let i=0; i<arr.length; i++){
    res *= arr[i];
  }
  return res ;
}