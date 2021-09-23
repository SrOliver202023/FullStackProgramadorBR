const express = require('express');
const { students } = require('./data/StudentList');

const routes = express.Router();

routes.get('/', (req, res)=>{
    res.send("Hello World!")
    // console.log(JSON.stringify(alunos))
})
routes.get('/alunos', (req, res)=>{
    res.json(JSON.stringify(alunos));
})
routes.get('/aluno', (req, res)=>{
    // console.log(req.body);
    // console.log(req.body);
    res.send(alunos[req.body.id]);
})
routes.get('/aluno/:id', (req, res)=>{
    // console.log(req.body);
    // console.log(req.body);
    res.send(alunos[req.params.id]);
})


module.exports = routes;