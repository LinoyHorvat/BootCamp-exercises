const mongoose = require("mongoose");
const validator = require("validator")
bcrypt = require("bcrypt")


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  cash: {
    type: Number,
    default: 0,
  },
  email: {
    type: String,
    require: true,
    trim: true,
    lowercase: true,
    validate(value){
      if (!validator.isEmail(value)){
        throw new Error('Invalid Email')
      }
    }
  },
  password: {
    type: String,
    require: true,
  }
})

userSchema.pre('save',async function(next){
  const user = this
  console.log(user);
  if(user.isModified('password')){
    user.password =await bcrypt.hash(user.password, 8)


  }
  next()
})
const User = mongoose.model("User", userSchema);
module.exports = User;
