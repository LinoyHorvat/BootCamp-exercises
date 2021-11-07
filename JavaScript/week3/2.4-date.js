function theDate(){
  let weekdays = new Array(7);
        weekdays[0] = "Sunday";
        weekdays[1] = "Monday";
        weekdays[2] = "Tuesday";
        weekdays[3] = "Wednesday";
        weekdays[4] = "Thursday";
        weekdays[5] = "Friday";
        weekdays[6] = "Saturday";
  let months = new Array(7);
        months[0] = "January";
        months[1] = "February";
        months[2] = "March";
        months[3] = "April";
        months[4] = "May";
        months[5] = "June";
        months[6] = "July";
        months[7] = "August";
        months[8] = "September";
        months[9] = "October";
        months[10] = "November";
        months[11] = "December";
  
  const date = new Date();
  let name = weekdays[date.getDay()];
  let day = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear();
  return(`Today is ${name} the ${day} of ${month}, ${year}`);
  // return(`${year}`);
 }

 console.log(theDate());