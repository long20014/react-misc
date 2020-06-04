import React from 'react';
import './display-area.scss';
import { connect } from 'react-redux';
import Button from '../components/button/button';

export class DisplayArea extends React.Component {  
  render() {   
    return (      
      <div className="display-area">
        <div>
          <h1>display-area</h1>
        </div>        
        <div style={{display: "inline"}}>
          <Button style={this.props.componentStyle} label={this.props.label} />
        </div>        
      </div>  
    );
  }  
}


const mapStateToProps = state => ({
  componentStyle: state.componentGenerator.componentStyle,
  label: state.componentGenerator.label
})

export default connect(mapStateToProps)(DisplayArea);
