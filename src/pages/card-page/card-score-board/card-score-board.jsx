import React from 'react';
import './card-score-board.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class CardScoreBoard extends React.Component {  
  
  render() {
    const sortedWinningInfo = this.props.winningInfo.sort((info1, info2) => {
      return info1.moves - info2.moves;
    })
    return (
      <div className="component-wrapper">        
        <ul className="card-menu"> {  
          sortedWinningInfo.map((info) => {
            const index = sortedWinningInfo.indexOf(info)
            return(
              <p key={index}>{index+1}. {info.playerName}: {+info.moves} moves ({info.level})</p>
            ) 
          })}          
          <li>
            <Link to="/card">Back</Link>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isUpdated: false,
  winningInfo: state.card.winningInfo
})

export default connect(mapStateToProps, {})(CardScoreBoard);
