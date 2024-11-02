// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { photos } from './js/pixabay-api';
import { markup } from './js/render-functions';
let page = 1;
const searchForm = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

loader.style.display = 'none';
searchForm.addEventListener('submit', feedbackForm);

function feedbackForm(event) {
  event.preventDefault();
  loader.style.display = 'block';
  gallery.innerHTML = '';

  const inputElement = event.target.elements.input;

  const searchBtn = inputElement ? inputElement.value.trim() : '';

  if (searchBtn.length === 0) {
    loader.style.display = 'none';
    return iziToast.error({
      title: 'Error',
      backgroundColor: 'tomato',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      messageColor: 'white',
      messageSize: '20',
      position: 'bottomRight',
      close: true,
      displayMode: 2,
    });
  }
  photos(searchBtn, page)
    .then(images => {
      if (images.hits.length === 0) {
        gallery.innerHTML = '';
        return iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'bottomRight',
        });
      }
      gallery.insertAdjacentHTML('beforeend', markup(images.hits));
      lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      loader.style.display = 'none';
    });
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
