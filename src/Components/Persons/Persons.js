import React,{ Component } from 'react';
import Person from './Person/Person'

class Persons extends Component
{
    render( props)
    {
        return(
           this.props.people.map((p, index)=>{return  <Person name={p.name} age={p.age} key={index}  />;})

        );
    }
}

export default Persons