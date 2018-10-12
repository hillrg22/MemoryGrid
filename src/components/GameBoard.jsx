import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import '../style.css'

export default class Example extends React.Component {
    constructor(props){
        super(props)
            this.state = {
                answer: []
            }
    }
 
    onSubmit = (event) => {
        const { answer } = this.state
        const answerArr = {
            answer
        }
        console.log('answerArr: ', answerArr)
        this.props.checkAnswer(answerArr.answer)
    }

grabNumber = (event) => {
    console.log('capture value: ', event.target.innerText)
    this.state.answer.push(parseInt(event.target.innerText))
    console.log('answer: ', this.state.answer)
  }


  render() {
    console.log(this.props.zero)
    return (
      <div>
      <Container className="my-5 mx-4" id="main-container">
        <div className="container-div">
            <Row className="grid-row center">
            <Col xs="3">
                <div style={this.props.zero} onClick={this.grabNumber} name="1" className="numBox">
                    <span className="text">1</span>
                </div>
            </Col>
            <Col xs="3">
            <div style={this.props.one} onClick={this.grabNumber} className="numBox">
                    <span className="text">2</span>
                </div>
            </Col>
            <Col xs="3">
            <div style={this.props.two} onClick={this.grabNumber} className="numBox">
                    <span className="text">3</span>
                </div>
            </Col>
            </Row>
            <Row>
            <Col xs="3">
                <div style={this.props.three} onClick={this.grabNumber} className="numBox">
                    <span className="text-center">4</span>
                </div>
            </Col>
            <Col xs="3">
            <div style={this.props.four} onClick={this.grabNumber} className="numBox">
                    <span className="text">5</span>
                </div> </Col>
            <Col xs="3">
                <div style={this.props.five} onClick={this.grabNumber} className="numBox">
                    <span className="text">6</span>
                </div>
            </Col>
            </Row>
            <Row>
            <Col xs="3">
                <div style={this.props.six} onClick={this.grabNumber} className="numBox">
                    <span className="text">7</span>
                </div>
            </Col>
            <Col xs="3">
            <div style={this.props.seven} onClick={this.grabNumber} className="numBox">
                    <span className="text">8</span>
                </div> </Col>
            <Col xs="3">
                <div style={this.props.eight} onClick={this.grabNumber} className="numBox">
                    <span className="text">9</span>
                </div>
            </Col>
            </Row>
        </div>
        </Container>
        <div className="check-answer">
            <Button color="primary" className="" onClick={this.onSubmit}>Check Answer</Button>
        </div>
      </div>
    );
  }
}
