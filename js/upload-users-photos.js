import { FILE_TYPES, ERROR_MESSAGE } from './constants.js';
import { photoPreviewElement } from './scale-photo.js';

const userPhotoChose = (photoDownloadElement) => {
  const file = photoDownloadElement.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    photoPreviewElement.src = URL.createObjectURL(file);
    return null;
  }

  return { message: ERROR_MESSAGE };
};

export { userPhotoChose };
