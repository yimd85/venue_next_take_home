import axios from "axios";
import {
  FETCH_ITEMS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_ALL_FROM_CART
} from "./types";

export const fetchItem = () => {
  return dispatch => {
    axios
      .get(
        "https://spreadsheets.google.com/feeds/list/1nOp0Ew1mXplxpVuYd65PJieUrKqbPPCHHD1JZ9F-5yQ/1/public/values?alt=json"
      )
      .then(response => {
        dispatch({
          type: FETCH_ITEMS,
          payload: response.data.feed.entry
        });
      });
  };
};

export const addToCart = data => {
  return {
    type: ADD_TO_CART,
    payload: data
  };
};

export const removeFromCart = data => {
  return {
    type: REMOVE_FROM_CART,
    payload: data
  };
};

export const removeAllFromCart = () => {
  return {
    type: REMOVE_ALL_FROM_CART
  };
};
