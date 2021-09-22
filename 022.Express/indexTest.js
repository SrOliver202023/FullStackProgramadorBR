const express = require('express');
const PORT = 5000;

const app = express();
const getBody = (req, res)=>{
    let resp = req.body;
    console.log(JSON.stringify(req.body));
}
const showBody = (req, res)=>{

    res.send(`<h1>${req.body.name}</h1>`)
}

app.use(express.static('./client'));
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

app.get('/', showBody)
app.post('/', getBody)
app.put('/', getBody)
app.delete('/', getBody)

app.listen(PORT, ()=>{console.log(`Running Server PORT: ${PORT}`)});