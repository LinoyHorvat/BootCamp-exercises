const User = require('../models/users')

const getAllUsers = async (req, res)=>{
  try {
    const users = await User.find()
    res.status(200).send(users);
  }
  catch (err) {
    res.status(400).send(err);
  }}

  const addUser = async (req, res)=>{
    const {userId, cash, credit} = req.body
    const user = new User({userId, cash, credit})
    try {
      await user.save();
      res.status(200).send(user);
    }
    catch(err) {
      res.status(400).send(err);}
  }

  const getUser = async (req, res)=>{
    const { id } = req.params;
    try{
      const user = await User.findById(id);
      await user.save();
      res.status(200).send(user);
    }
    catch(err) {res.status(400).send(err);}
  }

  const addCash = async (req, res)=>{
    const { id } = req.params;
    const { amount } = req.body;
    if (amount === undefined || amount < 0) {
      res.status(400).send({error: "Please enter a valid amount"})
    }
    try{
      const user = await User.findByIdAndUpdate(id, { $inc: { cash: amount }} );
      if (!user) {
        return res.status(400).send({ error: "Cannot find user" });
      }
      await user.save();
      const user2 = await User.findById(id);
      res.send(user2);
    }
    catch(err) {res.status(400).send(err);}
  };

  const updateUser = async (req, res) => {
    const { id } = req.params;
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update)=> allowedUpdates.includes(update))
    if (!isValidOperation){
      return res.status(400).send({ error: 'Invalid updates'})
    }
    try{
      const user = await User.findById(id)
      updates.forEach((update) => user[update] = req.body[update])
      await user.save()
      res.send(user);

      if (!user){
        return res.status(404).send()
      }
    }
    catch(err) {res.status(400).send(err)}
  }


  module.exports = {
    getAllUsers, 
    addUser, 
    addCash,
    getUser,
    updateUser
  }