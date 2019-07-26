import React from 'react';
import { Row, Col, ButtonGroup, Button } from 'react-bootstrap';

const Item = ({ title, description, quantity, price }) => {
  return (
    <div className="item">
      <h5>{title}</h5>
      <p>
        ${price}
        <br />
        {description}
      </p>
      <Row>
        <Col xs={12} md={6}>
          <p>Quantity:{quantity}</p>
        </Col>
        <Col xs={12} md={6}>
          <ButtonGroup className="mr-2" aria-label="Button group">
            <Button variant="outline-dark">-</Button>
            <Button variant="outline-dark">+</Button>
          </ButtonGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Item;
