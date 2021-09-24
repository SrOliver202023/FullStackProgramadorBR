const express = require('express');
const PORT = 5000;

const app = express();

// app.use(express.static('./client'));
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

const getBody = (req, res)=>{
    let resp = req.body;
    console.log(JSON.stringify(req.body));
}
const showBody = (req, res)=>{
    res.send(`<h1>${JSON.stringify(req.body)}</h1>`)
}

app.get('/', showBody)

app.listen(PORT, ()=>{console.log(`Running Server PORT: ${PORT}`)});