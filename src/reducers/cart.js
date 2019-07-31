import {
  GET_CART_ITEMS,
  SET_CART_ITEMS_FAILED,
  SET_CART_ITEMS_REQUESTED,
  SET_CART_ITEMS_SUCCEEDED,
  ITEM_QUANTITY_FETCHED,
  ITEM_QUANTITY_FETCHING,
  INCREASE_ITEM_QUANTITY,
  DECREASE_ITEM_QUANTITY
} from '../actions';

import { itemQuantity } from '../helpers/itemQuantity';

const INITIAL_STATE = {
  itemsCount: 0,
  items: [],
  userItems: [],
  loading: false,
  error: false,
  busyItem: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
        itemsCount: action.items.length,
        userItems: [...action.items]
      };
    case SET_CART_ITEMS_REQUESTED:
      return {
        ...state,
        loading: true
      };
    case SET_CART_ITEMS_SUCCEEDED:
      return {
        ...state,
        items: action.items,
        userItems: action.items.map(storeItem => {
          const userItem = state.userItems.filter(
            item => item.id === storeItem.id
          )[0];
          //override the storeItem with the userItem props
          return { ...storeItem, ...userItem };
        }),
        loading: false,
        error: false
      };
    case SET_CART_ITEMS_FAILED:
      return {
        ...state,
        error: true,
        loading: false
      };
    case ITEM_QUANTITY_FETCHING:
      return {
        ...state,
        busyItem: action.id
      };
    case ITEM_QUANTITY_FETCHED:
      return {
        ...state,
        busyItem: null
      };
    case INCREASE_ITEM_QUANTITY:
      return {
        ...state,
        userItems: itemQuantity(state.userItems, action.id, 'increase')
      };
    case DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        userItems: itemQuantity(state.userItems, action.id, 'decrease')
      };
    default:
      return state;
  }
};
