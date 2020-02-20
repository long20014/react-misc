import React from 'react';
import './clock.scss';

export default class Clock extends React.Component {
  render() {    
    const hour = this.props.hour
    const minute = this.props.minute
    const second = this.props.second
    return (
      <div className="component-wrapper">
        <div className="clock-wrapper">
          <div className="clock">
            <div className="hand hour-hand" style={{transform: `rotate(${hour*30 + minute/2 + second/120 - 90}deg)`}}></div>
            <div className="hand minute-hand" style={{transform: `rotate(${minute*6 + second/10 - 90}deg)`}}></div>
            <div className="hand second-hand" style={{transform: `rotate(${second*6 - 90}deg)`}}></div>
          </div>         
        </div>
        <div className="timer">{hour}:{minute < 10 ? '0' + minute : minute}:{second < 10 ? '0' + second : second}</div>       
      </div>      
    );
  }  
}
