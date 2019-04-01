import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state= {counter:1};

  onClick=(value)=>{
    this.setState({
        counter:value
    });
  };

  render() {
    return (
      <div className="App">
            <Person name='Jeevan' age='40' click={this.onClick.bind(this,this.state.counter+1)} />
            <Person name ='Jack' age='39' click={this.onClick.bind(this,this.state.counter+1)}  />
            <div> Click Counter: {this.state.counter}</div>
      </div>
     
    );
  }
}

export default App;
