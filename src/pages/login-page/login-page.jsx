import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import './login-page.scss';
import history from 'services/history.service';
import { connect } from 'react-redux';
import { loginAction } from 'actions/auth-action';

const pURL = process.env.PUBLIC_URL;
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  } 

  login() {    
    this.props.loginAction();
    // history.push(pURL)        
  };

  render() {     
    if (this.props.isLoggedIn) {
      return <Redirect to={pURL} />
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