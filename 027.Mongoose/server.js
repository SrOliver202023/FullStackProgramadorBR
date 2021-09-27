const express = require('express');
const Routes = require('./src/routes');
const app = express();
const PORT = 3000;

app.use(Routes);

app.listen(PORT, ()=>console.log(`>>>>> Running server in [ 192.168.1.28:${PORT} ] <<<<<`));