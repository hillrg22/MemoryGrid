import React, { Component } from 'react';
import GameBoard from './components/GameBoard';
import Footer from './components/Footer';
import Header from './components/Header';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      zero: {backgroundColor: '#39D1B4'},
      one: {backgroundColor: '#39D1B4'},
      two: {backgroundColor: '#39D1B4'},
      three: {backgroundColor: '#39D1B4'},
      four: {backgroundColor: '#39D1B4'},
      five: {backgroundColor: '#39D1B4'},
      six: {backgroundColor: '#39D1B4'},
      seven: {backgroundColor: '#39D1B4'},
      eight: {backgroundColor: '#39D1B4'},

      test: 0
    }
  }

  

  timeout = () => {
    // this.setState({test: 1})

    setTimeout(()=> this.setState({zero:{backgroundColor:'#ffd712'}}),0);
    setTimeout(()=> this.setState({zero:{backgroundColor:'#39D1B4'}}),1000);

    setTimeout(()=> this.setState({five:{backgroundColor:'#ffd712'}}),1500);
    setTimeout(()=> this.setState({five:{backgroundColor:'#39D1B4'}}),2500);

    setTimeout(()=> this.setState({eight:{backgroundColor:'#ffd712'}}),3000);
    setTimeout(()=> this.setState({eight:{backgroundColor:'#39D1B4'}}),4000);

    setTimeout(()=> this.setState({two:{backgroundColor:'#ffd712'}}),4500);
    setTimeout(()=> this.setState({two:{backgroundColor:'#39D1B4'}}),5500);
  }


  render() {
    return (
      <div className="App">
        <Header />
        <div style={{background:this.state.one.backgroundColor}}>Hello</div>
        <button onClick={this.timeout}>Button</button>
        <GameBoard zero ={this.state.zero}
          one ={this.state.one}
          two ={this.state.two}
          three ={this.state.three}
          four ={this.state.four}
          five ={this.state.five}
          six ={this.state.six}
          seven ={this.state.seven}
          eight ={this.state.eight}
            timeout= {this.timeout} />
        <Footer />
      </div>

    );
  }
}

export default App;
