import React, { Component } from 'react';
import './App.css';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component {

  state= {counter:1,username:'Please enter your user name', userInput:'', showPeople:true };

  onClick=(value)=>{
    this.setState({
        counter:value
    });
  };
  usernameChangeHandler=(event)=>{
    this.setState({username:event.target.value});
  }
  textChangeHandler=(event)=>{
    this.setState({userInput:event.target.value})

  }
  deleteHandler=(index)=>{
    var textArray = this.state.userInput.split('');
    textArray.splice(index,1);
    const updatedText =textArray.join('');
    this.setState({userInput:updatedText})

  }
  togglePersonHandler=()=>{
    this.setState({showPeople: !this.state.showPeople});
  }
  render( ) {
 
 
   
    return (
      <div className="App">
         <Cockpit 
          click={this.onClick}
          changeUserName={this.usernameChangeHandler}
          username={this.state.username}
          userInput={this.state.userInput}  
          showPeople ={this.state.showPeople} 
          asgn2Change={this.textChangeHandler}
          counter={this.state.counter}
          removeChar={this.deleteHandler}
          cssClick={this.togglePersonHandler}
         ></Cockpit>
      </div>
     
    );
  }
}

export default App;
