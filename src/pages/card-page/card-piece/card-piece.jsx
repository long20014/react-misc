import React from 'react';
import './card-piece.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { alterMatchedPairCount, setWait, increaseMoveCount, 
  broadcastWinning, setWinningInfo, toggleShiftMode, increaseUnsuccessfulMoveCount,
  resetUnsuccessfulMoveCount } 
  from 'actions/card-action';
import cardService from 'services/card.service';

class CardPiece extends React.Component {
  constructor(props) {
    super()    
    this.flipCardUp = this.flipCardUp.bind(this); 
    this.setWinningInfo = this.setWinningInfo.bind(this);
    this.checkWiningCondition = this.checkWiningCondition.bind(this);   
    this.announceWinning = this.announceWinning.bind(this);   
    this.shiftArrayByCase = this.shiftArrayByCase.bind(this);
    this.shiftArrayNightmare = this.shiftArrayNightmare.bind(this);
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
    card1.classList.add('matched')  
    card2.classList.remove('unmatched')  
    card2.classList.add('matched')  
  }

  isEven(number) {
    return number % 2 === 0;
  }

  shiftArrayToLeft(arr, steps) {    
    arr = arr.concat(arr.splice(0, steps)); 
    return arr;    
  }

  shiftArrayToRight(arr, steps) {     
    arr = arr.concat(arr.splice(0, arr.length - steps)); 
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

    if (this.props.gameLevel.level === 'Nightmare') {
      children = this.shiftArrayNightmare(children);
    }
    else {
      children = this.shiftArrayByCase(children, this.props.gameLevel.shiftCase);
    }

    for (let i = 0; i < unmatchedSlots.length; i++) {   
      const slot = unmatchedSlots[i];      
      const firstChild = slot.firstChild;     
      if (firstChild) {
        slot.removeChild(firstChild)
      }       
      slot.appendChild(children[i]);      
    }     
  }

  shiftArrayByCase(arr, shiftCase) {
    switch (shiftCase) {
      case 1: 
        arr = this.shiftArrayToLeft(arr, 2);
        return arr;
      case 2:
        arr = this.shiftArrayToRight(arr, 2);
        return arr;      
      default:
        return arr;
    }
  }

  shiftArrayNightmare(arr) {       
    let toggle = this.props.gameLevel.toggle;
    if ((this.props.moveCount + 2) % 10 === 0) {
      this.props.toggleShiftMode(toggle);
    }
    if (toggle) {
      arr = this.shiftArrayToRight(arr, 2);
    } else {
      arr = this.shiftArrayToLeft(arr, 2);
    }        
    return arr;
  }

  flipCardUp() {
    const cardPiece = document.querySelector(`#piece-${this.props.id}`);  
    if (cardPiece.classList.contains('unmatched') && !this.props.isWaiting) {      
      if (!cardPiece.classList.contains('flip-up')) {       
        cardPiece.classList.add('flip-up');
        this.props.increaseMoveCount(this.props.moveCount)           
        if (this.isEven(this.props.moveCount+1)) {
          if(this.isPairMatching()) {
            if (this.props.gameLevel.level === 'Nightmare') {
              this.props.resetUnsuccessfulMoveCount();
            }
            this.props.alterMatchedPairCount(this.props.matchedPairs, 1);            
            this.disableFlip();            
            if (this.checkWiningCondition()) {
              const winningInfo = {
                moves: this.props.moveCount + 1,
                playerName: 'Unknown player',
                level: this.props.gameLevel.level
              }
              this.announceWinning();              
              this.updateWinningInfo(winningInfo);
            }            
          }
          else {            
            if (this.props.gameLevel.level === 'Nightmare') {              
              this.props.increaseUnsuccessfulMoveCount(this.props.gameLevel.unsuccessfulMoves);
              if ((this.props.gameLevel.unsuccessfulMoves + 2) >= 12 && 
                (this.props.gameLevel.unsuccessfulMoves + 2 - 12) % 4 === 0) {              
                const matchedCards = [...document.getElementsByClassName('flip-up matched')];     
                if (matchedCards.length > 1 ) {
                  this.props.alterMatchedPairCount(this.props.matchedPairs, -1); 
                  this.flipMatchedCardsDown(matchedCards);
                }            
                else {
                  this.props.resetUnsuccessfulMoveCount();
                }
              }              
            }            
            this.props.setWait(true);
            setTimeout(() => this.flipCardsDown(), 1000);           
          }          
          if (this.props.gameLevel.level === 'Hard' || this.props.gameLevel.level === 'Nightmare') {            
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

  flipMatchedCardsDown(matchedCards) {
    const firstCard = matchedCards[0];
    matchedCards.splice(0, 1);
    const secondCard = matchedCards.find(card => card.getAttribute("name") === firstCard.getAttribute("name"))
    firstCard.classList.remove('matched', 'flip-up')
    firstCard.classList.add('unmatched')
    secondCard.classList.remove('matched', 'flip-up')
    secondCard.classList.add('unmatched')
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
  winningInfo: state.card.winningInfo,  
})

export default connect(mapStateToProps, { 
  increaseMoveCount, alterMatchedPairCount, setWait, broadcastWinning,
  setWinningInfo, toggleShiftMode, increaseUnsuccessfulMoveCount, resetUnsuccessfulMoveCount
})(CardPiece);