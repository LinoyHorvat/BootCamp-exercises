// 1. Create a function that receives 1 argument, an object and returns a new object with the properties and values swapped.
obj1 = {
  key_a : 'val_1',
  key_b : 'val_2'
}
function swapObj(obj){
  const copy ={}
  for (let k in obj){
    copy[obj[k]]=k;
  }
  return copy;
}
const copy2 = swapObj(obj1);
console.log(copy2);
