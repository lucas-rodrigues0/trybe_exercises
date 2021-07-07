module.exports = (io) => {
  io.on('connection', (socket) => {

    socket.on('starPost', (updatedStars) => {
      console.log(`${socket.id} emitted a star socket!`);
      socket.broadcast.emit('starPost', updatedStars);
    });

  })
};
