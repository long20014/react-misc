import React from 'react';
import './puzzle-score-board.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class PuzzleScoreBoard extends React.Component {  
  
  render() {
    const sortedWinningInfo = this.props.winningInfo.sort((info1, info2) => {
      return info1.playedTime - info2.playedTime;
    })
    return (
      <div className="component-wrapper">        
        <ul className="puzzle-menu">
          {sortedWinningInfo.map((info) => {
            const index = sortedWinningInfo.indexOf(info)
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

export default connect(mapStateToProps, {})(PuzzleScoreBoard);
