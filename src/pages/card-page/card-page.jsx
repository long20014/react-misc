import React from 'react';
import './card-page.scss';
import CardGrid from './card-grid/card-grid';
import CardMenu from './card-menu/card-menu';
import { Route, Switch } from 'react-router-dom';
import CardSetting from './card-setting/card-setting';
import cardScoreBoard from './card-score-board/card-score-board';

export default class CardPage extends React.Component {
  render() {
    return (
      <div className="component-wrapper">
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route path="/card" exact component={CardMenu} />
              <Route path="/card/game" exact component={CardGrid} />
              <Route path="/card/setting" exact component={CardSetting} />
              <Route path="/card/score-board" exact component={cardScoreBoard} />
            </Switch>
          </header>
        </div>
      </div>
    );
  }
}
