import { createDataPhotos } from './data.js';
import { drawThumbnails } from './thumbnail.js';
import './validator.js';
import './open-form.js';
import './scale-photo.js';
import './photo-effects.js';

drawThumbnails(createDataPhotos());
