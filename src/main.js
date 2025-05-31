import { fetchImages } from './js/pixabay-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { refresh } from './js/render-functions.js';

document
  .querySelector('.search-form')
  .addEventListener('submit', async function (event) {
    event.preventDefault();
    const query = document.querySelector('.search-input').value.trim();
    const loader = document.querySelector('.loader');

    document.querySelector('.search-input').value = '';
    console.log('Search submitted for:', query);

    try {
      if (query) {
        const gallery = document.querySelector('.gallery');

        gallery.style.display = 'none';

        loader.classList.add('active');

        const data = await fetchImages(query);

        if (data.total === 0) {
          iziToast.error({
            title: '❌ Error',
            message: `Nothing found for "${query}"`,
            position: 'topRight',
          });

          gallery.innerHTML = '';

          return;
        }

        refresh(gallery, data);

        gallery.style.display = 'flex';
      } else {
        iziToast.error({
          title: '❌ Error',
          message: `Empty query`,
          position: 'topRight',
        });
      }
    } catch (error) {
      iziToast.error({
        title: '❌ Error',
        message: `${error?.message ?? 'something went wrong'}`,
        position: 'topRight',
      });
    } finally {
      loader.classList.remove('active');
    }
  });
