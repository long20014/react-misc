import React from 'react';
import PuzzlePiece from '../puzzle-piece/puzzle-piece'
import './puzzle-grid-slot.scss';

export default class PuzzleGridSlot extends React.Component {

  createPuzzlePiece() {
    const id = this.props.pieceId; 
    if (id !== null) {      
      return <PuzzlePiece key={id} id={id} draggable={false}/>
    }    
  }
  
  render() {
    return (
      <div id={`slot-${this.props.id}`} className="puzzle-grid__slot">
        {this.createPuzzlePiece()}
      </div>
    );
  }
}
