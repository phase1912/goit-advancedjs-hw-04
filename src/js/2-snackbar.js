// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.getElementById('promiseCreateForm');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const delay = formData.get('delay');
  const state = formData.get('state');

  createDelayedPromise(delay, state)
    .then(result => {
      iziToast.success({
        title: '✅ Success',
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(error => {
      iziToast.error({
        title: '❌ Error',
        message: `Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
});

function createDelayedPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`Resolved after ${delay}ms`);
      } else {
        reject(`Rejected after ${delay}ms`);
      }
    }, delay);
  });
}
