const express = require('express');
const app = express();
const socketIo = require('socket.io');
const messages = { grupo1: [], grupo2: [] };

app.use('/', express.static('public'));
app.use('/grupo1', express.static('public'));
app.use('/grupo2', express.static('public'));


const server = app.listen(3000, ()=>console.log('Server running...'));

const io = socketIo(server);

const grupo1 = io.of('/grupo1').on('connection', (socket)=>{
  console.log('new connection');
  socket.emit('update_messages', messages.grupo1);

  socket.on('new_message',(data)=>{
    messages.grupo1.push(data);
    console.log(messages);
    grupo1.emit('update_messages', messages.grupo1);
  })
})

const grupo2 = io.of('/grupo2').on('connection', (socket)=>{
  console.log('new connection');
  socket.emit('update_messages', messages.grupo2);

  socket.on('new_message',(data)=>{
    messages.grupo2.push(data);
    console.log(messages);
    grupo2.emit('update_messages', messages.grupo2);
  })
})







// io.on('connection', (socket)=>{

//   console.log('new connection');
//   socket.emit('update_messages', messages);

//   socket.on('new_message',(data)=>{
//     messages.push(data);
//     console.log(messages);
//     io.emit('update_messages', messages);
//   })
// })