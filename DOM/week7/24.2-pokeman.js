function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

const first = new Pokemon("name1","type1",["attack1", "attack2", "attack3"]);
const second = new Pokemon("name2","type2",["attack1", "attack2", "attack3"]);
const third = new Pokemon("name3","type3",["attack1", "attack2", "attack3"]);

Pokemon.prototype.callPokemon = function(){
  console.log(`I choose you ${this.name}`);
}
Pokemon.prototype.attack = function(){
  console.log(`${this.name} used ${this.attackList[0]}`);
}