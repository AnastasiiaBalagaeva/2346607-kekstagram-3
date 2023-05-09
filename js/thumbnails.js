import {generatePhoto} from './data';

const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');
const documentFragment = document.createDocumentFragment();

function renderThumbnail() {
  const photos = generatePhoto();
  photos.forEach(({url, likes, comments}) => {
    const photoHolder = photoTemplate.cloneNode(true);
    photoHolder.querySelector('.picture__img').src = url;
    photoHolder.querySelector('.picture__likes').textContent = likes;
    photoHolder.querySelector('.picture__comments').textContent = comments.length;
    documentFragment.appendChild(photoHolder);
  });
  pictures.appendChild(documentFragment);
}

export { renderThumbnail };
