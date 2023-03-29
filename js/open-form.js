import { isEscapeKey, isFieldFocused } from './util.js';
import { container } from './thumbnail.js';
import { getValidator } from './validator.js';

const photoDownloadElement = container.querySelector('#upload-file');
const openModalElement = container.querySelector('.img-upload__overlay');
const closeModalElement = container.querySelector('.img-upload__cancel');
const formElement = container.querySelector('.img-upload__form');
const pristine = getValidator(formElement);

formElement.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

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

  document.removeEventListener('keydown', onModalKeydown);
}

//навешиваем обработчики
photoDownloadElement.addEventListener('input', () => {
  openUserModal();
});
closeModalElement.addEventListener('click', () => {
  closeUserModal();
});

export { formElement };
