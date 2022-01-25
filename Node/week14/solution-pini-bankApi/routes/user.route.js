const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
//find all users
router
  .get("/", (req, res) => {
    //get all users
    userController.getUsers(req, res);
  })
  .get("/:id", (req, res) => {
    //get specific user
    userController.getUser(req, res);
  })
  .post("/", (req, res) => {
    //create user
    userController.addUser(req, res);
  })
  .delete("/:id", (req, res) => {
    //delete user
    userController.deleteUser(req, res);
  })
  .delete("/", (req, res) => {
    //delete all users
    userController.deleteUsers(req, res);
  });

module.exports = router;
