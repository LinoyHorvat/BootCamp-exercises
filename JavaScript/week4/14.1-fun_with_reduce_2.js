// Write the following functions using the reduce built-in function.
// 1 Write a function called extractOnlyValue which accepts an array of objects and a key and returns a new array with the value of each object at the key

arr = [
  { name: "value1", status: true },
  { name: "value2", status: true },
  { name: "value3", status: true },
];

// const switch1 = (key, val) => {val: 'key'};

function extractOnlyValue(arr, key) {
  return arr.reduce((acc, cur) => {
    acc.push(cur[key]);
    return acc;
  }, []);
}

console.log(extractOnlyValue(arr, "name"));
