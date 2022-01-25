const express = require("express");
const router = express.Router();
const userRoute = require("./user.route");
const bankRoute = require("./bank.route");

router.use("/users", userRoute);
router.use("/bank", bankRoute);

module.exports = router;
