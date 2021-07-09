const socket = window.io();

socket.on('allPosts', (allPosts) => {

  allPosts.map(post => {
    const ul = document.querySelector('.contentList');
    const li = document.querySelector('.postItem').cloneNode(true);
    li.querySelector('.userName').innerHTML = post.user;
    li.querySelector('.postMessage').innerHTML = post.post;
    li.querySelector('.likes').innerHTML = post.likes;
    li.querySelector('.likes').addEventListener('click', (e) => {
      socket.emit('likedPost');
      return false;
    });
    li.querySelector('.stars').innerHTML = post.stars;
    li.querySelector('.stars').addEventListener('click', (e) => {
      incrementIcon('#currentStars');

    return false;
  });
    ul.appendChild(li);
  });
});

const incrementIcon = (icon) => {
  let currentValue = Number(document.querySelector(icon).innerText);
  document.querySelector(icon).innerText = currentValue += 1;
}

socket.on('incrementLikes', () => {
  incrementIcon('#currentLikes');
  const updatedLikes = Number(document.querySelector('#currentLikes').innerText);

  socket.emit('updateLikes', updatedLikes);
  return false;
});

socket.on('updateLikes', (updatedLikes) => {
  document.querySelector('#currentLikes').innerText = updatedLikes;
  return false;
});

socket.on('starPost', (updatedStars) => {
  document.querySelector('#currentStars').innerText = updatedStars;
  return false;
});


{/* <div class="postTable">
                    <div class="postContent">
                      <h4 class="userName"></h4>
                      <p class="postMessage"></p>
                    </div>
                    <div class="level-left">
                      <a class="level-item">
                        <span class="icon is-small" id='likeIcon'><i class="fas fa-heart"></i></span>
                        <span class="likes" id='currentLikes'></span>
                        <span class="icon is-small" id='starIcon'><i class="fas fa-star"></i></span>
                        <span class="likes" id='currentStars'></span>
                      </a>
                    </div>
                  </div> */}
