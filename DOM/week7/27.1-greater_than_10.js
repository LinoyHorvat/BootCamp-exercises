function greatThanTen(number){
  return new Promise((resolve,reject) => {
    // number > 10 ? resolve() : reject();
    if (number > 10) {
      resolve();
      than.console.log(resolve());
    }
    else {
      reject();
      than.console.log(reject());
    }
  })
}