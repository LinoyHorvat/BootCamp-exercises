const people = ["Greg", "Mary", "Devon", "James"];

// 1
// for (let i = 0 ; i < people.length ; i ++ ){
//   console.log(people[i]);
// }

// 2-5
people.shift()
people.pop();
people.unshift("Matt")
people.push('Linoy');

// 6
// for (let i = 0 ; i < people.length ; i ++ ){
//   console.log(people[i]);
//   if (people[i] == "Mary"){
//     break;
//   }
// }

// 7
const people2 = people.slice(2)

// 8-9
console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));
// 10
people3 = ["Greg", "Mary", "Devon", "James"];
people3.splice(2,0,"Elizabeth","Artie");

// 11
const withBob = people3.concat("Bob");

console.log(withBob);
