import axios from 'axios';
export { fetchImages };

const axios = require('axios').default;
const BASE_URL = 'https://pixabay.com/api/';
const KEY = '29175457-ea8e2c93dbfac842acac0bec2';

async function fetchImages(query, page, perPage) {
  const response = await axios.get(
    `${BASE_URL}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response;
}
