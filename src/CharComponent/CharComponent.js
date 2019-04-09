import React,{Component} from 'react';


class CharComponent extends Component
{
    
    style ={
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center'
    };
    render(props){
        return(
            <div style={this.style} onClick={this.props.deleteHandler} textindex={this.props.textIndex} >{this.props.text} </div>
        );
    }
}

export default CharComponent