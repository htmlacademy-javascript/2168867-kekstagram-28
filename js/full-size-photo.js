import { isEscapeKey } from './util.js';

const fullSizeElement = document.querySelector('.big-picture');
const commentsCounter = document.querySelector('.social__comment-count');
const newCommentElement = document.querySelector('.comments-loader');
const commentListElement = fullSizeElement.querySelector('.social__comments');
const commentTemplate = fullSizeElement.querySelector('.social__comment');
const modalElementClose = fullSizeElement.querySelector('.cancel');

const onDocumentEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

const getPhoto = (pictures) => {
  const thumbnailElement = pictures.target.closest('[data-thumbnailElement-id]');
  if (!thumbnailElement) {
    return;
  }
  const picture = pictures.find(
    (item) => item.id === Number(thumbnailElement.dataset.thumbnailElementId)
  );
  fullSizeElement(picture);
};

const renderComments = (comments) => {
  commentListElement.innerHTML = '';
  comments.forEach((comment) => {
    const newComment = commentTemplate.cloneNode(true);
    newComment.querySelector('.social__picture').src = comment.avatar;
    newComment.querySelector('.social__text').textContent = comment.message;
    commentListElement.append(newComment);
  });
};

function closeUserModal() {
  fullSizeElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.addEventListener('keydown', onDocumentEscapeKeydown);
}

modalElementClose.addEventListener('click', () => closeUserModal());

const openFullSizePicture = (data) => {
  fullSizeElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  commentsCounter.classList.add('hidden');
  newCommentElement.classList.add('hidden');
  document.addEventListener('keydown', onDocumentEscapeKeydown);
  getPhoto(data);
  renderComments(data.comments);
};


export { openFullSizePicture };
