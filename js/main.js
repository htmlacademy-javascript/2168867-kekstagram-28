import { drawThumbnails } from './thumbnail.js';
import { setUploadSubmit } from './open-form.js';
import { getData, sendData } from './api.js';
import { showAlert, debounce } from './util.js';
import { RENDER_DELAY } from './constants.js';
import { init, getFilteredPhoto } from './photo-order.js';

/*drawThumbnails(createDataPhotos());*/ // убираем ручную генерацию данных, добавляем получение данных с сервера

setUploadSubmit(sendData);

/*getData().then(drawThumbnails).catch(showAlert);*/

try {
  const data = await getData();
  const debouncedDrawThumbnails = debounce(drawThumbnails, RENDER_DELAY);
  init(data, debouncedDrawThumbnails);
  drawThumbnails(getFilteredPhoto());
} catch (err) {
  showAlert(err.message);
}
