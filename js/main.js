import { drawThumbnails } from './thumbnail.js';
import { setUploadSubmit } from './open-form.js';
import { getData, sendData } from './api.js';
import { showAlert } from './util.js';
import { init } from './photo-order.js';
import './upload-users-photos.js';

setUploadSubmit(sendData);

getData()
  .then((data) => init(data, drawThumbnails))
  .catch(showAlert);
