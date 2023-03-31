import { isEscapeKey } from './util.js';
import { COMMENT_IN_BLOCK } from './constants.js';

const fullSizeElement = document.querySelector('.big-picture');
const modalCloseElement = fullSizeElement.querySelector('.cancel');
const commentListElement = fullSizeElement.querySelector('.social__comments');
const commentCountElement = fullSizeElement.querySelector('.social__comment-count');
const commentTemplate = fullSizeElement.querySelector('.social__comment');
const commentsLoaderElement = document.querySelector('.social__comments-loader');

let commentsShown = 0;
let currentsComments = [];

const onDocumentEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

const renderPhoto = (photo) => {
  fullSizeElement.querySelector('.big-picture__img img').src = photo.url;
  fullSizeElement.querySelector('.likes-count').textContent = photo.likes;
  fullSizeElement.querySelector('.social__caption').textContent = photo.description;

  return fullSizeElement;
};

const renderComments = () => {
  const limit = commentsShown + COMMENT_IN_BLOCK;

  if (currentsComments.length <= limit) {
    commentsLoaderElement.classList.add('hidden');
  } else {
    commentsLoaderElement.classList.remove('hidden');
  }

  commentCountElement.innerHTML = `${Math.min(currentsComments.length, limit)} из ${currentsComments.length} комментариев`;

  currentsComments.slice(commentsShown, limit).forEach((comment) => {
    const newCommentElement = commentTemplate.cloneNode(true);
    newCommentElement.querySelector('.social__picture').src = comment.avatar;
    newCommentElement.querySelector('.social__picture').alt = comment.names;
    newCommentElement.querySelector('.social__text').textContent = comment.messages;

    commentListElement.append(newCommentElement);
  });
};

function closeUserModal() {
  fullSizeElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

modalCloseElement.addEventListener('click', () => closeUserModal());
document.addEventListener('keydown', onDocumentEscapeKeydown);

commentsLoaderElement.addEventListener('click', () => {
  commentsShown += COMMENT_IN_BLOCK;
  renderComments();
});

const openFullSizePicture = (photo) => {
  fullSizeElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  renderPhoto(photo);
  commentListElement.innerHTML = '';
  commentsShown = 0;
  currentsComments = photo.comments;
  renderComments();
};

export { openFullSizePicture };
