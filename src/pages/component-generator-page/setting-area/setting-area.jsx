import React from 'react';
import './setting-area.scss';
import { changeStyle } from 'actions/component-generator-action';
import { connect } from 'react-redux';
import constants from 'shared/constants';
import _ from 'lodash'; 
class SettingArea extends React.Component {  
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
  }

  event = null;
  style = {}

  changeStyle = _.debounce(() => {     
    const attr = this.event.target.id;
    const value = this.event.target.value;
    if (value) {      
      this.style = Object.assign({}, this.style, {[attr]: value});   
      this.props.changeStyle(this.style);
    } 
    console.log(this.style);
    
  }, 500); 

  handleChange(event){
    event.persist();  
    this.event = event;     
    this.changeStyle();
  } 
 

  handleSubmit(event) {

  }

  render() {   
    return (      
      <div className="setting-area">
        <h1>setting-area</h1>
        <div className="mt-10">  
          <label htmlFor="height" className="mr-10">height</label>        
          <input id="height" type="text" placeholder="height" onChange={this.handleChange}/>          
        </div>
        <div className="mt-10">    
          <label htmlFor="width" className="mr-10">width</label>             
          <input id="width" type="text" placeholder="width" onChange={this.handleChange}/>          
        </div>        
      </div>  
    );
  }  
}

const mapStateToProps = state => ({
  componentStyle: state.componentGenerator,
  label: state.componentGenerator.label
})

export default connect(mapStateToProps, {changeStyle})(SettingArea);
