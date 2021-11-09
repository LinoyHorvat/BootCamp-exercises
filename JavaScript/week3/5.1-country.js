function countryToLiveIn(language, isIsland, population, country){
  if (typeof language != "string" ||typeof(isIsland) != "boolean" ||isNaN(population) ||typeof(country) != "string"){
    return "Invalid input"
  }
  if (language.toLowerCase() == 'english' && population <= 50 && !isIsland){
    console.log(`'You should live in ${country}`);
  }
else console.log(`${country} does not meet your criteria`)
}

console.log(countryToLiveIn('English', false, 46661.000, 'israel'));
