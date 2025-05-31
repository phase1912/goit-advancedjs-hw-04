export async function fetchImages(query) {
  const API_KEY = '50612184-536cfb83b780c62ede1e3fae6';
  const BASE_URL = 'https://pixabay.com/api/';

  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Fetch failed:', error);
    throw error;
  }
}
