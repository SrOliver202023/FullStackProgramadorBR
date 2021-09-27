const express = require('express');
const Routes = express.Router();
const LinkController = require('./controllers/LinkController');
const db = require('./db');

db.on("error", ()=> console.log("Error Detected"));
db.once("open", () => console.log("db It's OK!"));

Routes.get('/:title', LinkController.title);
Routes.get('/', (req, res)=> res.send('Hello Mongoose!'))

module.exports = Routes;