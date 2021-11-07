function describeCountry(country,population,capitalCity){
 console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`) 
}

let Finland = `${describeCountry('Finland',6,'Helsinki')}`;
let Israel = describeCountry('Israel',8,'Jerusalem');
let USA = describeCountry('USA',6,'Washington D.C');
console.log(Finland);
console.log(Israel);
console.log(USA);