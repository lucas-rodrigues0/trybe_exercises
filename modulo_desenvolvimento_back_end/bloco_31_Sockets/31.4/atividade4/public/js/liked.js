const socketLike = window.io();

const likeIcon = document.querySelector('#likeIcon');
likeIcon.addEventListener('click', (e) => {
  socketLike.emit('likedPost');

  return false;
});

const incrementLikedIcon = () => {
  let currentValue = Number(document.querySelector('#currentLikes').innerText);
  document.querySelector('#currentLikes').innerText = currentValue += 1;
}

socketLike.on('incrementLikes', () => {
  incrementLikedIcon();
  const updatedLikes = Number(document.querySelector('#currentLikes').innerText);

  socketLike.emit('updateLikes', updatedLikes);
});

socketLike.on('updateLikes', (updatedLikes) => {
  document.querySelector('#currentLikes').innerText = updatedLikes;
});
