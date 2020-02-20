import React from 'react';
import './puzzle-page.scss';
import PuzzleGrid from './puzzle-grid/puzzle-grid';
import PuzzleMenu from './puzzle-menu/puzzle-menu';
import { Route, Switch } from 'react-router-dom';
import PuzzleSetting from './puzzle-setting/puzzle-setting';
import puzzleScoreBoard from './puzzle-score-board/puzzle-score-board';

export default class PuzzlePage extends React.Component {
  render() {
    return (
      <div className="component-wrapper">
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route path="/puzzle" exact component={PuzzleMenu} />
              <Route path="/puzzle/game" exact component={PuzzleGrid} />
              <Route path="/puzzle/setting" exact component={PuzzleSetting} />
              <Route path="/puzzle/score-board" exact component={puzzleScoreBoard} />
            </Switch>
          </header>
        </div>
      </div>
    );
  }
}
