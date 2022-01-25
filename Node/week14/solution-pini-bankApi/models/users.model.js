const mongoose = require("mongoose");

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
  },
  passportId: {
    type: String,
    required: true,
    unique: true,
  },
  cash: {
    type: Number,
    required: true,
  },
  credit: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0) {
        throw new Error("must be a positive  integer");
      }
    },
  },
});

module.exports = User;
