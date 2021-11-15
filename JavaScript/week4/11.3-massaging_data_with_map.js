const data = [ {
    name: "John", 
    birthday: "1-1-1995", 
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"], 
  },
  },
  {
    name: "Mark", 
    birthday: "10-5-1980", 
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
  },
},
{
  name: "Mary", 
  birthday: "1-10-1977", 
  favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
},
},
{
  name: "Thomas", 
  birthday: "1-10-1990", 
  favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"], 
  },
},
{
  name: "Mary", 
  birthday: "1-10-1977", 
  favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"], 
  },
},
];
// 1. Create a function that returns all the names from the array.
function returnName(data){
  const arrName = data.map(function(obj){
    return obj.name;
  })
  return arrName ;
}
console.log(returnName(data));

// 2. Create a function that returns all the objects that are born before 1990.
function checkBirthday(date){
  var year = date.slice(date.length -4)
  return year < 1990 ? true : false
}
function olderObj(data){
  const olderArr = []; 
  data.forEach(function(obj) {
    if (checkBirthday(obj.birthday) ) olderArr.push(obj)
  });
  return  olderArr;
}

console.log(olderObj(data));

// 3. Create a function that returns an object of all the different foods from all the objects as the key and the number of times that food is present in all the objects as the value.

function whatFood(data){
  const dicFood = {} 
  const foodArr = data.map(function(obj){
    obj.favoriteFoods["meats"].forEach(function(food){
    food in dicFood ? dicFood[food] ++ : dicFood[food] =1})
    obj.favoriteFoods["fish"].forEach(function(food){
    food in dicFood ? dicFood[food] ++ : dicFood[food] =1})
  })
  return dicFood ;
}

console.log(whatFood(data));