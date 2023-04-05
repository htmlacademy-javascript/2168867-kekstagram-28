import { FILE_TYPES } from './constants.js';
import { photoDownloadElement } from './open-form.js';
import { photoPreviewElement } from './scale-photo.js';

photoDownloadElement.addEventListener('change', () => {
  const file = photoDownloadElement.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    photoPreviewElement.src = URL.createObjectURL(file);
  }
});
