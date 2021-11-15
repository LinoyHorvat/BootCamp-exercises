function print(str){
  console.log(str);
}
function isString(str, func){
  if (typeof(str) === 'string') func(str);
}
isString('linoy',print)

function firstWordUpperCase(str, func){
  
}