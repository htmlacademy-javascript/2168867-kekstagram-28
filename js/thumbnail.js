import { openFullSizePicture } from './full-size-photo.js';

const thumbnailTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createThumbnailElement = (photo) => {
  const thumbnailElement = thumbnailTemplate.cloneNode(true);
  thumbnailElement.querySelector('.picture__img').src = photo.url;
  thumbnailElement.querySelector('.picture__likes').textContent = photo.likes;
  thumbnailElement.querySelector('.picture__comments').textContent = photo.comments.length;

  thumbnailElement.addEventListener('click', () => openFullSizePicture(photo));

  return thumbnailElement;
};

const drawThumbnails = (pictures) => {
  const pictureElement = document.createDocumentFragment();

  container.querySelectorAll('.picture').forEach((element) => element.remove());

  pictures.forEach((picture) => {
    const thumbnailElement = createThumbnailElement(picture);
    pictureElement.append(thumbnailElement);
  });

  container.append(pictureElement);
};

export { drawThumbnails, container };
