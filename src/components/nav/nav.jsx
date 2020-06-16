import React from 'react';
import './nav.scss';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { logoutAction } from 'actions/auth-action';

class Nav extends React.Component {
  constructor(props) {
    super(props);    
    this.logout = this.logout.bind(this);
  } 

  logout() {    
    this.props.logoutAction();        
    this.props.history.push('login');
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
            <div className="dropdown">  
              <span className="underline">More</span>            
              <div className="dropdown-content">
                <div className="mt-10">
                  <Link to="/card">Card</Link>
                </div>
                <div className="mt-10">
                  <Link to="/component-generator">Component generator</Link>
                </div>
              </div>
            </div>
            </li>
          </ul>
            <div className="burger-dropdown">  
              <div className="burger"></div>            
              <div className="dropdown-content">
                <div className="mt-10">
                  <Link to="/">Home</Link>
                </div>
                <div className="mt-10">
                  <Link to="/clock">Clock</Link>
                </div>
                <div className="mt-10">
                  <Link to="/puzzle">Puzzle</Link>
                </div>
                <div className="mt-10">
                  <Link to="/card">Card</Link>
                </div>
                <div className="mt-10">
                  <Link to="/component-generator">Component generator</Link>
                </div>
              </div>
            </div>
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