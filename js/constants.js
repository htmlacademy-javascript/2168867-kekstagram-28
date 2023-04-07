const COMMENT_IN_BLOCK = 5;
const MAX_HASHTAG_SYMBOL_LENGTH = 20;
const MAX_HASHTAG_COUNT = 5;
const MAX_SCALE = 100;
const MIN_SCALE = 25;
const SCALE_STAP = 25;
const SCALE_DEFAULT = 100;
const DEFAULT_EFFECT = {
  style: 'none',
  min: 0,
  max: 100,
  step: 1,
  unit: '',
};
const effects = {
  none: DEFAULT_EFFECT,
  chrome: {
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  sepia: {
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  marvin: {
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  phobos: {
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  heat: {
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  }
};
const BASE_URL = 'https://28.javascript.pages.academy/kekstagram';
const ALERT_SHOW_TIME = 5000;
const RENDER_DELAY = 500;
const RANDOM_PICTURE_COUNT = 10;
const SORT_NUMBER = 0.5;
const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const VALIDATOR_PRIORITY = 1000;
const ERROR_MESSAGE = `Загрузите изображение в формате ${FILE_TYPES.join(', ')}`;

export { COMMENT_IN_BLOCK, MAX_HASHTAG_SYMBOL_LENGTH, MAX_HASHTAG_COUNT, MAX_SCALE, MIN_SCALE, SCALE_STAP, SCALE_DEFAULT, DEFAULT_EFFECT, effects, BASE_URL, ALERT_SHOW_TIME, RENDER_DELAY, RANDOM_PICTURE_COUNT, SORT_NUMBER, FILE_TYPES, VALIDATOR_PRIORITY, ERROR_MESSAGE };
