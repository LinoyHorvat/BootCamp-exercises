const mongoose = require("mongoose");
const validator = require("validator");
mongoose.connect("mongodb://127.0.0.1:27017/products", {});

const Product = mongoose.model("Product", {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  details: {
    description: {
      type: String,
      required: true,
      minLength: 10,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    discount: {
      type: Number,
      default: 0,
    },
    images: {
      type: [String],
      minItems: 2,
    },
    phoneNumber: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isMobilePhone(value, "he-IL")) {
          throw new Error("Not a valid Isreali phone number");
        }
      },
    },
    dataAdded: {
      type: Date,
      default: Date.now(),
    },
  },
});

const newProduct = new Product({
  name: "xbox2",
  category: "console",
  details: {
    description: "gaming-console",
    price: 200,
    discount: 0,
    phoneNumber: "0505234560",
  },
});

newProduct.save();
