import React from 'react';
import { Spinner, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';

const Checkout = ({ loading, message, error, success }) => {
  return (
    <div className="checkout-view">
      <h1>Checking Out</h1>
      {loading && <Spinner animation="border" />}
      {error ? (
        <Alert variant="danger">{message}</Alert>
      ) : success ? (
        <Alert variant="success">{message}</Alert>
      ) : (
        <h2>{message}</h2>
      )}
    </div>
  );
};

const mapStateToProps = ({ checkout }) => ({ ...checkout });

export default connect(mapStateToProps)(Checkout);
