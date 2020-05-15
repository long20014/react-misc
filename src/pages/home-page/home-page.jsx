import React from 'react';
import './home-page.scss';
import Popup from "reactjs-popup";
import FormSaveName from 'components/form-save-name/form-save-name';

export default class HomePage extends React.Component {  
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ open: true });
  }
  closeModal() {
    this.setState({ open: false });
  }

  render() {     
    return (
      <div className="component-wrapper">
        <h1>HomePage</h1>
        <button onClick={this.openModal}>open</button>
        <Popup modal  
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <button onClick={this.closeModal}>Close</button>
          <FormSaveName />
        </Popup>
      </div>
    );
  }  
}
