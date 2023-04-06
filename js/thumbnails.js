import {generatePhoto} from './data';

const photoTemplate = document.querySelector('#picture').content;
const pictures = document.querySelector('.pictures');

function renderThumbnail() {
  const photos = generatePhoto();
  photos.forEach(({url, likes, comments}) => {
    const photoHolder = photoTemplate.cloneNode(true);
    photoHolder.querySelector('.picture__img').src = url;
    photoHolder.querySelector('.picture__likes').textContent = likes;
    photoHolder.querySelector('.picture__comments').textContent = comments.length;
    pictures.appendChild(photoHolder);
  });
  pictures.appendChild(pictures);
}

export {renderThumbnail};
