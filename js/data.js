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
