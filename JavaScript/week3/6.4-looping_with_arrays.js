const percentageOfWorld1 = (population) => (`${((population/7900)*100).toFixed(1)}%`);


const populations =[10,20,50,70];

function populationPercentages(populations){
  const percentages =[] ;
  for (const elm of populations){
    percentages.push(percentageOfWorld1(elm));
  }
  return percentages;
}

console.log(populationPercentages(populations));