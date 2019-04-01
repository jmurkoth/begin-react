import React, { Component } from 'react';

class Person extends Component
{
 
    render( props){
       return(
            <div onClick={this.props.click} className="person">
                <h1>{this.props.name}</h1>
                <p>Age : {this.props.age}</p>
            </div>

       )};
}

export default Person;