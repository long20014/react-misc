import React from 'react';
import './card-setting.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeGameLevel } from 'actions/card-action';

class CardSetting extends React.Component {  
  change = (event) => {    
    this.props.changeGameLevel(event.target.value);
  }

  render() {
    return (
      <div className="component-wrapper">        
        <ul className="card-setting">
          <div className="setting-option-wrapper">
            <label htmlFor="level" style={{marginRight: '10px'}}>Game Level:</label>
            <select name="level" id="level" onChange={this.change} value={this.props.level}>
              <option value="Easy">Easy</option>
              <option value="Normal">Normal</option>
              <option value="Hard">Hard</option>
            </select> 
          </div>
                   
          <li>
            <Link to="/card">Back</Link>
          </li>
        </ul>
      </div>
    );
  }
}

CardSetting.propsType = {  
  changeGameLevel: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isUpdated: false,
  level: state.card.gameLevel.level
})

export default connect(mapStateToProps, { changeGameLevel })(CardSetting);
