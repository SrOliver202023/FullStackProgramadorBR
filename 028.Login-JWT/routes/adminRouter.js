const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');

router.get('/', auth, (req, res)=>{

  if(req.user.admin){
    res.send(`Esse dado deve ser visto pelo ADMIN.`);
  }else{
    res.status(401).send('User Access Denied!');
  }


});




module.exports = router;