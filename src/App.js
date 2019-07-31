import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import './App.css';
import CartHeader from './CartHeader';
import CartItems from './CartItems';
import CheckoutSection from './CheckoutSection';
import Checkout from './Checkout';

function App({ showCheckout }) {
  return (
    <div className="wrapper">
      <div className="app-container">
        <Container>
          {showCheckout ? (
            <Checkout />
          ) : (
            <Row>
              <Col xs={12} md={6}>
                <CartHeader />
                <CartItems />
              </Col>
              <Col xs={12} md={6}>
                <CheckoutSection />
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </div>
  );
}

export default connect(({ checkout }) => ({
  showCheckout: checkout.showCheckout
}))(App);
