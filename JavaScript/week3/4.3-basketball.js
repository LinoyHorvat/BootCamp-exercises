let johnScores = [89, 120, 103];
let mikeScores = [116, 94, 123];

const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length

let johnAvgScore = arrAvg(johnScores);
let mikeAvgScores = arrAvg(mikeScores);

if (johnAvgScore < mikeAvgScores){
  console.log('mike won');
}
else if (johnAvgScore > mikeAvgScores){
  console.log('john won');
}
else{
  console.log('draw');
}
