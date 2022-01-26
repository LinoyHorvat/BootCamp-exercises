const express = require('express');
require('./db/mongoose');
const cors = require('cors');
const path = require('path');
const userRouter = require('./routes/users')
const app = express();
const bcrypt = require('bcrypt');

const publicPath = path.join(__dirname, 'build');
app.use(express.static(publicPath));
app.use(cors());
app.use(express.json());

app.use('/users', userRouter);

// const myFunction = async ()=>{
//   const password = "Red123456"
//   const hashPassword = await bcrypt.hash(password, 8)
//   console.log(password);
//   console.log(hashPassword);
// }

// myFunction();

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log('listening on port ' + port);
});



