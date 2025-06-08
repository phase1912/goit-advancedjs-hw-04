import { fetchImages } from './js/pixabay-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { refresh } from './js/render-functions.js';

let pageNumber = 1;
let savedQuery = '';
const perPage = 15;

document
  .querySelector('.form')
  .addEventListener('submit', async function (event) {
    event.preventDefault();

    pageNumber = 1;

    await handleEvents();
  });

document
  .querySelector('.load-more-btn')
  .addEventListener('click', async function (event) {
    event.preventDefault();

    pageNumber++;

    await handleEvents(true);
  });

async function handleEvents(isAppend = false) {
  const searchInput = document.querySelector('.search-input');
  const query = document.querySelector('.search-input').value.trim();
  const loader = document.querySelector('.loader');
  const loadMoreBtn = document.querySelector('.load-more-btn');

  console.log('Search submitted for:', query);

  const isQueryValid = isAppend ? savedQuery !== '' : query !== '';

  try {
    if (isQueryValid) {
      const gallery = document.querySelector('.gallery');

      if (query) {
        savedQuery = query;
      }

      if (!isAppend) {
        gallery.style.display = 'none';
      }

      loader.classList.add('active');
      loadMoreBtn.classList.remove('active');

      const data = await fetchImages(
        isAppend ? savedQuery : query,
        isAppend ? pageNumber : 1
      );

      if (data.total === 0) {
        iziToast.error({
          title: '❌ Error',
          message: `Nothing found for "${query}"`,
          position: 'topRight',
        });

        gallery.innerHTML = '';

        return;
      }

      if (data.hits.length === 0) {
        iziToast.error({
          title: '❌ Error',
          message: `We're sorry, but you've reached the end of search results.`,
          position: 'topRight',
        });

        return;
      }

      refresh(gallery, data, !isAppend);

      gallery.style.display = 'flex';

      if (!isAppend) {
        searchInput.value = '';
      }

      if (data.totalHits > perPage) {
        loadMoreBtn.classList.add('active');
      }

      // const currentItemCount = pageNumber * perPage; // this fix I like more, but regarding requirements load button need to be shown after last fetch with contend
      // if (currentItemCount < data.totalHits) {
      //   loadMoreBtn.classList.add('active');
      // } else {
      //   loadMoreBtn.classList.remove('active');
      // }

      if (isAppend && data.hits.length > 0) {
        const firstItem = gallery.querySelector('.gallery-item');
        if (firstItem) {
          const itemHeight = firstItem.getBoundingClientRect().height;
          window.scrollBy({
            top: itemHeight * 2,
            behavior: 'smooth',
          });
        }
      }
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
}
