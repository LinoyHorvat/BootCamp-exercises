function BOOM (n){
  let arr = []
  for (let i =1; i <= n; i++ ){
    if (i  % 7 == 0  || n / 10 == 7 || n % 10 == 7){
      arr[i-1] = "BOOM-BOOM";
    }
    else {
      arr[i-1] = i ; 
    }
  }
  return arr
}
