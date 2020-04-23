import React from 'react';
import './card-score-board.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import cardService from 'services/card.service';
import { fetchScores } 
  from 'actions/card-action'

class CardScoreBoard extends React.Component { 
  constructor() {
    super();
    this.state = {
      winningInfo: {}
    };
    this.getWinningInfo = this.getWinningInfo.bind(this);    
  }

  componentWillMount() {       
    this.getWinningInfo();
  }
  
  getWinningInfo() {      
    // cardService.getWinningInfo().then(res => {
    //   const sortedWinningInfo = res.data.sort((info1, info2) => {
    //     return info1.winningInfo.moves - info2.winningInfo.moves;
    //   })
    //   this.setState({
    //     winningInfo: sortedWinningInfo
    //   })
    // })    
    this.props.fetchScores();    
  }
  
  render() {       
    const sortedWinningInfo = this.props.winningInfo; 
    let scores = null;       
    if (sortedWinningInfo.length > 0) {
      scores = sortedWinningInfo.map((data) => {
        const index = sortedWinningInfo.indexOf(data)
        const info = data.winningInfo
        return(
          <p key={index}>{index+1}. {info.playerName}: {+info.moves} moves ({info.level})</p>
        ) 
      })
    }     
    return (
      <div className="component-wrapper">        
        <ul className="card-menu"> 
          {scores}
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

export default connect(mapStateToProps, {fetchScores})(CardScoreBoard);
