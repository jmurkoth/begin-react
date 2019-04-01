import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
            <Person name='Jeevan' age='40' />
            <Person name ='Jack' age='39' />
      </div>
    );
  }
}

export default App;
