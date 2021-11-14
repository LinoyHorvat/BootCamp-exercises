const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

function match(arr1, arr2){
  const res = []; 
  arr1. sort(); 
  arr2.sort();
  for (var i = 0; i < arr1.length ; i++ ){
    if (arr2.indexOf(arr1[i]) > -1){
      res.push(arr1[i])
    }
  }
  return res;
}

console.log(match(food, food1));
