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
    unique: true,
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

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne( {email})
  if (!user) throw new Error('Unable to login')
  const isMatch = await bcrypt.compare(password, user.password)
  if(!isMatch) throw new Error('Unable to login')
  return user
}


// Hash the plain text password before saving/ updating 
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
