import TMDB from './Tmdp'
const search = (text = '', year = null) => {
    return TMDB.get(`/3/search/movie?api_key=32ce1364a5dbb3e2ec81dba08a7f228f&language=en-US&query=${text}&year=${year}`);
  };
  export default {
    search
      };