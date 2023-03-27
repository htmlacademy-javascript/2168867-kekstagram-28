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

import { getRandomInteger, getRandomArrayElement, createUnicRandomNumber } from './util.js';
import { PHOTOS_COUNT, AVATARS_COUNT, COMMENT_COUNT, MESSAGES, NAMES, DESCRIPTIONS, LIKES_MIN_COUNT, LIKES_MAX_COUNT } from './constants.js';

// генерация уникальных массивов
const getCommentId = createUnicRandomNumber(1, COMMENT_COUNT);
const photoId = createUnicRandomNumber(1, PHOTOS_COUNT);


const generateComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATARS_COUNT)}.svg`,
  messages: getRandomArrayElement(MESSAGES),
  names: getRandomArrayElement(NAMES),
});

const createDataPhoto = () => {
  const id = photoId(1, PHOTOS_COUNT);

  return {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
    comments: Array.from({ length: getRandomInteger(1, COMMENT_COUNT) }, generateComment),
  };
};

const createDataPhotos = () => Array.from({ length: PHOTOS_COUNT }, createDataPhoto);

export { createDataPhotos };
