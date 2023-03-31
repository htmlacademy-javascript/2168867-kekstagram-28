/*import { createDataPhotos } from './data.js';*/ //убираем ручную генерацию данных, добавляем получение данных с сервера
/*import { drawThumbnails } from './thumbnail.js';*/ //убираем ручную генерацию данных, добавляем получение данных с сервера
import { createThumbnailElement } from './thumbnail.js';
import { closeUserModal, onFormSubmit } from'./open-form.js';
import { getData, sendData} from './api.js';
import { showAlert } from './util.js';
import { showErrorMessage, showSuccessMessage } from './servises-messages.js';

/*drawThumbnails(createDataPhotos());*/ // убираем ручную генерацию данных, добавляем получение данных с сервера

onFormSubmit(async (data) => {
  try {
    await sendData(data);
    closeUserModal();
    showSuccessMessage();
  }catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  createThumbnailElement(data);
} catch(err) {
  showAlert(err.message);
}
