import React from 'react';
import './card-menu.scss';
import { Link } from 'react-router-dom';


export default class CardMenu extends React.Component {
  render() {
    return (
      <div className="component-wrapper">
        <ul className="card-menu">
          <li>
            <Link to="/card/game">Start Game</Link>
          </li>
          <li>
            <Link to="/card/score-board">Score Board</Link>
          </li>
          <li>
            <Link to="/card/setting">Setting</Link>
          </li>
        </ul>
      </div>
    );
  }
}
