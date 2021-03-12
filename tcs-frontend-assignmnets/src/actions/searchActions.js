import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from './types';
import axios from 'axios';

// import { APIKey } from '../../../movies-series-info/src/APIKey';

// const dispatch = useDispatch()

// export const searchMovie = (text) => {
//   return {
//     type: SEARCH_MOVIE,
//     payload: text
//   };
// };

// export const fetchMovies = (text) => {
//   return (dispatch) => {
//   return axios
//     .get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
//     .then(response =>
//       dispatch({
//         type: FETCH_MOVIES,
//         payload: response.data
//       })
//     )
//     .catch(err => console.log(err));
//   };
// };

// export const fetchMovie = (id) => {
//   return (dispatch) => {
//     return axios
//     .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
//     .then(response =>
//       dispatch({
//         type: FETCH_MOVIE,
//         payload: response.data
//       })
//     )
//     .catch(err => console.log(err));
//     };
// };

export const setLoading = () => {
  return {
    type: LOADING
  };
};
