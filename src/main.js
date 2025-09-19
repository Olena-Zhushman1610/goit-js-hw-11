import { getImagesByQuery } from './js/pixabay-api.js';

import {
  renderGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('.form');
const galleryContainer = document.querySelector('.gallery');

searchForm.addEventListener('submit', async event => {
  event.preventDefault();
  console.log(event.target.elements.search.value);

  const query = event.target.elements.search.value.trim();
  if (!query) return;

  try {
    showLoader(); // показуємо лоадер
    clearGallery(); // очищаємо галерею перед новим пошуком

    const data = await getImagesByQuery(query);
    // Очищуємо галерею перед новим пошуком
    //galleryContainer.innerHTML = '';

    if (data.hits.length === 0) {
      iziToast.show({
        title: '❌',
        color: 'red',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }
    renderGallery(data.hits);
    //searchForm.reset(); //очищаємо форму після відправки
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong while fetching images 😢',
      position: 'topRight',
    });
  } finally {
    hideLoader(); // ховаємо лоадер після завершення
    searchForm.reset(); //очищаємо форму після відправки
  }
});
