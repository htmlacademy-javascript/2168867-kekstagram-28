import { isEscapeKey } from './util.js';


const fullSizeElement = document.querySelector('.big-picture');
const modalCloseElement = fullSizeElement.querySelector('.cancel');
const commentListElement = fullSizeElement.querySelector('.social__comments');
const commentTemplate = fullSizeElement.querySelector('.social__comment');

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
};


export { openFullSizePicture };
