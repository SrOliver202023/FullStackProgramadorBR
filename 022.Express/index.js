const express = require('express');
const { alunos } = require('./date');
const PORT = 5000;
const app = express();

app.use(express.urlencoded({extended:true}));
// app.use(express.json())

app.get('/', (req, res)=>{
    res.send("Hello World!")
    // console.log(JSON.stringify(alunos))
})

app.get('/alunos', (req, res)=>{
    res.json(JSON.stringify(alunos));
})
app.get('/aluno', (req, res)=>{
    // console.log(req.body);
    // console.log(req.body);
    res.send(alunos[req.body.id]);

})
app.get('/aluno/:id', (req, res)=>{
    // console.log(req.body);
    // console.log(req.body);
    res.send(alunos[req.params.id]);
})

app.listen(PORT, ()=>{console.log(`Running Server PORT: ${PORT}`)});