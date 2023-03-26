import { SCALE_STAP, SCALE_DEFAULT, MAX_SCALE, MIN_SCALE } from './constants.js';

const scaleContainer = document.querySelector('.img-upload__scale');
const scaleSmallerElement = scaleContainer.querySelector('.scale__control--smaller');
const scaleBiggerElement = scaleContainer.querySelector('.scale__control--bigger');
const scaleValue = scaleContainer.querySelector('.scale__control--value');
const photoPreview = document.querySelector('.img-upload__preview img');

const photoScale = (value) => {
  photoPreview.style.transform = `scale(${value / 100})`;
  scaleValue.value = `${value}%`;
};

scaleSmallerElement.addEventListener('click', () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let nextValue = currentValue - SCALE_STAP;
  if (nextValue < MIN_SCALE) {
    nextValue = MIN_SCALE;
  }
  photoScale(nextValue);
});

scaleBiggerElement.addEventListener('click', () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let nextValue = currentValue + SCALE_STAP;
  if (nextValue > MAX_SCALE) {
    nextValue = MAX_SCALE;
  }
  photoScale(nextValue);
});

const rebootScale = () => {
  photoScale(SCALE_DEFAULT);
};

export { rebootScale, photoPreview };
