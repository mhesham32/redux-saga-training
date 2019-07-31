import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import Item from './Item';

const CartItems = ({ userItems, loading, error }) => {
  if (error) return <h3>Error...</h3>;
  return (
    <Fragment>
      <h2>Your Cart</h2>
      {userItems
        ? userItems.map((item, i) =>
            loading ? (
              <div key={`spinner-${i}`} className="ite">
                <Spinner animation="border" />
              </div>
            ) : (
              <Item key={`item#${i + 1}`} {...item} />
            )
          )
        : 'Please Wait..'}
    </Fragment>
  );
};

const mapStateToProps = state => {
  const { userItems, loading, error } = state.cart;
  return { userItems, loading, error };
};

export default connect(mapStateToProps)(CartItems);
