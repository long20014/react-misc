import React from 'react';
import './clock-mark.scss';

export default class ClockMark extends React.Component {
  render() {
    return (
      <div className="component-wrapper">
        <div
          className={`clock-${this.props.type}-mark`} 
          style= {{
            transform: `rotate(${this.props.angle}deg)`
          }}
        >
          <div
            className={`react-clock__mark__body react-clock__${this.props.type}-mark__body`}
            style={{
              width: `${this.props.width}px`,
              top: 0,
              bottom: `${100 - (this.props.length / 2)}%`,
            }}
          />
        </div>        
      </div>      
    );
  }  
}
