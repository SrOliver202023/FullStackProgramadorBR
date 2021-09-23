const PORT =  3000;
const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.static('public'));
app.use(express.json());
app.use(routes);
app.listen(PORT, ()=> console.log('Running Server...'))
