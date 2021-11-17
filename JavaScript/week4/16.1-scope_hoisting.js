//1

// undefined
//2

function funcA() {
  let a = 1;
  console.log(a);
  console.log(foo());
  function foo() {
    return 2;
  }
}
// funcA();

// 2
var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName());
obj.prop.getFullName;