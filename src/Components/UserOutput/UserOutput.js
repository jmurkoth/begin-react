import React, {Component} from 'react';
import  './UserOutput.css';

class UserOutput extends Component
{
    render( props){
        return(
            <div className='useroutput'>

                <p>
                  {this.props.username}
                </p>

            </div>
        );



    };
}

export default UserOutput