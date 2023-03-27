import { isEscapeKey } from './util.js';
import { container } from './thumbnail.js';
import { openFullSizePicture } from './full-size-photo.js';

const downloadPhoto = container.querySelector('#upload-file');
const openModal = container.querySelector('.img-upload__overlay');
const closeModal = container.querySelector('.img-upload__cancel');
const userModalHashtags = openModal.querySelector('.text__hashtags');
const userModalComment = openModal.querySelector('.text__description');

const onModalKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    downloadPhoto.value = '';
    openModal.classList.add('hidden');
    openFullSizePicture.classList.remove('modal-open');
  }
};

//открываем модалку
const openUserModal = () => {
  openModal.classList.remove('hidden');
  container.classList.add('modal-open');

  openModal.addEventListener('focusin', () => document.removeEventListener('keydown', onModalKeydown));
  openModal.addEventListener('focusout', () => document.addEventListener('keydown', onModalKeydown));

  document.addEventListener('keydown', onModalKeydown);
};
//закрываем модалку
const closeUserModal = () => {
  openModal.classList.add('hidden');
  container.classList.remove('modal-open');
  downloadPhoto.value = '';

  document.removeEventListener('keydown', onModalKeydown);
};

//навешиваем обработчики
downloadPhoto.addEventListener('input', () => {
  openUserModal();
});
closeModal.addEventListener('click', () => {
  closeUserModal();
});

export { userModalHashtags, userModalComment };
