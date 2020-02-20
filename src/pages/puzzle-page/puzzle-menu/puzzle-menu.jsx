import React from 'react';
import './puzzle-menu.scss';
import { Link } from 'react-router-dom';


export default class PuzzleMenu extends React.Component {
  render() {
    return (
      <div className="component-wrapper">
        <ul className="puzzle-menu">
          <li>
            <Link to="/puzzle/game">Start Game</Link>
          </li>
          <li>
            <Link to="/puzzle/score-board">Score Board</Link>
          </li>
          <li>
            <Link to="/puzzle/setting">Setting</Link>
          </li>
        </ul>
      </div>
    );
  }
}
