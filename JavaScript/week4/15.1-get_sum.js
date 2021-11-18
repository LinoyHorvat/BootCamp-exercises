function getSum(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  return sum;
}

arr1 = [1, 2, 3] ;
arr2 = [5, 66, 23] ;
console.log(getSum(arr1, arr2));