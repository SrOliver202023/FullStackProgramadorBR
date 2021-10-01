const express = require('express');
const Routes = express.Router();
const LinkController = require('./controllers/LinkController');
const db = require('./db');

db.on("error", ()=> console.log("Error Detected"));
db.once("open", () => console.log("db It's OK!"));

Routes.use(express.urlencoded({ extended:true }))

Routes.get('/', LinkController.allLinks);
Routes.get('/add', LinkController.indexRegister);

Routes.get('/edit/:id', LinkController.loadLink)
Routes.post('/edit/:id', LinkController.editLink)



Routes.get('/:title', LinkController.redirect);
Routes.post('/', LinkController.addLink);


Routes.delete('/:id', LinkController.deleteLink);
Routes.delete('/', LinkController.deleteLink);

module.exports = Routes;