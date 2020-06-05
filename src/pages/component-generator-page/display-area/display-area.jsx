import React from 'react';
import './display-area.scss';
import { connect } from 'react-redux';
import { changeHtml } from 'actions/component-generator-action';
import Button from '../components/button/button';

export class DisplayArea extends React.Component {  
  constructor(props) {
    super(props);
    this.html = `<button class="component-class">${this.props.label}</button>`
    this.setHtml = this.setHtml.bind(this);
  }

  componentWillMount() {
    this.props.changeHtml(this.html)
  }

  setHtml(html) {
    
  }

  

  render() {  
    
    return (      
      <div className="display-area">
        <div>
          <h1>display-area</h1>
        </div>        
        <div style={{display: "inline"}}>
          <Button style={this.props.componentStyle} label={this.props.label} setHtml={this.setHtml} />
        </div>        
      </div>  
    );
  }  
}


const mapStateToProps = state => ({
  componentStyle: state.componentGenerator.componentStyle,
  label: state.componentGenerator.label  
})

export default connect(mapStateToProps, {changeHtml})(DisplayArea);
