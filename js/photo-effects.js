import { EFFECTS } from './constants.js';
import { photoPreviewElement } from './scale-photo.js';

const effectsElement = document.querySelector('.effects');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderContainerElement = document.querySelector('.img-upload__effect-level');
const effectValueElement = document.querySelector('.effect-level__value');

const EFFECT_DEFAULT = EFFECTS[0];
let currentEffect = EFFECT_DEFAULT;

const isDefault = () => currentEffect === EFFECT_DEFAULT;

const closeSlider = () => {
  sliderContainerElement.classList.add('hidden');
};

const showSlider = () => {
  sliderContainerElement.classList.remove('hidden');
};

const changeSlider = () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: currentEffect.min,
      max: currentEffect.max
    },
    step: currentEffect.step,
    start: currentEffect.max,
  });

  if (isDefault()) {
    closeSlider();
  } else {
    showSlider();
  }
};

const onEffectsChange = (evt) => {
  if (evt.target.classList.contains('effects__radio')) {
    currentEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
    changeSlider();
  }
};

const onSliderChange = () => {
  const sliderValue = sliderElement.noUiSlider.get();
  photoPreviewElement.style.filter = isDefault()
    ? EFFECT_DEFAULT.style
    : `${currentEffect.style}(${sliderValue}${currentEffect.unit})`;
  effectValueElement.value = sliderValue;
};

const rebootEffects = () => {
  currentEffect = EFFECT_DEFAULT;
  changeSlider();
};

noUiSlider.create(sliderElement, {
  range: {
    min: EFFECT_DEFAULT.min,
    max: EFFECT_DEFAULT.max,
  },
  start: EFFECT_DEFAULT.max,
  step: EFFECT_DEFAULT.step,
  connect: 'lower',
});

closeSlider();

effectsElement.addEventListener('change', onEffectsChange);
sliderElement.noUiSlider.on('update', onSliderChange);

export { rebootEffects };
