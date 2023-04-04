function getRandomNumber (min, max) {
  if (min < 0 || max < 0) {
    return -1;
  }
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}

export {getRandomNumber};
