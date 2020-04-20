import React from 'react';
import './nav.scss';
import { Link, Redirect, withRouter } from 'react-router-dom';
import history from 'services/history.service';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { logoutAction } from 'actions/auth-action';

const pURL = process.env.PUBLIC_URL;
class Nav extends React.Component {
  constructor(props) {
    super(props);    
    this.logout = this.logout.bind(this);
  } 

  logout() {    
    this.props.logoutAction();        
    this.props.history.push(pURL + 'login');
  };

  render() {
    const isLoggedIn = this.props.isLoggedIn;    
    return (
      <div className="component-wrapper">
        <div className="nav">
          <h3>Logo</h3>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/clock">Clock</Link>
            </li>
            <li>
              <Link to="/puzzle">Puzzle</Link>
            </li>
            <li>
              <Link to="/card">Card</Link>
            </li>
          </ul>
          {isLoggedIn && <button onClick={this.logout} style={{ color: 'black' }}>Log out</button>}
        </div>
      </div>
    );
  }
}

Nav.propsType = {
  logoutAction: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
})

export default compose(
  withRouter,
  connect(mapStateToProps, { logoutAction })
)(Nav);