function getRandomNumber (min, max) {
  if (min < 0 || max < 0) {
    return -1;
  }
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}


  function getPhotoInfo() {
    let photos = [];
    for (let i = 1; i <= 25; i++) {

      let info = {
      id: i,
      url: 'photos/${i}.jpg',
      description: 'stunning',
      likes: getRandomNumber(15, 200),
      comments: getRandomNumber(0, 200),
      }
      photos.push(info);
    }
    return photos;
}
getPhotoInfo();

