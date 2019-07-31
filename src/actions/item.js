export const ITEM_QUANTITY_FETCHING = 'ITEM_QUANTITY_FETCHING';
export const ITEM_QUANTITY_FETCHED = 'ITEM_QUANTITY_FETCHED';
export const INCREASE_ITEM_QUANTITY = 'INCREASE_ITEM_QUANTITY';
export const DECREASE_ITEM_QUANTITY = 'DECREASE_ITEM_QUANTITY';

export const increaseItemQuantity = id => ({
  type: INCREASE_ITEM_QUANTITY,
  id
});
export const decreaseItemQuantity = id => ({
  type: DECREASE_ITEM_QUANTITY,
  id
});

export const setItemBusy = id => ({ type: ITEM_QUANTITY_FETCHING, id });
export const setItemFree = () => ({ type: ITEM_QUANTITY_FETCHED });
