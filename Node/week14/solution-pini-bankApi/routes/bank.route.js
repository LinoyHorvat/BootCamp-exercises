const express = require("express");
const router = express.Router();
const bankController = require("../controllers/bank.controller");

router
  .put("/cash/:id", (req, res) => {
    //add cash to user
    bankController.addCash(req, res);
  })
  .put("/credit/:id", (req, res) => {
    //add credit to user
    bankController.addCredit(req, res);
  })
  .put("/withdraw/:id", (req, res) => {
    //withdraw from user
    bankController.withdraw(req, res);
  })
  .put("/transfer/:idFrom/:idTo", (req, res) => {
    //transfer from user to user
    bankController.transfer(req, res);
  });

module.exports = router;
