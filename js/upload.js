import { onModalKeydown } from './open-form.js';
import { isEscapeKey } from './util.js';

const successMessageTemplate = document.querySelector('#success').content;
const errorMessageTemplate = document.querySelector('#error').content;
const successMessageElement = successMessageTemplate.cloneNode(true);
const errorMessageElement = errorMessageTemplate.cloneNode(true);

const onClickCloseModal = (evt) => {
  if (evt.target.matches('.success')) {
    document.querySelector('.success').remove();
  } else if (evt.target.matches('.error')) {
    document.querySelector('.error').remove();
  }
};

const closeSuccessMessage = () => {
  document.querySelector('.success').remove();
};

const uploadSuccess = () => {
  document.body.append(successMessageElement);
  const successButton = document.querySelector('.success__button');
  const successModal = document.querySelector('.success');
  successButton.addEventListener('click', closeSuccessMessage);
  successModal.addEventListener('click', onClickCloseModal);
  document.removeEventListener('keydown', onModalKeydown);
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      document.querySelector('.success').remove();
      document.addEventListener('keydown', onModalKeydown);
    }
  });
};

const closeErrorMessage = () => {
  document.querySelector('.error').remove();
};

const uploadError = () => {
  document.body.append(errorMessageElement);
  const errorButton = document.querySelector('.error__button');
  const errorModal = document.querySelector('.error');
  errorButton.addEventListener('click', closeErrorMessage);
  errorModal.addEventListener('click', onClickCloseModal);
  document.removeEventListener('keydown', onModalKeydown);
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      document.querySelector('.error').remove();
      document.addEventListener('keydown', onModalKeydown);
    }
  });
};


export { uploadSuccess, uploadError };
