import {
  FETCH_ITEMS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_ALL_FROM_CART
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        list: action.payload,
        cart: []
      };

    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((value, i) => i !== action.payload)
      };

    case REMOVE_ALL_FROM_CART:
      return {
        ...state,
        cart: []
      };

    default:
      return state;
  }
};
