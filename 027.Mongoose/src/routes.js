const express = require('express');
const Routes = express.Router();
const LinkController = require('./controllers/LinkController');
const db = require('./db');

db.on("error", ()=> console.log("Error Detected"));
db.once("open", () => console.log("db It's OK!"));

Routes.use(express.urlencoded({ extended:true }))

Routes.get('/all', LinkController.allLinks);
Routes.get('/:title', LinkController.redirect);
Routes.get('/', LinkController.indexRegister);
Routes.post('/', LinkController.addLink);

module.exports = Routes;