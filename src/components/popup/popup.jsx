import React from 'react';
import './popup.scss';
import FormSaveName from 'component/form-save-name/form-save-name';

class Popup extends React.Component {
  constructor(props) {
    super();
    this.runDataCallBack = this.runDataCallBack.bind(this);
  }

  runDataCallBack(callback) {
    callback(this.data)
  }

  render() {
    return (
      <div className="popup-wrapper">
        <FormSaveName />
      </div>      
    )
  }
}

export default Popup