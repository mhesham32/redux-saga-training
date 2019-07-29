import {
  GET_CART_ITEMS,
  SET_CART_ITEMS_FAILED,
  SET_CART_ITEMS_REQUESTED,
  SET_CART_ITEMS_SUCCEEDED
} from '../actions';

const INITIAL_STATE = {
  itemsCount: 0,
  items: [],
  loading: false,
  error: false
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
    default:
      return state;
  }
};
