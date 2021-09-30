const Link = require('../models/Link');

const redirect = async (req, res)=>{
  let title = req.params.title;
  try{
    let docs = await Link.findOne({ title })

    if(doc){
      res.redirect(docs.url);
    }else{
      next();
    }
  }catch(error){ res.send(error) }
}

const addLink = async(req, res)=>{
  let link = new Link(req.body);
  try{
    let doc = await link.save();
    res.redirect('/');
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

const deleteLink = async (req, res) =>{
  let id = req.params.id;
  if(!id){
    id = req.body.id;
  }

  try{
    await Link.findByIdAndDelete(id);
    res.status(202).redirect('/');
  }catch(error){
    res.status(404).send(error);
  }
}


module.exports = { redirect, addLink, indexRegister, allLinks, deleteLink }
