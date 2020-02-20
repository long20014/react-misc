import React from 'react';
import './puzzle-score-board.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class puzzleScoreBoard extends React.Component {  
  
  render() {
    return (
      <div className="component-wrapper">        
        <ul className="puzzle-menu">
          {this.props.winningInfo.map((info) => {
            const index = this.props.winningInfo.indexOf(info)
            return(
              <p key={index}>{index+1}. {info.playerName}: {+info.playedTime/1000}s ({info.level})</p>
            ) 
          })}          
          <li>
            <Link to="/puzzle">Back</Link>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isUpdated: false,
  winningInfo: state.puzzle.winningInfo
})

export default connect(mapStateToProps, {})(puzzleScoreBoard);
