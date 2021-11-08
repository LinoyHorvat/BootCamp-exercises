const percentageOfWorld1 = (population) => (`${((population/7900)*100).toFixed(1)}%`);
let china = percentageOfWorld1(1441);
let Israel = percentageOfWorld1(500);
let USA = percentageOfWorld1(2000);


console.log(china);
console.log(Israel);
console.log(USA);

