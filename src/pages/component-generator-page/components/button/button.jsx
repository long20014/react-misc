import React from 'react';
import './button.scss';


export default class Button extends React.Component {    
  render() {   
    return (      
      <button style={this.props.style}>{this.props.label}</button>  
    );
  }  
}


