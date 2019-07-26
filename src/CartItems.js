import React, { Fragment } from 'react';
import Item from './Item';

const CartItems = ({ items }) => {
  return (
    <Fragment>
      <h2>Your Cart</h2>
      {items.map((item, i) => (
        <Item key={`item#${i + 1}`} {...item} />
      ))}
    </Fragment>
  );
};

export default CartItems;
