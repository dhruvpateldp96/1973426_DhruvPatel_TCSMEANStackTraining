import { FETCH_ITEMS, LOADING, SORT, FILTER, ADD_TO_CART } from './types';
import axios from 'axios';

// import { APIKey } from '../APIKey';

export const fetchItems = () => {
  return (dispatch) => {
    return axios
      .get(`https://raw.githubusercontent.com/basir/ecommerce-shopping-cart/master/public/db.json`)
      .then(res => 
        dispatch({
          type: FETCH_ITEMS,
          payload: res.data
        })
        )
      .catch(err => console.log(err));
  }
}

export const sortBy = (key) => {
  return {
    type: SORT,
    key: key
  };
};


export const filterBy = (key) => {
  return {
    type: FILTER,
    key: key
  };
};

export const addToCart = (productSKU) => {
  return {
    type: ADD_TO_CART,
    productSKU: productSKU
  };
}
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
