import { SCALE_STAP, SCALE_DEFAULT, MAX_SCALE, MIN_SCALE } from './constants.js';

const scaleContainerElement = document.querySelector('.img-upload__scale');
const scaleSmallerElement = scaleContainerElement.querySelector('.scale__control--smaller');
const scaleBiggerElement = scaleContainerElement.querySelector('.scale__control--bigger');
const scaleValueElement = scaleContainerElement.querySelector('.scale__control--value');
const photoPreviewElement = document.querySelector('.img-upload__preview img');

const choosePhotoScale = (value) => {
  photoPreviewElement.style.transform = `scale(${value / 100})`;
  scaleValueElement.value = `${value}%`;
};

scaleSmallerElement.addEventListener('click', () => {
  const currentValue = parseInt(scaleValueElement.value, 10);
  let nextValue = currentValue - SCALE_STAP;
  if (nextValue < MIN_SCALE) {
    nextValue = MIN_SCALE;
  }
  choosePhotoScale(nextValue);
});

scaleBiggerElement.addEventListener('click', () => {
  const currentValue = parseInt(scaleValueElement.value, 10);
  let nextValue = currentValue + SCALE_STAP;
  if (nextValue > MAX_SCALE) {
    nextValue = MAX_SCALE;
  }
  choosePhotoScale(nextValue);
});

const rebootScale = () => {
  choosePhotoScale(SCALE_DEFAULT);
};

export { rebootScale, photoPreviewElement };
