import { userModalHashtagsElement, userModalCommentElement } from './open-form.js';
import { MAX_HASHTAG_SYMBOL_LENGTH, MAX_HASHTAG_COUNT, MAX_COMMENT_LENGTH } from './constants.js';

const userModalForm = document.querySelector('.img-upload__form');

const texthashtag = userModalHashtagsElement;
const userComment = userModalCommentElement;

const pristine = new Pristine(userModalForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__error'
}, false);

//здесь пишем условия валидации
const getvalidHashtag = (value) => value.trim().toLowercase().split(' ');

pristine.addValidator(
  texthashtag,
  (value) => getvalidHashtag(value).every((hashtag) => /^#/.test(hashtag)),
  'Хэштэг должен начинаться с решетки}'
);
pristine.addValidator(
  texthashtag,
  (value) => getvalidHashtag(value).every((hashtag) => /[a-zа-яё0-9]{1,19}$/.test(hashtag)),
  'Хэштэг должен состоять только из букв и цифр'
);
pristine.addValidator(
  texthashtag,
  (value) => getvalidHashtag(value) > MAX_HASHTAG_SYMBOL_LENGTH,
  'Максимальная длина хэштэга 20 символов'
);
pristine.addValidator(
  texthashtag,
  (value) =>
    getvalidHashtag(value).length <= MAX_HASHTAG_COUNT,
  'Превышено общее число хэштэгов'
);
pristine.addValidator(
  texthashtag,
  (value) => {
    const hashtags = getvalidHashtag(value);
    return hashtags.length === new Set(hashtags).size;
  },
  'Присутствует повторяющйся хэштэг'
);


const validateCommentsLength = () => userComment.length > MAX_COMMENT_LENGTH;

pristine.addValidator(
  userModalHashtagsElement,
  validateCommentsLength,
  'Максимальная длина комментария 140 символов'
);

export { getvalidHashtag };
