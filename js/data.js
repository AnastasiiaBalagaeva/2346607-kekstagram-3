import {getRandomNumber} from './util.js';

function getPhotoInfo() {
  const photos = [];
  for (let i = 1; i <= 25; i++) {
    const info = {
      id: i,
      url: `photos/${i}.jpg`,
      description: 'stunning',
      likes: getRandomNumber(15, 200),
      comments: getRandomNumber(0, 200),
    };
    photos.push(info);
  }
  return photos;
}
getPhotoInfo();

export {getPhotoInfo};
