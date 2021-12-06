console.log(this);
// this is a reference to window which is the global scope of the browser

const myObj = {
  name: "Timmy",
  greet() {
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet();
// a. reference to the window
// b. remove the arrow function

var myFuncDec = function () {
  console.log(this);
};
// reference to the window

const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();
// reference to the window

document.querySelector(".element").addEventListener("click", function e(e) {
  console.log(this);
});

function myFuncDec1() {
  let that = this;
  console.log(that);
}
myFuncDec1();
