function getRandomNumber (min, max) {
  if (min < 0 || max < 0) {
    return -1;
  }
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

function isEscKey(evt) {
  return evt.key === 'Escape';
}

export { getRandomNumber, checkStringLength, isEscKey };
