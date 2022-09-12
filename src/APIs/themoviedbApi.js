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
    // console.log(response);
    // console.log(JSON.parse(response));
    return response.data.results;
    // return response.data;
  } catch (error) {
    console.error(error);
  }
}
