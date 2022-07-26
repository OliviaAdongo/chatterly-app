const express = require ('express');
const socket =require('socket.io')
const app = express();
const cors = require ('cors');

app.use(cors())
app.use(express.json())  //allow send data from frontend to backend

const server = app.listen('3001', ()=> console.log('Server running on port 3001!!!')); 
//This is the cde for starting and listenning to the server connection to our server

io = socket(server)
// The connection argument represents incoming socket from a client
io.on('connection', (socket)=>{
    console.log(socket.id)// Random id given to whoever logs into the application
    //data represents the room we are creating 
    socket.on('join_room', (data)=>{
        socket.join(data)
        console.log('User joined room' + data);
    })

    socket.on('disconnect', ()=> {
        console.log('USER DISCONNECTED')
    })
})