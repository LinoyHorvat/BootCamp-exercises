function makeAllCaps(arr) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      if (!(/[a-zA-Z]/).test(arr[i])) {
        reject("not a string!");
      }
      else {
        arr[i] = arr[i].toUpperCase()};
    }
    resolve(arr);
  });
}

function sortWords(arr) {
  return new Promise((resolve, reject) => {
    arr = arr.sort()
    resolve(arr);
  });
}

arr1 = ["a", "c", "b", "f"];
makeAllCaps(arr1)
.then((res) => {
  sortWords(res);
})
.catch((err) => {
  console.log(err);
});