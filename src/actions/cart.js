export const SET_CART_ITEMS_REQUESTED = 'SET_CART_ITEMS_REQUESTED';
export const SET_CART_ITEMS_FAILED = 'SET_CART_ITEMS_FAILED';
export const SET_CART_ITEMS_SUCCEEDED = 'SET_CART_ITEMS_SUCCEEDED';
export const GET_CART_ITEMS = 'GET_CART_ITEMS';
export const SHIPPING_FETCHING = 'SHIPPING_FETCHING';
export const SHIPPING_FETCHED = 'SHIPPING_FETCHED';
export const SET_SHIPPING = 'SET_SHIPPING';
export const CHECKOUT_AVAILABILITY = 'CHECKOUT_AVAILABILITY';
export const SET_TAX_RATE = 'SET_TAX_RATE';

export const setCartItemsRequested = () => ({ type: SET_CART_ITEMS_REQUESTED });
export const setCartItemsFailed = () => ({ type: SET_CART_ITEMS_FAILED });
export const setCartItemsSucceeded = items => ({
  type: SET_CART_ITEMS_SUCCEEDED,
  items
});
export const getCartItems = items => ({ type: GET_CART_ITEMS, items });

export const setShipping = shippingCost => ({
  type: SET_SHIPPING,
  shippingCost
});
export const setTaxRate = taxRate => ({ type: SET_TAX_RATE, taxRate });
export const setCheckoutAvailability = isAvailable => ({
  type: CHECKOUT_AVAILABILITY,
  isAvailable
});
