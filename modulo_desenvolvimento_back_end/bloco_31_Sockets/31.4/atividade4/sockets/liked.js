module.exports = (io) => {
  io.on('connection', (socket) => {

    socket.on('likedPost', () => {
      console.log(`${socket.id} emitted a liked socket!`);
      io.emit('incrementLikes');
    });

    socket.on('updateLikes', (updatedLikes) => {
      io.emit('updateLikes', updatedLikes);
    })

  })
};
