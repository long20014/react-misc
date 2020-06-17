import React from 'react';
import './code-area.scss';
import { connect } from 'react-redux';

class CodeArea extends React.Component {  

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);    
  }

  render() {       
    return (
      <div className="code-area">
        <div style={{width: "100%"}}>
          <h1 className="text-center">code-area</h1>
        </div>        
        <div>
          <h3 style={{marginTop: "0px"}}>Html</h3>
          <textarea name="html" id="css" cols="30" rows="12" value={this.props.code.html} onChange={this.handleChange}></textarea>
        </div>
        <div style={{marginBottom: "20px"}}>
          <h3>Css</h3>
          <textarea name="css" id="css" cols="30" rows="12" value={this.props.code.css} onChange={this.handleChange}></textarea>
        </div>
      </div> 
    );
  }  
}


const mapStateToProps = state => ({
  code: state.componentGenerator.code  
})

export default connect(mapStateToProps)(CodeArea);