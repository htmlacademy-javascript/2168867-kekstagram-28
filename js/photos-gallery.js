import { openFullSizePicture } from './full-size-photo.js';
import { drawThumbnails, createThumbnail } from './thumbnail.js';

const container = document.querySelector('.pictures');

const createPhotoGallery = () => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('.picture');
    if (!thumbnail) {
      return;
    }
    const picture = createThumbnail.find(
      (item) => item.id === Number(thumbnail.dataset.thumbnailId)
    );
    openFullSizePicture(picture);
  });
  drawThumbnails();
};

export { createPhotoGallery };
