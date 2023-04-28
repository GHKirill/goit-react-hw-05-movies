import ListTrendingFilms from '../ListTrendingFilms/ListTrendingFilms';
// import axios from 'axios';
// const KEY = '7fbdf6cf40f68e209048a77188ae45b3';
// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
export default function HomePage() {
  return <ListTrendingFilms />;
}
// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// const fetchGetMoviesListTrend = async () => {
//   const response = await axios.get(`trending/movie/day?api_key=${KEY}`);
//   const result = response.data.results;
//   console.log(result);

//}
//fetchGetMoviesListTrend();
