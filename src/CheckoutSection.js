import React from 'react';
import { Button } from 'react-bootstrap';

const CheckoutSection = () => {
  return (
    <section className="checkout">
      <Button variant="dark" size="lg">
        Check Out
      </Button>
      <h3>Order Summary</h3>
      <hr />
      <div className="table-row">
        <p className="title font-weight-bold">SubTotal</p>
        <div className="price">$451</div>
      </div>
      <hr />
      <div className="table-row">
        <p className="title font-weight-bold">Shipping</p>
        <div className="price">$451</div>
      </div>
      <hr />
      <div className="table-row">
        <p className="title font-weight-bold">Tax</p>
        <div className="price">$451</div>
      </div>
      <hr />
      <div className="table-row">
        <h4 className="title">Total</h4>
        <div className="price">$451</div>
      </div>
    </section>
  );
};

export default CheckoutSection;
