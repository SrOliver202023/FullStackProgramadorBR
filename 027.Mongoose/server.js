const { urlencoded } = require('express');
const express = require('express');
const Routes = require('./src/routes');
const app = express();
const PORT = 4000;

app.use(urlencoded({ extended:true }))

app.use(express.static('public/styles'))
app.set("views", "public/views");

app.set('view engine', 'ejs');


app.use(Routes);

app.listen(PORT, ()=>console.log(`>>>>> Running server in [ 192.168.1.28:${PORT} ] <<<<<`));