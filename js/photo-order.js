import { RANDOM_PICTURE_COUNT, SORT_NUMBER, RENDER_DELAY } from './constants.js';
import { drawThumbnails } from './thumbnail.js';
import { debounce } from './util.js';

const Filters = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

const photoFiltersFormElement = document.querySelector('.img-filters__form');
const sortButtonElement = photoFiltersFormElement.querySelectorAll('.img-filters__button');
const photoFiltersElement = document.querySelector('.img-filters');

let descriptionSorted = [];
let currentFilter = Filters.DEFAULT;

const getrandomSort = () => Math.random() - SORT_NUMBER;

const getdiscussedSort = (a, b) => b.comments.length - a.comments.length;

const getFilteredPhoto = () => {
  switch (currentFilter) {
    case Filters.RANDOM:
      return [...descriptionSorted].sort(getrandomSort).slice(0, RANDOM_PICTURE_COUNT);
    case Filters.DISCUSSED:
      return [...descriptionSorted].sort(getdiscussedSort);
    default:
      return [...descriptionSorted];
  }
};

const init = (loadedPictures) => {
  const debouncedCallback = debounce(drawThumbnails, RENDER_DELAY);
  photoFiltersElement.classList.remove('img-filters--inactive');
  descriptionSorted = [...loadedPictures];

  photoFiltersFormElement.addEventListener('click', (evt) => {
    if (evt.target.matches('.img-filters__button')) {
      sortButtonElement.forEach((item) => item.classList.remove('img-filters__button--active'));
      evt.target.classList.add('img-filters__button--active');
      currentFilter = evt.target.id;
      debouncedCallback(getFilteredPhoto());
    }
  });
  debouncedCallback(getFilteredPhoto());
};

export { getFilteredPhoto, init };
