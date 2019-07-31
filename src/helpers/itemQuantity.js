export function itemQuantity(items = [], id, opreation) {
  const targetedItem = items.filter(item => item.id === id)[0];
  if (opreation === 'increase') {
    targetedItem.quantity = targetedItem.quantity + 1;
  } else if (opreation === 'decrease') {
    if (targetedItem.quantity > 0) {
      targetedItem.quantity = targetedItem.quantity - 1;
    }
  }
  return items.map(item => {
    if (item.id === id) return targetedItem;
    return item;
  });
}
