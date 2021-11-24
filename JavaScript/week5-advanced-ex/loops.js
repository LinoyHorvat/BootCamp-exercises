// 1 //////////////////////
function printToN(num) {
  for (let i = 0; i < num; i++) console.log(i);
}
// 2 //////////////////////
function countX(n, t) {
  let count = 0;
  for (let i = 0; i < n; i += t) {
    count += 1;
  }
  return count;
}
// 3 //////////////////////
function countEven(num) {
  let count = 0;
  while (num > 0) {
    let n = num % 10;
    if (n % 2 == 0) count += 1;
    num = Math.floor(num / 10);
  }
  return count;
}
// console.log(countEven(1640));
// 4 //////////////////////
function countEvenOnRange(n) {
  let count = 0;
  for (let i = 112; i < n; i += 2) {
    count += 1;
  }
  return count;
}
function printReverse() {
  for (let i = 100; i >= 0; i -= 2) console.log(i);
}
// 5 //////////////////////
