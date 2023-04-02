import { isEscapeKey, isFieldFocused, showAlert } from './util.js';
import { container } from './thumbnail.js';
import { getValidator } from './validator.js';
import { rebootScale } from './scale-photo.js';
import { rebootEffects } from './photo-effects.js';
/*import { showErrorMessage, showSuccessMessage } from './servises-messages.js';*/
import { uploadError, uploadSuccess } from './upload.js';

const photoDownloadElement = container.querySelector('#upload-file');
const openModalElement = container.querySelector('.img-upload__overlay');
const closeModalElement = container.querySelector('.img-upload__cancel');
const formElement = container.querySelector('.img-upload__form');
const pristine = getValidator(formElement);
const submitPostElement = container.querySelector('#upload-submit');

/*formElement.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});*/

const onModalKeydown = (evt) => {
  if (isEscapeKey(evt) && !isFieldFocused(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

//открываем модалку
const openUserModal = () => {
  openModalElement.classList.remove('hidden');
  container.classList.add('modal-open');
  document.addEventListener('keydown', onModalKeydown);
};

//закрываем модалку
function closeUserModal() {
  openModalElement.classList.add('hidden');
  container.classList.remove('modal-open');
  photoDownloadElement.value = '';
  rebootScale();
  rebootEffects();
  document.removeEventListener('keydown', onModalKeydown);
}

//навешиваем обработчики
photoDownloadElement.addEventListener('input', () => {
  openUserModal();
});
closeModalElement.addEventListener('click', () => {
  closeUserModal();
});

const submitPostText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую'
};

const blockSubmitButton = () => {
  submitPostElement.disabled = true;
  submitPostElement.textContent = submitPostText.SENDING;
};

const unblockSubmitButton = () => {
  submitPostElement.disabled = false;
  submitPostElement.textContent = submitPostText.IDLE;
};

const setUploadSubmit = (callback) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      callback(new FormData(evt.target))
        .then(() => {
          closeUserModal();
          /*showSuccessMessage();*/
          uploadSuccess();
        })
        .catch((err) => {
          /*showErrorMessage();*/
          showAlert(err);
          uploadError();
        })
        .finally(unblockSubmitButton);
    }
  });
};

export { formElement, closeUserModal, setUploadSubmit };
