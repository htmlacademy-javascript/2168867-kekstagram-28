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

import { getRandomInteger, getRandomArrayElement, generateIdComment } from './util.js';


const PHOTOS_COUNT = 25;
const AVATARS_COUNT = 6;
const COMMENT_COUNT = 7;
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

const generateComment = () => ({
  id: generateIdComment(),
  avatar: `img/avatar-${getRandomInteger(1, AVATARS_COUNT)}.svg`,
  messages: getRandomArrayElement(MESSAGES),
  names: getRandomArrayElement(NAMES),
});

const comments = () => Array.from({ length: COMMENT_COUNT }, generateComment);

const createDescriptionPhoto = () => {
  const id = getRandomInteger(1, PHOTOS_COUNT);

  return {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
    comments: comments(),
  };
};

const createDescriptionsPhotos = () => Array.from({ length: COMMENT_COUNT }, createDescriptionPhoto);

export { createDescriptionsPhotos };
