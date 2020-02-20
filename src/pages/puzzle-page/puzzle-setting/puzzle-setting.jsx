import React from 'react';
import './puzzle-setting.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeGameLevel } from 'actions/puzzle-action';

class PuzzleSetting extends React.Component {  
  change = (event) => {    
    this.props.changeGameLevel(event.target.value);
  }

  render() {
    return (
      <div className="component-wrapper">        
        <ul className="puzzle-setting">
          <div className="setting-option-wrapper">
            <label htmlFor="level" style={{marginRight: '10px'}}>Game Level:</label>
            <select name="level" id="level" onChange={this.change} value={this.props.level}>
              <option value="Easy">Easy</option>
              <option value="Normal">Normal</option>
              <option value="Hard">Hard</option>
            </select> 
          </div>
                   
          <li>
            <Link to="/puzzle">Back</Link>
          </li>
        </ul>
      </div>
    );
  }
}

PuzzleSetting.propsType = {  
  changeGameLevel: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isUpdated: false,
  level: state.puzzle.gameLevel.level
})

export default connect(mapStateToProps, { changeGameLevel })(PuzzleSetting);
