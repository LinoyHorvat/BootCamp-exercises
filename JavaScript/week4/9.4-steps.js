function steps(n){
  for (let i = 1; i <= n; i ++){
    let step = '' ; 
    for (let j = 1 ; j <= n ; j ++){
      if (j <= i) step += '#' ; 
      else step += 's' ;
    }
    console.log(step);
  }
}
steps(3);