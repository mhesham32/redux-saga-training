import React from 'react';
import { Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import formatMoney from './helpers/formatMoney';
import { increaseItemQuantity, decreaseItemQuantity } from './actions';

const Item = ({
  name,
  description,
  quantity,
  usd,
  id,
  fetching,
  increaseItemQuantity,
  decreaseItemQuantity
}) => {
  return (
    <div className="item">
      <h5>{name}</h5>
      <p>
        {/* convert to cents for the helper func */}
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
            <Button
              variant="outline-dark"
              disabled={fetching}
              onClick={() => {
                decreaseItemQuantity(id);
              }}
            >
              -
            </Button>
            <Button
              variant="outline-dark"
              disabled={fetching}
              onClick={() => {
                increaseItemQuantity(id);
              }}
            >
              +
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = ({ cart }, props) => ({
  fetching: cart.busyItem === props.id
});

export default connect(
  mapStateToProps,
  { increaseItemQuantity, decreaseItemQuantity }
)(Item);
