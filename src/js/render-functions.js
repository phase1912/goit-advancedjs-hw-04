import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function refresh(gallery, images, cleanText) {
  if (cleanText) {
    gallery.innerHTML = '';
  }

  gallery.innerHTML += images.hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags.length > 0 ? tags.split(',').slice(0, 3).join(', ') : 'no name'}"
            />

             <ul class="caption-overlay">
                <li class="caption-overlay-item">
                    <strong>Likes:</strong>
                    <span>${likes}</span>
                </li>
                <li class="caption-overlay-item">
                    <strong>Views:</strong>
                     <span>${views}</span>
                </li>
                <li class="caption-overlay-item">
                    <strong>Comments:</strong>
                    <span>${comments}</span>
                </li>
                <li class="caption-overlay-item">
                    <strong>Downloads:</strong>
                    <span>${downloads}</span>
                </li>
            </ul>
          </a>
        </li>
      `
    )
    .join('');

  const simpleLightboxInstance = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
}
