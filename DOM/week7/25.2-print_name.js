const printObj = {
  name: "linoy",
  printName: function () {
    console.log(this.name);
  },
  printNameAfterSec: function (){
    setTimeout(function(){console.log(this.name);},1000)
  }
}

printObj.printName;
printObj.printNameAfterSec;