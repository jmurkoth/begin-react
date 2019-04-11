import React,{Component} from 'react';

class ValidateComponent extends Component
{
    minimumLength=5;

   validateLength=(inputLength)=>{
       if (inputLength< this.minimumLength)
       {
           return 'Text too short';
       }else{
           return 'Text long enough'
       }
   }
    render(props) {
        return (
            <p>{this.validateLength(this.props.textLength)}</p>
        );

    }
}

export default ValidateComponent