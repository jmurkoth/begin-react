import React, { Component } from 'react';

class Person extends Component
{
 
    render( props){
       return(
            <div>
                <p>Name is {this.props.name}</p>
                <p>Age is {this.props.age}</p>
            </div>

       )};
}

export default Person;