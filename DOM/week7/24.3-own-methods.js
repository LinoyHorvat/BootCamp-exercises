function Person(personName, personLastName, personHobbies) {
  this.name = personName;
  this.lastName = personLastName;
  this.hobbies = personHobbies;
}

const linoyhorvat = new Person("Linoy", "Horvat", ["guitar","soccer","tennis","programing"]);

Person.prototype.filter = function(){
  const returnArr = []; 
  for (let i = 0; i < this.hobbies.length; i++) {
    if (this.hobbies[i].length > 6) returnArr.push(this.hobbies[i]);
  }
  return returnArr;
}

Person.prototype.find = function(word){

  for (let i = 0; i < this.hobbies.length; i++) {
    if (this.hobbies[i] === word) return "found";
  }
  return "didn't find";
}