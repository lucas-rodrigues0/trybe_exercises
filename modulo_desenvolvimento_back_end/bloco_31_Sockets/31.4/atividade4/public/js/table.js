const model = require('../../models/testimonialModel');


const allpost = async () => {
  return await model.getAll();
}

const funcao = () => {
  const ul = document.querySelector('#table');

  const all = allpost();

  all.map(post => {
    const contentTable = document.querySelector('#postTable').cloneNode(true);
    const li = document.createElement('li');

    contentTable.querySelector('#userName').innerText = post.user;
    contentTable.querySelector('#postContent').innerText = post.post;
    contentTable.querySelector('#currentLikes').innerText = post.likes;
    contentTable.querySelector('#currentStars').innerText = post.stars;

    li.innerHTML = contentTable;

    ul.appendChild(li);
  })

}

window.onload(funcao());
