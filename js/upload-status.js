import { onUploadKeydown } from './open-form.js';
import { isEscapeKey } from './util.js';

const createStatus = (status) => {
  const element = document.querySelector(`#${status}`).content.querySelector(`.${status}`);
  const buttonElement = element.querySelector(`.${status}__button`);

  const close = () => {
    document.removeEventListener('keydown', onKeydown);
    if (status === 'error') {
      document.addEventListener('keydown', onUploadKeydown);
    } else {
      document.body.classList.remove('modal-open');
    }
    element.remove();
  };

  function onKeydown(evt) {
    if (isEscapeKey(evt)) {
      close();
    }
  }

  element.addEventListener('click', (evt) => {
    if (evt.target === element || evt.target === buttonElement) {
      close();
    }
  });

  return {
    open: () => {
      document.body.classList.add('modal-open');
      document.addEventListener('keydown', onKeydown);
      document.removeEventListener('keydown', onUploadKeydown);
      document.body.append(element);
    }
  };
};

const succesStatus = createStatus('success');
const errorStatus = createStatus('error');

const showUploadSuccess = succesStatus.open;
const showUploadError = errorStatus.open;

export { showUploadSuccess, showUploadError };

