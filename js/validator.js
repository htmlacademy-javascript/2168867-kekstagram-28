import { userModalHashtags, userModalComment } from './open-form.js';
import { isValidHashtag } from './regexp.js';
import { MAX_HASHTAG_SIMBOL_LENGTH, MAX_HASHTAG_COUNT, MAX_COMMENT_LENGTH } from './constants.js';

const userModalForm = document.querySelector('.img-upload__form');

const hashtags = userModalHashtags;
const userComment = userModalComment;

const pristine = new Pristine(userModalForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__error'
}, false);

userModalHashtags.addEventListener('focusin', () =>
  pristine.addValidator(
    userModalHashtags,
    (val) => isValidHashtag.test(val),
    'Хэштэг не соответствует правилам'
  )
);

userModalHashtags.addEventListener('focusout', () =>
  pristine.reset()
);


//здесь пишем условия валидации
//нельзя указать больше пяти хэш-тегов; т.е минимальное значение 0 максимальное 5
const validateHashtagsCount = hashtags.value.trim().length > MAX_HASHTAG_COUNT;

pristine.addValidator(
  userModalHashtags,
  validateHashtagsCount,
  'Превышено общее число хэштэгов'
);

// хештег не длинее 140 символов
const validateHashtagsLength = () => hashtags.length > MAX_HASHTAG_SIMBOL_LENGTH;

pristine.addValidator(
  userModalHashtags,
  validateHashtagsLength,
  'Максимальная длина хэштэга 140 символов'
);

// хештеги не должны повторяться
const validateUnicHashtags = () => {
  const lowercaseHashtags = hashtags.map((hashtag) => hashtag.toLowerCase());
  return hashtags.length === new Set(lowercaseHashtags).size;
};

pristine.addValidator(
  userModalHashtags,
  validateUnicHashtags,
  'Присутствует повторяющйся хэштэг'
);

const validateCommentsLength = () => userComment.length > MAX_COMMENT_LENGTH;

pristine.addValidator(
  userModalHashtags,
  validateCommentsLength,
  'Максимальная длина хэштэга 140 символов'
);

/*console.log(hashtags.value.length);
userModalForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  console.log(hashtags.value.length);
  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});*/
