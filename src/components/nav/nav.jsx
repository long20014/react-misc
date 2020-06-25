import React from 'react';
import './nav.scss';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { logoutAction } from 'actions/auth-action';
import { availableNavLinks, moreNavLinks, navLinks} from './navLinks';
 
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
          <div className="logo-wrapper">
            <h3>Logo</h3>
          </div> 
          <div className="nav-links-wrapper">
            <ul className="nav-links">
              {availableNavLinks.map(link => 
                <li key={link.path} >
                  <Link to={link.path}>{link.label}</Link>
                </li>
              )}                         
              <li>
                <div className="dropdown">  
                  <span className="underline">More</span>            
                  <div className="dropdown-content">
                    {moreNavLinks.map(link => 
                      <div key={link.path} className="mt-10">
                        <Link to={link.path}>{link.label}</Link>
                      </div>                     
                    )}   
                  </div>
                </div>
              </li>
              <li>{isLoggedIn && <button onClick={this.logout} style={{ color: 'black' }}>Log out</button>}</li>
            </ul>
            <div className="burger-dropdown">  
              <div className="burger"></div>            
              <div className="dropdown-content">
                {navLinks.map(link => 
                  <div key={link.path} className="mt-10">
                    <Link to={link.path}>{link.label}</Link>
                  </div>                     
                )}                
                <div className="mt-10">
                  {isLoggedIn && <button onClick={this.logout} style={{ color: 'black' }}>Log out</button>}
                </div>
              </div>
            </div>
          </div>          
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