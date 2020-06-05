import React from 'react';
import './setting-area.scss';
import { changeStyle, exportCode, addOption } from 'actions/component-generator-action';
import { connect } from 'react-redux';
import _ from 'lodash'; 
class SettingArea extends React.Component {  
  constructor(props) {
    super(props);
    this.handleChange = this.changeStyle.bind(this);
    this.exportCode = this.exportCode.bind(this);
    this.addOption = this.addOption.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
  }

  event = null;
  style = {}
  

  changeStyleDebounce = _.debounce(() => {     
    const attr = this.event.target.id;
    const value = this.event.target.value;
    if (value) {      
      this.style = Object.assign({}, this.style, {[attr]: value});   
      this.props.changeStyle(this.style);
    } 
  }, 500); 

  changeStyle(event){
    event.persist();  
    this.event = event;     
    this.changeStyleDebounce();
  } 

  exportCode(event) {
    this.props.exportCode(this.props.componentStyle, this.props.componentHtml);
  }

  addOption(event) {
    if (event.keyCode === 13) {
      const option = event.target.value;
      if (!this.props.options.includes(option)) {
        this.props.addOption(option, this.props.options);
      }     
    }    
  }

  render() {
    console.log(this.props.options);
       
    return (          
      <div className="setting-area">
        <h1>setting-area</h1>       
        <form onSubmit={this.exportCode}>
          <div className="mt-10 setting-wrapper">             
            <label htmlFor="add-option" className="mr-10">add option</label>        
            <input id="add-option" type="text" placeholder="add-option" onKeyUp={this.addOption}/>          
          </div>
          {this.props.options.map(option => {
            return(
              <div className="mt-10 setting-wrapper" key={option}>             
                <label htmlFor={option} className="mr-10">{option}</label>        
                <input id={option} type="text" placeholder={option} onChange={this.changeStyle}/>          
              </div>
            )
          })} 
          <div className="mt-10">
            <button type="submit">Export code</button> 
          </div>     
        </form>
      </div>  
    );
  }  
}

const mapStateToProps = state => ({
  componentStyle: state.componentGenerator.componentStyle,
  componentHtml: state.componentGenerator.componentHtml,
  label: state.componentGenerator.label,
  options: state.componentGenerator.options
})

export default connect(mapStateToProps, {changeStyle, exportCode, addOption})(SettingArea);

