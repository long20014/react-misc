import React from 'react';

import './clock-page.scss';
import Clock from './clock/clock';

export default class ClockPage extends React.Component {
  _isMounted = false;
  clock;
  constructor() {
    super();
    this.state = {
      time: new Date()
    }    
  }

  componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      this.clock = setInterval(()=> {
        this.setState(state => state.time = new Date())
      }, 1000)
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
    clearInterval(this.clock);
  }

  render() {        
    const hour = this.state.time.getHours()
    const minute = this.state.time.getMinutes()
    const second = this.state.time.getSeconds()
    return (
      <div className="App">
        <header className="App-header">
          <Clock 
            hour={hour} 
            minute={minute} 
            second={second} 
          />          
        </header>
      </div>
    );
  }  
}
