const storm = {
  superPower: "fly",
  print() {
    superPower = this.superPower;
    printSuperPower();
  },
};
function printSuperPower() {
  console.log("my superpower is " + this.superPower);
};

console.log(storm.print());
