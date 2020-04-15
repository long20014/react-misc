import React from 'react';
import './card-piece.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { countMoves, setWait } from 'actions/card-action';

class CardPiece extends React.Component {
  constructor(props) {
    super()    
    this.flipCardUp = this.flipCardUp.bind(this);    
  }

  componentDidMount() {    
   
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

  flipCardUp() {
    const cardPiece = document.querySelector(`#piece-${this.props.id}`);  
    if (cardPiece.classList.contains('unmatched') && !this.props.isWaiting) {      
      if (!cardPiece.classList.contains('flip-up')) {       
        cardPiece.classList.add('flip-up');
        this.props.countMoves(this.props.moveCount)           
        if (this.isEven(this.props.moveCount+1)) {
          if(this.isPairMatching()) {
            this.disableFlip();
          }
          else {
            this.props.setWait(true);
            setTimeout(() => this.flipCardsDown(), 1000);           
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
  setWait: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  moveCount: state.card.moveCount,
  isWaiting: state.card.isWaiting
})

export default connect(mapStateToProps, { countMoves, setWait })(CardPiece);