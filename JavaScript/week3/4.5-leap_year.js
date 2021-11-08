function isALeapYear(year){
  if (year % 4 === 0 && year % 100 !== 0){
      return "It is indeed a leap year";
    }
  if (year % 4 === 0 && year % 100 == 0 && year % 400 == 0){
     return "It is indeed a leap year";
  }
  return "This is not a leap year";
}

console.log(isALeapYear(2012));
console.log(isALeapYear(2100));
console.log(isALeapYear(2400));