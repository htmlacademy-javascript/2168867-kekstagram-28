const COMMENT_IN_BLOCK = 5;
const MAX_HASHTAG_SYMBOL_LENGTH = 20;
const MAX_HASHTAG_COUNT = 5;
const MAX_COMMENT_LENGTH = 140;
const MAX_SCALE = 100;
const MIN_SCALE = 25;
const SCALE_STAP = 25;
const SCALE_DEFAULT = 100;
const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 0,
    step: 0,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  }
];
const BASE_URL = 'https://28.javascript.pages.academy/kekstagram';
const ALERT_SHOW_TIME = 5000;
const RENDER_DELAY = 500;
const RANDOM_PICTURE_COUNT = 10;
const SORT_NUMBER = 0.5;
const FILE_TYPES = ['jpg', 'jpeg', 'png'];

export { COMMENT_IN_BLOCK, MAX_HASHTAG_SYMBOL_LENGTH, MAX_HASHTAG_COUNT,MAX_COMMENT_LENGTH, MAX_SCALE, MIN_SCALE, SCALE_STAP, SCALE_DEFAULT, EFFECTS, BASE_URL, ALERT_SHOW_TIME, RENDER_DELAY, RANDOM_PICTURE_COUNT, SORT_NUMBER, FILE_TYPES };
