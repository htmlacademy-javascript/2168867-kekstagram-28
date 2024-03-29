import { isEscapeKey, isFieldFocused, showAlert } from './util.js';
import { container } from './thumbnail.js';
import { getValidator } from './validator.js';
import { rebootScale } from './scale-photo.js';
import { rebootEffects } from './photo-effects.js';
import { showUploadSuccess, showUploadError } from './upload-status.js';
import { userPhotoChose } from './upload-users-photos.js';

const SubmitPostText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую'
};

const photoDownloadElement = container.querySelector('#upload-file');
const openModalElement = container.querySelector('.img-upload__overlay');
const closeModalElement = container.querySelector('.img-upload__cancel');
const formElement = container.querySelector('.img-upload__form');
const pristine = getValidator(formElement);
const submitPostElement = container.querySelector('#upload-submit');

const onUploadKeydown = (evt) => {
  if (isEscapeKey(evt) && !isFieldFocused(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

//открываем модалку
const openUserModal = () => {
  openModalElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onUploadKeydown);
};

//закрываем модалку
function closeUserModal() {
  openModalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  photoDownloadElement.value = '';
  rebootScale();
  rebootEffects();
  document.removeEventListener('keydown', onUploadKeydown);
}

//навешиваем обработчики
photoDownloadElement.addEventListener('input', () => {

  const error = userPhotoChose(photoDownloadElement);

  if (error) {
    showAlert(error);
  } else {
    openUserModal();
  }
  photoDownloadElement.blur();
});

closeModalElement.addEventListener('click', () => {
  closeUserModal();
});

const toggleSubmitButton = (disabled) => {
  submitPostElement.disabled = disabled;
  submitPostElement.textContent = disabled ? SubmitPostText.SENDING : SubmitPostText.IDLE;
};

const setUploadSubmit = (callback) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      toggleSubmitButton();
      callback(new FormData(evt.target))
        .then(() => {
          closeUserModal();
          showUploadSuccess();
        })
        .catch((err) => {
          showAlert(err);
          showUploadError();
        })
        .finally(() => toggleSubmitButton(false));
    }
  });
};

export { formElement, closeUserModal, setUploadSubmit, onUploadKeydown, photoDownloadElement };

