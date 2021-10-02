const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { registerValidate, loginValidate } = require('./validate');

const userController = {
  register: async function(req, res){

    const {error} = registerValidate(req.body)
    if(error) return res.status(400).send(error.message);

    const selectedUser = await User.findOne({email:req.body.email});
    if(selectedUser){return res.status(400).send('Email already exists!')};

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
      admin: false
    })

    try{
      const savedUser = await user.save();
      res.send(savedUser);
    } catch(error){
      res.status(400).send(error);
    }
  },
  login: async function(req, res){
    const {error} = registerValidate(req.body)
    if(error) return res.status(400).send(error.message);
    
    const selectedUser = await User.findOne({email:req.body.email});

    if(!selectedUser) return res.status(400).send('Email or password incorrect!');

    const passwordAndUserMatch = bcrypt.compareSync(req.body.password, selectedUser.password);

    if(!passwordAndUserMatch) return res.status(400).send('Email or password incorrect!');

    const token = jwt.sign({_id: selectedUser._id, name:selectedUser.name, admin: selectedUser.admin}, process.env.TOKEN_SECRET);
    res.header('autorization-token',token);
    res.send(`Welcome ${selectedUser.name}`);
  }
}
module.exports = userController;
