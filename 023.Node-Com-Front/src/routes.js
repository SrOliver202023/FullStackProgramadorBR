const express = require('express');
const routes = express.Router();
const Posts = require('./controllers/Posts');
const cors = require('cors');

const options = {
    origin: 'http://192.168.1.28:3000'
}

routes.use(cors());
routes.use(express.json());

routes.get('/', (req, res)=>{
    res.render('page');
})
routes.get('/api/all', Posts.show);

routes.post('/api/new', Posts.new);
routes.delete('/:id', Posts.delete);


module.exports = routes;