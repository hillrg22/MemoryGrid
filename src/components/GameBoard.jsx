import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../style.css'

export default class Example extends React.Component {
  render() {
    return (
      <div>
      <Container className="my-5 mx-4" id="main-container">
        <Row className="grid-row">
          <Col xs="3">
              <div className="numBox">
                  <span className="text">1</span>
              </div>
          </Col>
          <Col xs="3">
          <span>Box Span</span>
          </Col>
          <Col xs="3">
          <span>Box Span</span>
          </Col>
        </Row>
        <Row>
          <Col xs="3">Box</Col>
          <Col xs="3">Box </Col>
          <Col xs="3">Box</Col>
        </Row>
        <Row>
          <Col xs="3">Box</Col>
          <Col xs="3">Box </Col>
          <Col xs="3">Box</Col>
        </Row>
        </Container>
      </div>
    );
  }
}

