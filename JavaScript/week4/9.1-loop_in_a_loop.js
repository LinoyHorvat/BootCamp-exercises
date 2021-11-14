// With the use of two for loops, console log all the countries one by one and in your terminal.
const listOfNeighbours = [ 
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let list of listOfNeighbours){
  for (let country of list){
    console.log(`Neighbour: ${country}`);
  }
}
