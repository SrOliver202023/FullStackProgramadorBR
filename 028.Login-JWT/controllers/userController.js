const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userController = {
  register: async function(req, res){

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
    const selectedUser = await User.findOne({email:req.body.email});
    if(!selectedUser) return res.status(400).send('Email or password incorrect!');

    const passwordAndUserMatch = bcrypt.compare(req.body.password, selectedUser.password);
    if(!passwordAndUserMatch) return res.status(400).send('Email or password incorrect!');

    const token = jwt.sign({_id: selectedUser._id, admin: selectedUser.admin}, process.env.TOKEN_SECRET);
    res.header('autorization-token',token);

    console.log(`Logged!\nauthorization-token`, token);
    res.send('Logged!');
  }
}

module.exports = userController;