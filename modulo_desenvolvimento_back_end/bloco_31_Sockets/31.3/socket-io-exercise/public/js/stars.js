const socketStar = window.io();

const starIcon = document.querySelector('#starIcon');
starIcon.addEventListener('click', (e) => {
  incrementStarIcon();
  const updatedStars = Number(document.querySelector('#currentStars').innerText);

  socketStar.emit('starPost', updatedStars);

  return false;
});

const incrementStarIcon = () => {
  let currentValue = Number(document.querySelector('#currentStars').innerText);
  document.querySelector('#currentStars').innerText = currentValue += 1;
}

socketStar.on('starPost', (updatedStars) => {
  document.querySelector('#currentStars').innerText = updatedStars;
})
