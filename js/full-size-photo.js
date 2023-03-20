import { isEscapeKey } from './util.js';

const fullSizeElement = document.querySelector('.big-picture');
const commentList = fullSizeElement.querySelector('.social__comments');
const commentListElement = fullSizeElement.querySelector('.social__comment');

const generateComments = (comments) => {
  commentList.innerHTML = '';
  comments.forEach((comment) => {
    const newComment = commentListElement.cloneNode(true);
    newComment.querySelector('.social__picture').src = comment.avatar;
    newComment.querySelector('.social__text').textContent = comment.message;
    commentList.append(newComment);
  });
};

const generatePhotoComments = ({ url, description, likes, comments }) => {
  fullSizeElement.querySelector('.big-picture__img').querySelector('img').src = url;
  fullSizeElement.querySelector('.social__caption').textContent = description;
  fullSizeElement.querySelector('.likes-count').textContent = likes;
  fullSizeElement.querySelector('.comments-count').textContent = comments.length;
};

const modalElementClose = fullSizeElement.querySelector('.cancel');

const body = document.querySelector('body');
const commentsCounter = document.querySelector('.social__comment-count');
const loadNewComments = document.querySelector('.comments-loader');

const onDocumentEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function closeUserModal() {
  fullSizeElement.classList.add('hidden');
  body.classList.remove('modal-open');
}

modalElementClose.addEventListener('click', () => closeUserModal());

const openFullSizePicture = (data) => {
  fullSizeElement.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsCounter.classList.add('hidden');
  loadNewComments.classList.add('hidden');
  document.addEventListener('keydown', onDocumentEscapeKeydown);
  generatePhotoComments(data);
  generateComments(data.comments);
};

export { openFullSizePicture };
