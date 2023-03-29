//завела отдельный модуль со всеми константами
const PHOTOS_COUNT = 25;
const AVATARS_COUNT = 6;
const COMMENT_COUNT = 17;
const COMMENT_IN_BLOCK = 5;
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
  'Гендальф Упругий',
  'Золотой Глаз',
  'Гнев программиста',
  'Молодость бабушки',
  'Старая калоша',
  'Любимый Кексик',
];
const DESCRIPTIONS = [
  'Утро в сосновом лесу',
  'Приплыли',
  'Мона Лиза',
  'Черный квадрат',
  'Бурлаки на Волге',
  'Письмо запорожцев турецкому султану',
  'Девятый вал',
  'Девушка с персиками',
  'Звездная ночь',
  'Ночной дозор',
  'Грачи прилетели',
  'Апофеоз войны',
  'Сотворение Адама',
  'Девочка на шаре',
  'Боярыня Морозова',
  'Утро стрелецкой казни',
  'Рождение Венеры',
  'Сад земных наслаждений',
  'Поцелуй ',
  'Крик ',
  'Постоянство Памяти',
  'Пылающий жираф',
  'Дом для эротомана',
  'Портрет Поля Элюара',
  'Игроки в карты',
];
const LIKES_MIN_COUNT = 15;
const LIKES_MAX_COUNT = 200;
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

export { PHOTOS_COUNT, AVATARS_COUNT, COMMENT_COUNT, COMMENT_IN_BLOCK, MESSAGES, NAMES, DESCRIPTIONS, LIKES_MIN_COUNT, LIKES_MAX_COUNT, MAX_HASHTAG_SYMBOL_LENGTH, MAX_HASHTAG_COUNT,MAX_COMMENT_LENGTH, MAX_SCALE, MIN_SCALE, SCALE_STAP, SCALE_DEFAULT, EFFECTS };
