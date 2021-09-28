const Link = require('../models/Link');

const redirect = async (req, res)=>{
  let title = req.params.title;
  try{
    let docs = await Link.findOne({ title })
    res.redirect(docs.url);
  }catch(error){ res.send(error) }
}

const addLink = async(req, res)=>{
  let link = new Link(req.body);
  try{
    let doc = await link.save();
    console.log(req.body)
  }catch(error){
    res.status(422).render('index', { error, body:req.body })
  }
}

const indexRegister = async(req, res)=>{
  res.render('index', { error:false, body:{} });
}

const allLinks = async(req, res)=>{
  try{
    let links = await Link.find({});

    res.render('all', { links })
    console.log(links.map(link =>link.title))

  }catch(error){
    res.status(404).render('index', { error, body:req.body })
  }
}

module.exports = { redirect, addLink, indexRegister, allLinks};
