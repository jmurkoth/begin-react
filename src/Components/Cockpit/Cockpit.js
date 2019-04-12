import React,{Component} from 'react';
import ValidateComponent from '../ValidateComponent/ValidateComponent';
import Person from '../Persons/Person/Person';
import Persons from '../Persons/Persons';
import UserInput from '../UserInput/UserInput';
import UserOutput from  '../UserOutput/UserOutput';
import CharComponent from '../CharComponent/CharComponent';

class Cockpit extends Component
{

    render(props) {

                  
    var charList = this.props.userInput.split('').map((value, index)=>{
        return <CharComponent text={value}  key={index} deleteHandler={()=>this.props.removeChar(index)}/> ;
        });
        let btnClass ='';
        let personList=null;
        var people= [{ name:'Thomas', age:70},{name:'Brian', age:45}];
     
        if(this.props.showPeople)
        {
          personList = <Persons people={people}/>;
    
        }

        return(
            <div>
            <div>
                <Person name='Jeevan' age='40' click={()=>this.props.click(this.props.counter+1)} />
                <Person name ='Jack' age='39' click={()=>this.props.click(this.props.counter+1)}  />
            <div> Click Counter: {this.props.counter}</div>
            </div>
          {/* First Assignment*/}
          <div>
          <h2>Assignment 1</h2>
          <UserInput  change={this.props.changeUserName} username={this.props.username}/>
          <UserOutput username={this.props.username}/>
          <UserOutput  username="Tim-Should not change"/>
          </div>
          {/* Second Assignment*/}
          <div>
            <h2>Assignment 2</h2>
            <input type="text" onChange={this.props.asgn2Change} value={this.props.userInput}/>
            <p>{this.props.userInput.length}</p>
            <ValidateComponent textLength={this.props.userInput.length} />
            {charList}
          
          </div>
          <div>
            <h2>CSS Module</h2>
            <button 
            className={btnClass}
            onClick={this.props.cssClick}>Toggle</button>
            <div>
              {personList} 
            </div>
          </div>
          </div>
        )
    }
}


export default Cockpit