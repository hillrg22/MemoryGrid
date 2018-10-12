import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../style.css'

export default class Example extends React.Component {
  render() {
    return (
      <div>
      <Container className="my-5 mx-4" id="main-container">
        <div className="container-div"> 
            <Row className="grid-row center">
            <Col xs="3">
                <div className="numBox">
                    <span className="text">1</span>
                </div>
            </Col>
            <Col xs="3">
            <div className="numBox">
                    <span className="text">2</span>
                </div>
            </Col>
            <Col xs="3">
            <div className="numBox">
                    <span className="text">3</span>
                </div>
            </Col>
            </Row>
            <Row>
            <Col xs="3">
                <div className="numBox">
                    <span className="text-center">4</span>
                </div>
            </Col>
            <Col xs="3">
            <div className="numBox">
                    <span className="text">5</span>
                </div> </Col>
            <Col xs="3">
                <div className="numBox">
                    <span className="text">6</span>
                </div>
            </Col>
            </Row>
            <Row>
            <Col xs="3">
                <div className="numBox">
                    <span className="text">7</span>
                </div>
            </Col>
            <Col xs="3">
            <div className="numBox">
                    <span className="text">8</span>
                </div> </Col>
            <Col xs="3">
                <div className="numBox">
                    <span className="text">9</span>
                </div>
            </Col>
            </Row>
        </div>
        </Container>
      </div>
    );
  }
}

