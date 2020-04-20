import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import './login-page.scss';
import { connect } from 'react-redux';
import { loginAction } from 'actions/auth-action';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  } 

  login() {    
    this.props.loginAction();    
  };

  render() {     
    if (this.props.isLoggedIn) {
      return <Redirect to={"/"} />
    }   
    return (
      <div className="component-wrapper">
        <button onClick={this.login}>Log in</button>
      </div>
    );    
  }  
}

LoginPage.propTypes = {  
  loginAction: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
})

export default connect(mapStateToProps, { loginAction })(LoginPage);