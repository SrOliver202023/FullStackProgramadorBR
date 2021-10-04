const express = require('express');
const app = express();
const socketIo = require('socket.io');
const messages = [];

app.use('/', express.static('public'));


const server = app.listen(3000, ()=>console.log('Server running...'));

const io = socketIo(server);
io.on('connection', (socket)=>{
  console.log('new connection');

  socket.on('new_message',(data)=>{
    messages.push(data.msg);

    io.emit('update_messages', messages);

  })


})