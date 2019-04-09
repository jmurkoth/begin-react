import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from  './UserOutput/UserOutput';
import ValidateComponent from './ValidateComponent/ValidateComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state= {counter:1,username:'Please enter your user name', userInput:''};

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
    console.log('clicked at index :' + index);
    textArray.splice(index,1);
    const updatedText =textArray.join('');
    this.setState({userInput:updatedText})

  }
  render() {

    var charList = this.state.userInput.split('').map((value, index)=>{
      return <CharComponent text={value}  key={index} deleteHandler={()=>this.deleteHandler(index)}/> ;
  });

    return (
      <div className="App">
            <div>
              <Person name='Jeevan' age='40' click={this.onClick.bind(this,this.state.counter+1)} />
              <Person name ='Jack' age='39' click={this.onClick.bind(this,this.state.counter+1)}  />
              <div> Click Counter: {this.state.counter}</div>
            </div>
            {/* First Assignment*/}
            <div>
            <h2>Assignment 1</h2>
            <UserInput  change={this.usernameChangeHandler} username={this.state.username}/>
            <UserOutput username={this.state.username}/>
            <UserOutput  username="Tim-Should not change"/>
            </div>
            {/* Second Assignment*/}
            <div>
              <h2>Assignment 2</h2>
              <input type="text" onChange={this.textChangeHandler} value={this.state.userInput}/>
              <p>{this.state.userInput.length}</p>
              <ValidateComponent textLength={this.state.userInput.length} />
              {charList}
            
            </div>
       
         
      </div>
     
    );
  }
}

export default App;
