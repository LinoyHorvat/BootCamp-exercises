const express = require("express");
const app = express();

app.use(express.json());
let numbers = [1,2,3,4,5,6,7,8,9,10,11]

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/numbers", (req, res) => {
  res.send(numbers);
});

app.post("/numbers/", (req, res) => {
  console.log(req.body.name);
  const newNum = req.body.number
  console.log(newNum);
  numbers.push(newNum)
  res.status(200).json(numbers)
});

app.delete("/numbers/:id/", (req, res) => {
  console.log(req.params.id);
  numbers = numbers.filter(number => number !== parseInt(req.params.id))
  res.send(req.params.id)
  res.send({numbers})
});

// app.put("/numbers/:id", (req, res) => {
//   console.log(req.params);
//   console.log(req.body);
//   //send back the modified user
// });




const PORT = 3003;
app.listen(PORT, () => {
  console.log(`listentinig to port: ${PORT}`);
});