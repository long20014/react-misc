import React from 'react';
import './setting-area.scss';
import { changeStyle, exportCode } from 'actions/component-generator-action';
import { connect } from 'react-redux';
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
  options = ['height', 'width', 'border', 'border-radius', 'background'];

  changeStyle = _.debounce(() => {     
    const attr = this.event.target.id;
    const value = this.event.target.value;
    if (value) {      
      this.style = Object.assign({}, this.style, {[attr]: value});   
      this.props.changeStyle(this.style);
    } 
  }, 500); 

  handleChange(event){
    event.persist();  
    this.event = event;     
    this.changeStyle();
  } 


 

  handleSubmit(event) {
    this.props.exportCode(this.props.componentStyle, '');
  }

  render() {   
    return (      
      <div className="setting-area">
        <h1>setting-area</h1>
        <form action="" onSubmit={this.handleSubmit}>
          {this.options.map(option => {
            return(
              <div className="mt-10">             
                <label htmlFor={option} className="mr-10">{option}</label>        
                <input id={option} type="text" placeholder={option} onChange={this.handleChange}/>          
              </div>
            )
          })} 
{/*           
          <div className="mt-10">    
            <label htmlFor="width" className="mr-10">width</label>             
            <input id="width" type="text" placeholder="width" onChange={this.handleChange}/>          
          </div> 
          <div className="mt-10">    
            <label htmlFor="border" className="mr-10">border</label>             
            <input id="border" type="text" placeholder="border" onChange={this.handleChange}/>          
          </div>
          <div className="mt-10">    
            <label htmlFor="border" className="mr-10">background</label>             
            <input id="border" type="text" placeholder="border" onChange={this.handleChange}/>          
          </div>  */}
          <div className="mt-10">
            <button type="submit">Create code</button> 
          </div>     
        </form>
      </div>  
    );
  }  
}

const mapStateToProps = state => ({
  componentStyle: state.componentGenerator.componentStyle,
  label: state.componentGenerator.label
})

export default connect(mapStateToProps, {changeStyle, exportCode})(SettingArea);
