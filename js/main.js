/*создаnm массив из 25 сгенерированных объектов. Каждый объект массива — описание фотографии, опубликованной пользователем.

у нас есть два объекта данные фото и коммент. они сливаются в один объект
данные фото и коммента состоят из нескольких частей. каждая часть содержит набор сведений которые выбираются случайным образом

id (число) — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.
url (строка) — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
description (строка) — описание фотографии. Описание придумайть самостоятельно.
likes (число) — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
comments (состоит из частей)
id (число). Любое. Идентификаторы не должны повторяться.
avatar (строка ) - значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img.
message (строка ) - выбрать одно или два случайных предложения
name (строка) - Имена авторов также должны быть случайными
*/


const PHOTOS_COUNT = 25;
const AVATAR_COUNT = 6;
const SIMILAR_COMMENT_COUNT = 7;
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

// в некоторых позициях потребуется функция рандомного числа
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//создаем функцию для массива комментариев
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = () => ({
  id: getRandomInteger(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  messages: getRandomArrayElement(MESSAGES),
  names: getRandomArrayElement(NAMES),
});

const similarComment = Array.from({length: SIMILAR_COMMENT_COUNT}, createComment);

//создаем функцию для массива подписи
//id фото и url используют один массив
const i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

function getRandomIndex(a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

//формируем число лайков. массив от 15 до 200 большой поэтому воспользуемся функцией getRandomInteger с определенным диапазоном
function getRandomIntegerRange(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomPhotoIdFromRangeGenerator(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomIntegerRange(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomIntegerRange(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const generatePhotoId = createRandomPhotoIdFromRangeGenerator(15, 200);

const createDescriptionPhoto = () => ({
  id: getRandomInteger(1, PHOTOS_COUNT),
  url: `photos/-${getRandomIndex(1, PHOTOS_COUNT)}git.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: generatePhotoId(),
  idComment: getRandomInteger(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  messages: getRandomArrayElement(MESSAGES),
  names: getRandomArrayElement(NAMES),
});

const similarDescriptionPhoto = Array.from({length: similar_comment_count}, createDescriptionPhoto);

console.log(similarDescriptionPhoto);
