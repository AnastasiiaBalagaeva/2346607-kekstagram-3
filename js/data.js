import {getRandomNumber} from './util.js';

function generatePhoto() {
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
generatePhoto();

export { generatePhoto };
