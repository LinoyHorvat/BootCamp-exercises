// Create a function that takes one argument, an array.
// to count over all the letters and return an object with the letter as the key and the letter count as the value.

const array1 = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function keyCount(array){
  const dic = {};
  for (let word of array){
    for (let letter of word){
      if (letter.toLowerCase() != letter.toUpperCase()){
        (letter.toLowerCase() in dic ? dic[letter.toLowerCase()] += 1 : dic[letter.toLowerCase()] = 1)
      }
    }
  }
  return dic;
}

console.log(keyCount(array1));