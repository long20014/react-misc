import React from 'react';
import PropTypes from 'prop-types';
import './unlock-pattern.scss';
import { connect } from 'react-redux';
import { loginAction } from 'actions/auth-action';

class UnlockPattern extends React.Component {
  constructor(props) {
    super(props);
    
  } 

  render() {        
    return (
      <div className="component-wrapper">
        <button onClick={this.login}>Log in</button>
      </div>
    );    
  }  
}

UnlockPattern.propTypes = {  
  loginAction: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
})

export default connect(mapStateToProps, { loginAction })(UnlockPattern);