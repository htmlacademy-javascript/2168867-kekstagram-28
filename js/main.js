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


//генерируем id фото
const i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

function getRandomId(a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const randomId = getRandomId(0, i.length - 1);
console.log(randomId); // убрать в финальном варианте

// формируем url фото
const j = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

const getRandomUrl = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const randomUrl = getRandomUrl(0, j.length - 1);
const getUrl = ('photos/' + randomUrl + 'git.jpg');
console.log(getUrl); // убрать в финальном варианте


//задаем массив для описания фото
const description = [
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

//формируем число лайков. массив от 15 до 200 большой поэтому воспользуемся функцией getRandomInteger
function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomPhotoIdFromRangeGenerator(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const generatePhotoId = createRandomPhotoIdFromRangeGenerator(15, 200);

console.log(generatePhotoId()); // убрать в финальном варианте

//комментарий - составная часть как персонаж в скринкасте

//создаем функцию для уникального id комментария
function getRundomIdComment() {
  let RundomIdComment = (Math.round(Math.random() * 10000));

  return RundomIdComment;
}

function createRandomIdFromRangeGenerator(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRundomIdComment(min, max);
    while (previousValues.includes(currentValue)) {
      currentValue = getRundomIdComment(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const idComment = createRandomIdFromRangeGenerator();
console.log(getRundomIdComment());

// создаем функцию  выбра случайного числа из массива
const k = [1, 2, 3, 4, 5, 6]

const getRandomNumberOfArray = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const randomNumberOfArray = getRandomNumberOfArray(0, k.length - 1);

//создаем случайный выбор аватара
const getRandomAvatar = ('img/avatar' + randomNumberOfArray + '.svg');
console.log(getRandomAvatar); // убрать в финальном варианте

// параметры message и names задали ранее массивами, поэтому можно воспользоваться функцией  getRandomInteger
const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

//создаем массив имен
const names = [
  'Гендальф Упругий',
  'Золотой Глаз',
  'Гнев программиста',
  'Молодость бабушки',
  'Старая калоша',
  'Любимый Кексик',
];
const similar_comment_count = 7;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//создаем функцию для массива комментариев
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = () => ({
  message: getRandomArrayElement(message),
  names: getRandomArrayElement(names),
});

const similarComment = Array.from({length: similar_comment_count}, createComment);

console.log(similarComment);
