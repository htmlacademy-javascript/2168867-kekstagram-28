import { isEscapeKey, isFieldFocused } from './util.js';
import { container } from './thumbnail.js';

const photoDownloadElement = container.querySelector('#upload-file');
const openModalElement = container.querySelector('.img-upload__overlay');
const closeModalElement = container.querySelector('.img-upload__cancel');
const userModalHashtagsElement = openModalElement.querySelector('.text__hashtags');
const userModalCommentElement = openModalElement.querySelector('.text__description');

const onModalKeydown = (evt) => {
  if (isEscapeKey(evt) && !isFieldFocused(evt)) {
    evt.preventDefault();
    photoDownloadElement.value = '';
    openModalElement.classList.add('hidden');
    closeUserModal();
  }
};

//открываем модалку
const openUserModal = () => {
  openModalElement.classList.remove('hidden');
  container.classList.add('modal-open');

  openModalElement.addEventListener('focusout', () => document.addEventListener('keydown', onModalKeydown));

  document.addEventListener('keydown', onModalKeydown);
};

//закрываем модалку
function closeUserModal () {
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

export { userModalHashtagsElement, userModalCommentElement };
