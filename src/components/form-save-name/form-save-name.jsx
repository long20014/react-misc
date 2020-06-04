import React from 'react';
import './form-save-name.scss';

class FormSaveName extends React.Component {
  constructor(props) {
    super();
    this.state = {};
    
    this.runDataCallBack = this.runDataCallBack.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  runDataCallBack(callback) {
    callback(this.state.playerName)
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.runDataCallBack(this.props.setName)    
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input 
                className="form-control" type="text" 
                placeholder="enter your name" 
                name="playerName"
                onChange={this.handleChange} />
            </div> 
            <div className="form-group">
              <button type="submit">Save score</button>
            </div>            
          </form>
        </div>
      </div>
    );
  }


}

export default FormSaveName