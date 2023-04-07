import { VALIDATOR_PRIORITY, MAX_HASHTAG_SYMBOL_LENGTH, MAX_HASHTAG_COUNT } from './constants.js';

const getHashtag = (value) => value.trim().toLowerCase().split(' ');

const HASHTAG_VALIDATOR_DATA = [
  [
    (value) => {
      const hashtags = getHashtag(value);
      return hashtags.length === new Set(hashtags).size;
    },
    'Присутствует повторяющйся хэштэг'
  ],
  [
    (value) => getHashtag(value).length <= MAX_HASHTAG_COUNT,
    'Превышено общее число хэштэгов'
  ],
  [
    (value) => !value || getHashtag(value).every((hashtag) => hashtag.length <= MAX_HASHTAG_SYMBOL_LENGTH),
    'Максимальная длина хэштэга 20 символов'
  ],
  [
    (value) => !value || getHashtag(value).every((hashtag) => /[a-zа-яё0-9]{1,19}$/.test(hashtag)),
    'Хэштэг не может содержать спецсимволы и должен содержать минимум одну букву и цифру'
  ],
  [
    (value) => !value || getHashtag(value).every((hashtag) => /^#/.test(hashtag)),
    'Хэштэг должен начинаться с решетки'
  ]
];

const getValidator = (formElement) => {
  const pristine = new Pristine(
    formElement,
    {
      classTo: 'img-upload__field-wrapper',
      errorClass: 'img-upload__error',
      errorTextParent: 'img-upload__field-wrapper',
    },
    false
  );

  formElement.querySelectorAll('input, textarea').forEach((fieldElement) => {
    const onInput = () => pristine.validate(fieldElement);
    const onChange = (evt) => {
      evt.currentTarget.addEventListener('input', onInput);
      evt.currentTarget.removeEventListener('change', onChange);
      pristine.validate(fieldElement);
    };
    fieldElement.addEventListener('change', onChange);

    if (fieldElement.className.includes('hashtags')) {
      HASHTAG_VALIDATOR_DATA.forEach(([validate, message], i) => {
        pristine.addValidator(fieldElement, validate, message, VALIDATOR_PRIORITY + i, true);
      });
    }
  });
  return pristine;
};

export { getValidator };
