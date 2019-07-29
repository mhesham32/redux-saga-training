export const SET_CART_ITEMS_REQUESTED = 'SET_CART_ITEMS_REQUESTED';
export const SET_CART_ITEMS_FAILED = 'SET_CART_ITEMS_FAILED';
export const SET_CART_ITEMS_SUCCEEDED = 'SET_CART_ITEMS_SUCCEEDED';
export const GET_CART_ITEMS = 'GET_CART_ITEMS';

export const setCartItemsRequested = () => ({ type: SET_CART_ITEMS_REQUESTED });
export const setCartItemsFailed = () => ({ type: SET_CART_ITEMS_FAILED });
export const setCartItemsSucceeded = items => ({
  type: SET_CART_ITEMS_SUCCEEDED,
  items
});
export const getCartItems = items => ({ type: GET_CART_ITEMS, items });
