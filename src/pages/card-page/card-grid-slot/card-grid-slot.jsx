import React from 'react';
import CardPiece from '../card-piece/card-piece'
import './card-grid-slot.scss';

export default class CardGridSlot extends React.Component {

  createCardPiece() {
    const id = this.props.pieceId;
    const name = this.props.name;
    if (id !== null) {      
      return <CardPiece key={id} id={id} name={name}/>
    }    
  }
  
  render() {
    return (
      <div id={`slot-${this.props.id}`} className="card-grid__slot">
        {this.createCardPiece()}
      </div>
    );
  }
}
