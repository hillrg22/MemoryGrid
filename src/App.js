import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      zero: {color: '#39D1B4'},
      one: {color: '#39D1B4'},
      two: {color: '#39D1B4'},
      three: {color: '#39D1B4'},
      four: {color: '#39D1B4'},
      five: {color: '#39D1B4'},
      six: {color: '#39D1B4'},
      seven: {color: '#39D1B4'},
      eight: {color: '#39D1B4'},

      test: 0
    }
  }



  timeout = () => {
    // this.setState({test: 1})

    setTimeout(()=> this.setState({one:{color:'#ffd712'}}),500);
    setTimeout(()=> this.setState({one:{color:'#39D1B4'}}),1200);

    console.log(this.state)
    // setTimeout(function(){console.log("set timeout 2")},6000);
  }


  render() {
    return (
      <div className="App">
        <div style={{background:this.state.one.color}}>Hello</div>
        <button onClick={this.timeout}>Button</button>
      </div>
    );
  }
}

export default App;
