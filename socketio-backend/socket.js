export const registerSocket = socket => {
  socket.on('add-message', ({ user, room, message }) => {
    console.log('adding a message: ', { user, room, message })
    if (room === '') {
      console.log('a public message')
      socket.broadcast.emit('message-added', { user, message });
    }
    else {
      console.log('a private message for room: ', room)
      socket.broadcast.to(room).emit('message-added', { user, message });
    }
  });

  socket.on('join-room', (room, cb) => {
    console.log('join room: ', room)
    socket.join(room)
    cb('joined room: ' + room)
  })
}