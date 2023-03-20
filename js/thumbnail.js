import { openFullSizePicture } from './full-size-photo.js';

const thumbnailTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createThumbnailElement = ({ url, likes, comments }) => {
  const thumbnailElement = thumbnailTemplate.cloneNode(true);
  thumbnailElement.querySelector('.picture__img').src = url;
  thumbnailElement.querySelector('.picture__likes').textContent = likes;
  thumbnailElement.querySelector('.picture__comments').textContent = comments.length;
  thumbnailElement.addEventListener('click', () => openFullSizePicture());

  return thumbnailElement;
};

const drawThumbnails = (pictures) => {
  const element = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const thumbnailElement = createThumbnailElement(picture);
    element.append(thumbnailElement);
  });

  container.append(element);
};


export { drawThumbnails };
