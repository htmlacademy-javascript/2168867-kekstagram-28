import { MAX_HASHTAG_SYMBOL_LENGTH, MAX_HASHTAG_COUNT } from './constants.js';

const getHashtag = (value) => value.trim().toLowerCase().split(' ');
//здесь пишем условия валидации
const getValidator = (formElement) => {
  const pristine = new Pristine(
    formElement,
    {
      classTo: 'img-upload__field-wrapper',
      errorClass: 'img-upload__error',
      successClass: 'img-upload__text--valid',
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
      pristine.addValidator(
        fieldElement,
        (value) => !value || getHashtag(value).every((hashtag) => /^#/.test(hashtag)),
        'Хэштэг должен начинаться с решетки'
      );
      pristine.addValidator(
        fieldElement,
        (value) => !value || getHashtag(value).every((hashtag) => /[a-zа-яё0-9]{1,19}$/.test(hashtag)),
        'Хэштэг не может содержать спецсимволы и должен содержать минимум одну букву и цифру'
      );
      pristine.addValidator(
        fieldElement,
        (value) => !value || getHashtag(value).every((hashtag) => hashtag.length <= MAX_HASHTAG_SYMBOL_LENGTH),
        'Максимальная длина хэштэга 20 символов'
      );
      pristine.addValidator(
        fieldElement,
        (value) =>
          getHashtag(value).length <= MAX_HASHTAG_COUNT,
        'Превышено общее число хэштэгов'
      );
      pristine.addValidator(
        fieldElement,
        (value) => {
          const hashtags = getHashtag(value);
          return hashtags.length === new Set(hashtags).size;
        },
        'Присутствует повторяющйся хэштэг'
      );
    }
  });
  return pristine;
};

export { getValidator };
