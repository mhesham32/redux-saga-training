import React from 'react';
import { Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import formatMoney from './helpers/formatMoney';

const Item = ({ name, description, quantity, usd }) => {
  return (
    <div className="item">
      <h5>{name}</h5>
      <p>
        {/* convert to cnets for the helper func */}
        {formatMoney(usd * 100 * quantity)}
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
