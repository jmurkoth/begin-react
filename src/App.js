import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from  './UserOutput/UserOutput';

class App extends Component {

  state= {counter:1,username:'Please enter your user name'};

  onClick=(value)=>{
    this.setState({
        counter:value
    });
  };
  usernameChangeHandler=(event)=>{
    this.setState({username:event.target.value});
  }
  render() {
    return (
      <div className="App">
            <div>
              <Person name='Jeevan' age='40' click={this.onClick.bind(this,this.state.counter+1)} />
              <Person name ='Jack' age='39' click={this.onClick.bind(this,this.state.counter+1)}  />
              <div> Click Counter: {this.state.counter}</div>
            </div>

            <UserInput  change={this.usernameChangeHandler} username={this.state.username}/>
            <UserOutput username={this.state.username}/>
            <UserOutput  username="Tim"/>
      </div>
     
    );
  }
}

export default App;
