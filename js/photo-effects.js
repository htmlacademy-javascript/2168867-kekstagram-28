import { DEFAULT_EFFECT, effects } from './constants.js';
import { photoPreviewElement } from './scale-photo.js';

const effectsElement = document.querySelector('.effects');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderContainerElement = document.querySelector('.img-upload__effect-level');
const effectValueElement = document.querySelector('.effect-level__value');

let currentEffect = DEFAULT_EFFECT;

const isDefault = () => currentEffect === DEFAULT_EFFECT;

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
    currentEffect = effects[evt.target.value];
    changeSlider();
  }
};

const onSliderChange = () => {
  const sliderValue = sliderElement.noUiSlider.get();
  photoPreviewElement.style.filter = isDefault()
    ? DEFAULT_EFFECT.style
    : `${currentEffect.style}(${sliderValue}${currentEffect.unit})`;
  effectValueElement.value = sliderValue;
};

const rebootEffects = () => {
  currentEffect = DEFAULT_EFFECT;
  changeSlider();
};

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});

closeSlider();

effectsElement.addEventListener('change', onEffectsChange);
sliderElement.noUiSlider.on('update', onSliderChange);

export { rebootEffects };
