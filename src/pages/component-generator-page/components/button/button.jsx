import React from 'react';
import './button.scss';


export default class Button extends React.Component {
  
  constructor(props) {
    super(props);    
    this.setHtml = this.setHtml.bind(this);
  }

  html = '';

  setHtml(html) {
    this.props.getHtml(html)
  }

  render() {   
    return (      
      <button className="component-class" style={this.props.style}>{this.props.label}</button>  
    );
  }  
}


