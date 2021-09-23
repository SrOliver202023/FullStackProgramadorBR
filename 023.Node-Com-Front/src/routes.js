const express = require('express');
const routes = express.Router();
const Posts = require('./controllers/Posts');

routes.use(express.json());

routes.get('/', (req, res)=>{
    res.render('/views/page');
})
routes.get('/views', (req, res)=>{

})
routes.get('/all', Posts.show);
routes.post('/new', Posts.new);
routes.delete('/:id', Posts.delete);








module.exports = routes;