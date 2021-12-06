function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
  // this.isSquare = function () {
  //   return (this.a === this.b === this.c === this.d);
  // }
}

Square.prototype.isSquare = function () {
  return (this.a === this.b && this.b === this.c && this.c === this.d );
}
var sqr;
sqr = new Square(1,1,1,1);
console.log(sqr.isSquare());
