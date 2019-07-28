import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const CartHeader = ({ error, loading, user }) => {
  const { name, address1, phone, country } = user;
  if (error) return <h1>Error!</h1>;
  return (
    <Fragment>
      <h1>SagaCart</h1>

      {loading ? (
        'Please wait...'
      ) : user.id ? (
        <p>
          {' '}
          {name}
          <br />
          {address1 + ', ' + country}
          <br />
          {phone}
        </p>
      ) : null}
    </Fragment>
  );
};

export default connect(({ user }) => ({ ...user }))(CartHeader);
