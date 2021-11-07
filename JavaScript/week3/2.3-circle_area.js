function calcArea(radius){
  let area = Math.PI*Math.pow(radius,2)
  return(`the area is ${area} \nthe rounded area is ${area.toFixed(2)}`);
 }
 console.log( calcArea(3));