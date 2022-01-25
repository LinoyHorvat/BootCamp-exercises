const mongoose = require("mongoose");
const User = mongoose.model("User", {
  userId: {
    type: String,
    require: true,
    trim: true,
  },
  cash: {
    type: Number,
    default: 0,
  },
  credit: {
    type: Number,
    default: 0,
  }
});
module.exports = User;
