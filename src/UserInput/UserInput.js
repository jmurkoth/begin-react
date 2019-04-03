import React, {Component} from 'react';
import './UserInput.css';

class UserInput extends Component
{
    render(props){
        return(
            <input type="text" 
            className="userinput"
            onChange={this.props.change} 
            value={this.props.username}
            ></input>
        );
    };
}

export default UserInput