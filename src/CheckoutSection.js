import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import formatMoney from './helpers/formatMoney';
import { checkout } from './actions';

const CheckoutSection = ({
  subTotal,
  subTotalFetching,
  shippingFetching,
  shippingCost,
  total,
  taxes,
  checkOutAvilability,
  checkout
}) => {
  return (
    <section className="checkout">
      <Button
        variant="dark"
        size="lg"
        disabled={!checkOutAvilability}
        onClick={checkout}
      >
        Check Out
      </Button>
      <h3>Order Summary</h3>
      <hr />
      <div className="table-row">
        <p className="title font-weight-bold">SubTotal</p>
        {subTotalFetching ? (
          <Spinner animation="border" />
        ) : (
          <div className="price">{formatMoney(subTotal)}</div>
        )}
      </div>
      <hr />
      <div className="table-row">
        <p className="title font-weight-bold">Shipping</p>
        {shippingFetching ? (
          <Spinner animation="border" />
        ) : (
          <div className="price">{formatMoney(shippingCost)}</div>
        )}
      </div>
      <hr />
      <div className="table-row">
        <p className="title font-weight-bold">Tax</p>
        {shippingFetching ? (
          <Spinner animation="border" />
        ) : (
          <div className="price">{formatMoney(taxes)}</div>
        )}
      </div>
      <hr />
      <div className="table-row">
        <h4 className="title">Total</h4>
        {shippingFetching ? (
          <Spinner animation="border" />
        ) : (
          <div className="price">{formatMoney(total)}</div>
        )}
      </div>
    </section>
  );
};

const mapStateToProps = ({ cart }) => {
  const { shippingCost, taxRate } = cart;
  let subTotal = 0;
  if (cart.userItems) {
    subTotal = cart.userItems.reduce((total, item) => {
      const { usd, quantity } = item;
      total += usd * quantity;
      return total;
    }, 0);
  }
  let taxes = 0;
  if (shippingCost && taxRate) {
    taxes = (shippingCost + subTotal) * taxRate;
  }

  let total = 0;

  if (shippingCost && taxRate && subTotal) {
    total = shippingCost + taxes + subTotal;
  }

  return {
    subTotal: subTotal,
    shippingCost: shippingCost,
    taxes: taxes,
    subTotalFetching: cart.loading,
    shippingFetching: cart.shippingFetching,
    total: total,
    checkOutAvilability: cart.checkOutAvilability
  };
};

export default connect(
  mapStateToProps,
  { checkout }
)(CheckoutSection);
