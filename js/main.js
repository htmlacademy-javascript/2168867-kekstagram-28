import { createDataPhotos } from './data.js';
import { drawThumbnails } from './thumbnail.js';
import './validator.js';

drawThumbnails(createDataPhotos());
