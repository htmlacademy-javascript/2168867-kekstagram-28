import { createDataPhotos } from './data.js';
import { drawThumbnails } from './thumbnail.js';
import './validator.js';
import './open-form.js';

drawThumbnails(createDataPhotos());
