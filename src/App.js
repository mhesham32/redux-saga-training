import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { increment } from './actions/test';
import './App.css';

function App({ increment, state: { count } }) {
  return (
    <div className="wrapper">
      <div className="app-container">
        <Container>
          <Row>
            <Col>1 of 2</Col>
            <Col>2 of 2</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default connect(
  ({ state }) => ({ state }),
  { increment }
)(App);
