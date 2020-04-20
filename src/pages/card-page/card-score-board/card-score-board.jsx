import React from 'react';
import './card-score-board.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class CardScoreBoard extends React.Component {  
  
  render() {
    return (
      <div className="component-wrapper">        
        <ul className="card-menu">
          {this.props.winningInfo.map((info) => {
            const index = this.props.winningInfo.indexOf(info)
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
