import React from 'react';
import './code-area.scss';
import { connect } from 'react-redux';

class CodeArea extends React.Component {  
  render() {   
    console.log(this.props.code.css);
    
    return (
      <div className="code-area">
        <h1>code-area</h1>
        <div>
          <h3>Html</h3>
          <textarea name="html" id="css" cols="30" rows="12" value={this.props.code.html}></textarea>
        </div>
        <div>
          <h3>Css</h3>
          <textarea name="css" id="css" cols="30" rows="12" value={this.props.code.css}></textarea>
        </div>
      </div> 
    );
  }  
}


const mapStateToProps = state => ({
  code: state.componentGenerator.code  
})

export default connect(mapStateToProps)(CodeArea);