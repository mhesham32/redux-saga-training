import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import CartHeader from './CartHeader';
import CartItems from './CartItems';
import CheckoutSection from './CheckoutSection';

function App() {
  return (
    <div className="wrapper">
      <div className="app-container">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <CartHeader />
              <CartItems />
            </Col>
            <Col xs={12} md={6}>
              <CheckoutSection />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
