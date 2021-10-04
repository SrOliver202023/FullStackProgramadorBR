const express = require('express');
const app = express();
const PORT = 4000;
const socketIO = require('socket.io');
const list = ["Jose", "Marcos", "Antonio"];

console.log(list);

app.use('/', express.static('public'))
app.get('/list', (req, res) => res.send(list));


const server = app.listen(PORT, ()=>console.log(`Server running in http://192.168.1.28:${PORT}`));

const io = socketIO(server);
io.on('connection', (socket)=>{
  console.log('new Connection');

  const random = Math.random();
  socket.broadcast.emit('hello', {msg:`Qual Foi tio front? ${random}`});
// socket somentar para 1
// io para todos
// broadcast para todos menos o que chegou

  

  socket.on('hello_client_response', (data)=> console.log(data))
})

