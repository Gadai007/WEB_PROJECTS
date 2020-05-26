const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

let users = {
    debayan: 'gadai'
}

socketMap = {}

app.use('/', express.static(__dirname + '/public'))

io.on('connection' , (socket) => {

    function login(s,u){
        s.join(u)
        s.emit('logged_in')
        socketMap[s.id] = u
        console.log(socketMap)
    }
   
    socket.on('login', (data) => {
        if(users[data.username]){
            if(users[data.username] == data.password){
                login(socket,data.username)
            }
            else {
                socket.emit('login_failed')
            }
        }
        else{
            users[data.username] = data.password
            login(socket,data.username)
        }
        console.log(users)
    })

    socket.on('send_msg', (data) => {
        data.from = socketMap[socket.id]
        if(data.to){
            io.to(data.to).emit('msg_rcvd', data)
        }
        else {
            socket.broadcast.emit('msg_rcvd', data)
        }
    })
})

server.listen(6789, () => {
    console.log('server started in http://localhost:6789')
})