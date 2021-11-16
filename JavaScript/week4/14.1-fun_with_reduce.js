const arr = [1,2,3,4,5,6,7] ; 

// Write the following functions using the reduce built-in function. 
// 1. max
console.log(arr.reduce((sum,elem) => {return sum + elem})); 
// 2. sum of even numbers
console.log(arr.filter(i => i % 2 === 0 ).reduce(( sum, elem ) => sum += elem));

// 3. average
console.log((arr.reduce((sum,elem) => {return sum + elem}))/arr.length); 

console.log(arr);



