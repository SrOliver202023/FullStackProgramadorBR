const jwt = require('jsonwebtoken');

module.exports = function (req, res, next){
  const token = req.header('authorization-token');

  if(!token) return res.status(401).send('Access Denied!')

  try{
    const userVerifed = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = userVerifed;
    next();
  }catch(error){
    res.status(401).send('Access Denied!')
  }

}
