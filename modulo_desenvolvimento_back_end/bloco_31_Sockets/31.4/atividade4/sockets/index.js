const model = require('../models/postsModel');

module.exports = (io) => {
  io.on('connection', (socket) => {
    const onLoad = async () => {
      const allPosts = await model.getAll();

      socket.emit('allPosts', allPosts);
    };
    onLoad();

    // socket.on('getPosts', async () => {
    //   console.log(allPosts, 'socket');
    // });

    socket.on('likedPost', () => {
      console.log(`${socket.id} emitted a liked socket!`);
      io.emit('incrementLikes');
    });

    socket.on('updateLikes', (updatedLikes) => {
      io.emit('updateLikes', updatedLikes);
    });

    socket.on('starPost', (updatedStars) => {
      console.log(`${socket.id} emitted a star socket!`);
      socket.broadcast.emit('starPost', updatedStars);
    });

  })
};
