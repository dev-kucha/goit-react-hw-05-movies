import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const MEDIA_TYPE = 'movie';
const TIME_WINDOW = 'day';
const API_KEY = '70cddabccebaf467901819a0b3b6e799';

export async function getTrendingToday() {
  try {
    const response = await axios.get(
      `/trending/${MEDIA_TYPE}/${TIME_WINDOW}?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovie(id) {
  try {
    const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getCredits(id) {
  try {
    const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getReviews(id) {
  try {
    const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovies(query) {
  try {
    const response = await axios.get(
      `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
