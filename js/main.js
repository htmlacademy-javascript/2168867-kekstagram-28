import { drawThumbnails } from './thumbnail.js';
import { onFormSubmit } from'./open-form.js';
import { getData, sendData} from './api.js';

/*drawThumbnails(createDataPhotos());*/ // убираем ручную генерацию данных, добавляем получение данных с сервера

onFormSubmit(sendData);

getData().then(drawThumbnails);
