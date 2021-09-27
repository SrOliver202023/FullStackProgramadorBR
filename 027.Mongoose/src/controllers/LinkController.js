const Link = require('../models/Link');
module.exports = {
  async title(req, res){
    let title = req.params.title;
    try{
      let docs = await Link.findOne({ title })
      res.send(docs);
    }catch(error){
      res.send(error);
    }
  }
  


}
