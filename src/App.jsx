import React from 'react';
import './App.scss';
import { Provider} from 'react-redux';
import { MainRouter } from 'router';
import store from 'store/store';

export default class App extends React.Component {
  render() {
    return (
      <div className="component-wrapper">
        <Provider store={store}>          
          <MainRouter />
        </Provider>        
      </div>
    );
  }
}

