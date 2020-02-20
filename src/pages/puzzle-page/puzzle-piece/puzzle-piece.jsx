import React from 'react';
import './puzzle-piece.scss';

export default class PuzzlePiece extends React.Component {
  render() {
    return (
      <div id={`piece-${this.props.id}`} className="puzzle-piece" draggable={this.props.draggable}>
        <h1>{this.props.id}</h1>
      </div>
    );
  }
}
