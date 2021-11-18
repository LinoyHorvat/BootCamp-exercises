// Block 1 //////////////////////////////////////////////////////////////////

// undefined
// 2

function funcA() {
  let a = 1;
  console.log(a);
  console.log(foo());
  function foo() {
    return 2;
  }
}
// funcA();

// Block 2 //////////////////////////////////////////////////////////////////

// Aurelio De Rosa
//John Doe or undefined depending where the code run.
var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      console.log(this);
      return this.fullName;
    },
  },
};
// console.log(obj.prop.getFullName());
// var test = obj.prop.getFullName;
// console.log(test());

// Block 3 //////////////////////////////////////////////////////////////////
// undefined
// number
// Declaration of a global variable b.

function funcB() {
  a = b = 0;
  a++;
  return a;
}

funcB();
// console.log(typeof a);
// console.log(typeof b);

// Block 4 //////////////////////////////////////////////////////////////////
//2
//2
//the function
function funcC() {
  console.log("1");
}
// funcC();
function funcC() {
  console.log("2");
}
// funcC();

// Block 5 //////////////////////////////////////////////////////////////////
// -
// 1
//-
// error - because "var" inside a function behaves as "let".

function funcD1() {
  d = 1;
}
funcD1();
// console.log(d);

function funcD2() {
  var e = 1;
}
funcD2();
// console.log(e);

// Block 6 //////////////////////////////////////////////////////////////////
// undefined
// 1
function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();
