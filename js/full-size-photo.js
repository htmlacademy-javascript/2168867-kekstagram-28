import { isEscapeKey } from './util.js';
import { COMMENT_IN_BLOCK } from './constants.js';

const fullSizeElement = document.querySelector('.big-picture');
const modalCloseElement = fullSizeElement.querySelector('.cancel');
const commentListElement = fullSizeElement.querySelector('.social__comments');
const commentCount = fullSizeElement.querySelector('.social__comment-count');
const commentTemplate = fullSizeElement.querySelector('.social__comment');
const commentsLoader = document.querySelector('.social__comments-loader');

let commentsShown = 0;

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

// генерирую весь массис комментариев с аватарками именем комментатора и текстом
const renderComments = (comments) => {
  commentListElement.innerHTML = '';
  comments.forEach((comment) => {
    const newCommentElement = commentTemplate.cloneNode(true);
    newCommentElement.querySelector('.social__picture').src = comment.avatar;
    newCommentElement.querySelector('.social__picture').alt = comment.names;
    newCommentElement.querySelector('.social__text').textContent = comment.messages;

    commentListElement.append(newCommentElement);
  });
};

// генерирую по 5 комментов через кнопку загрузить еще
const createButtonCommentLoads = (comments) => {
  commentsShown += COMMENT_IN_BLOCK;

  if (commentsShown >= comments.length) {
    commentsLoader.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShown; i++) {
    const commentElement = renderComments(comments[i]);
    fragment.append(commentElement);
  }

  commentsShown.innerHTML = '';
  commentsShown.append(fragment);
  commentCount.innerHTML = `${commentsShown} из (COMMENT_COUNT)`;
};

function closeUserModal() {
  fullSizeElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

modalCloseElement.addEventListener('click', () => closeUserModal());
document.addEventListener('keydown', onDocumentEscapeKeydown);

const openFullSizePicture = (photo) => {
  fullSizeElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  renderPhoto(photo);
  renderComments(photo.comments);
  createButtonCommentLoads(); //вызывааю функцию генерации по 5 комментов
};

export { openFullSizePicture };
