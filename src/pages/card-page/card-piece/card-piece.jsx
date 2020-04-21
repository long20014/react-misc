import React from 'react';
import './card-piece.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increaseMatchedPairCount, setWait, increaseMoveCount, 
  broadcastWinning, setWinningInfo } 
  from 'actions/card-action';
import cardService from 'services/card.service';

class CardPiece extends React.Component {
  constructor(props) {
    super()    
    this.flipCardUp = this.flipCardUp.bind(this); 
    this.setWinningInfo = this.setWinningInfo.bind(this);
    this.checkWiningCondition = this.checkWiningCondition.bind(this);   
    this.announceWinning = this.announceWinning.bind(this);   
  }

  componentDidMount() {    
   
  }

  setWinningInfo(winningInfo) {          
    this.props.setWinningInfo(winningInfo)
  }

  updateWinningInfo(winningInfo) {
    cardService.updateWinningInfo(winningInfo);
  }

  isPairMatching() { 
    const openedPair = document.getElementsByClassName('flip-up unmatched');
    const card1Name = openedPair[0].getAttribute("name");
    const card2Name = openedPair[1].getAttribute("name");
    if (card1Name === card2Name) {
      return true
    }
    return false;       
  }

  disableFlip() {    
    const openedPair = document.getElementsByClassName('flip-up unmatched');
    const card1 = openedPair[0];
    const card2 = openedPair[1];
    card1.classList.remove('unmatched')  
    card2.classList.remove('unmatched')  
  }

  isEven(number) {
    return number % 2 === 0;
  }

  shiftArrayToLeft(arr, steps) {    
    arr = arr.concat(arr.splice(0, steps)); 
    return arr;    
  }

  changeCardsPosition() {
    const slots = document.getElementsByClassName('card-grid__slot');
    const unmatchedSlots = [];
    let children = [];
    for (const slot of slots) {
      const child = slot.firstChild;
      if (child.classList.contains('unmatched')) {
        children.push(child);
        unmatchedSlots.push(slot);
      }      
    }
    children = this.shiftArrayToLeft(children, 2);
    for (let i = 0; i < unmatchedSlots.length; i++) {   
      const slot = unmatchedSlots[i];      
      const firstChild = slot.firstChild;     
      if (firstChild) {
        slot.removeChild(firstChild)
      }       
      slot.appendChild(children[i]);      
    }     
  }

  flipCardUp() {
    const cardPiece = document.querySelector(`#piece-${this.props.id}`);  
    if (cardPiece.classList.contains('unmatched') && !this.props.isWaiting) {      
      if (!cardPiece.classList.contains('flip-up')) {       
        cardPiece.classList.add('flip-up');
        this.props.increaseMoveCount(this.props.moveCount)           
        if (this.isEven(this.props.moveCount+1)) {
          if(this.isPairMatching()) {
            this.props.increaseMatchedPairCount(this.props.matchedPairs)
            this.disableFlip();            
            if (this.checkWiningCondition()) {
              const winningInfo = {
                moves: this.props.moveCount + 1,
                playerName: 'Unknown player',
                level: this.props.gameLevel.level
              }
              this.announceWinning();
              this.setWinningInfo(winningInfo);
              this.updateWinningInfo(winningInfo);
            }            
          }
          else {
            this.props.setWait(true);
            setTimeout(() => this.flipCardsDown(), 1000);           
          }          
          if (this.props.gameLevel.level === 'Hard') {
            setTimeout(() => this.changeCardsPosition(), 1001);
          }          
        }        
      }
    }           
  }  

  flipCardsDown() {    
    const openedCards = [...document.getElementsByClassName('flip-up unmatched')];
    for (const card of openedCards) {
      if (card.classList.contains('unmatched')) {      
        if (card.classList.contains('flip-up')) {
          card.classList.remove('flip-up');
        }
      }
    }    
    this.props.setWait(false);   
  }

  checkWiningCondition() {
    const arraySize = this.props.gameLevel.arraySize;
    if (this.props.matchedPairs+1 === arraySize*arraySize/2) {
      return true
    }
    return false;
  }

  announceWinning() {
    this.props.broadcastWinning();    
    setTimeout(() => {
      console.log('You win the game', this.props.isWin);
      alert('Congratulation! You win the game')  
    }, 100)      
  }

  render() {
    return (
      <div className="component-wrapper card-wrapper h-full unmatched" name={this.props.name} 
        id={`piece-${this.props.id}`} onClick={this.flipCardUp}>
        <div id={`piece-${this.props.id}-front`} className="card-piece card-front">
          <h1>{this.props.name}</h1>
        </div>
        <div id={`piece-${this.props.id}-back`} className="card-piece card-back"></div>
      </div>      
    );
  }
}

CardPiece.propsType = {
  countMoves: PropTypes.func.isRequired,
  countMatchedPairs: PropTypes.func.isRequired,
  setWait: PropTypes.func.isRequired,
  broadcastWinning: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  moveCount: state.card.moveCount,
  matchedPairs: state.card.matchedPairs,
  isWaiting: state.card.isWaiting,
  gameLevel: state.card.gameLevel,
  winningInfo: state.card.winningInfo
})

export default connect(mapStateToProps, { 
  increaseMoveCount, increaseMatchedPairCount, setWait, broadcastWinning,
  setWinningInfo 
})(CardPiece);