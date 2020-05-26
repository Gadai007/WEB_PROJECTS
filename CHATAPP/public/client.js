let socket = io()

$('#loginBox').show()
$('#chatBox').hide()

$('#btnStart').click(() => {
    socket.emit('login', {
        username: $('#inputUsername').val(),
        password: $('#inpPass').val()
    })
})

socket.on('logged_in', () => {
    $('#loginBox').hide()
    $('#chatBox').show()
})

socket.on('login_failed', () => {
    window.alert('username or password wrong')
})

$('#btnSendMsg').click(() => {
    socket.emit('send_msg', {
        to: $('#inpToUser').val(),
        msg: $('#inpNewMsg').val()
    })
})

socket.on('msg_rcvd', (data) => {
    $('#ulMsgs').append($('<li>').text(`[${data.from}] : ${data.msg}`))
})