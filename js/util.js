const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// проверка на уникальность
const createUnicRandomNumber = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getRandomArrayElement = (elements) => elements[Math.floor(Math.random() * elements.length)];
const isEscapeKey = (evt) => evt.key === 'Escape';
const isFieldFocused = () => ['input', 'textarea'].includes(document.activeElement.tagName.toLowerCase());

export { getRandomInteger, getRandomArrayElement, createUnicRandomNumber, isEscapeKey, isFieldFocused };
