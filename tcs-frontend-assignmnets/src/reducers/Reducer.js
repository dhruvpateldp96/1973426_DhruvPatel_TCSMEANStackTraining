import {
  FILTER,
  FETCH_ITEMS,
  SORT,
  LOADING,
  ADD_TO_CART
} from '../actions/types';

const initialState = {
  // text: '',
  items: [],
  storedItems: [],
  loading: true,
  // movie: []
  cart: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    // case SEARCH_MOVIE:
    //   return {
    //     ...state,
    //     text: action.payload,
    //     loading: false
    //   };
    case FETCH_ITEMS:
      return {
        ...state,
        items: action.payload,
        storedItems: action.payload,
        loading: false
      };

    case SORT:
      if (Object.getOwnPropertyNames(state).length > 0) {
        const key = action.key;

        const products = state.items.products.map(product => {
          return Object.assign({}, product);
        });

        let sortedProducts;
        sortedProducts = products.sort(
          (a, b) =>
            key === "high"
              ? b["price"] - a["price"]
              : a["price"] - b["price"]
        );
       
        return {
          ...state,
          items: Object.assign({}, state, { products: sortedProducts })
        }
      };

    case FILTER:
      if (Object.getOwnPropertyNames(state).length > 0) {
        const key = action.key;

        //creating a new array
        const products = state.storedItems.products.map(product => {
          return Object.assign({}, product);
        });

        let filteredProducts;
        filteredProducts = products.filter(
          (product) => product.availableSizes.includes(key)
        );
        
        return {
          ...state,
          items: Object.assign({}, state, { products: filteredProducts })
        }
      };
    
    case ADD_TO_CART:
    if (Object.getOwnPropertyNames(state).length > 0) {
      const productSKU = action.productSKU;

      // creating a new array
      const products = state.items.products.map(product => {
        return Object.assign({}, product);
      });

      console.log(productSKU)
      let clickedProducts;
      clickedProducts = products.filter(
        (product) => product.sku == productSKU
      );
      
      // console.log(clickedProducts)
      return {
        ...state,
        cart: [...state.cart, clickedProducts]
      }
    };

    case LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
