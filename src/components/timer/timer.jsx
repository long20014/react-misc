import React from 'react';
import './timer.scss';

export default class Timer extends React.Component {
  _isMounted = false;
  _isStopped = false;
  subscribeStop = () => {
    this.props.updateStop((stop) => {           
      if (stop && !this._isStopped) {
        this.stopTimer();
        this._isStopped = true;
        this.props.emitTime(this.state.time)   
      }                    
    })
  }

  constructor(props){
    super(props)
    this.state = {
      time: 0,
      isOn: false,
      start: 0
    }
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
    this.upTimingFunc = this.upTimingFunc.bind(this)    
  }

  componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      this.startTimer();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
    this.stopTimer();
  }
  
  startTimer() {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 10);
  }

  stopTimer() {
    this.setState({isOn: false})
    clearInterval(this.timer)
  }

  resetTimer() {
    this.setState({time: 0, isOn: false})
  }

  upTimingFunc() {
    this.startTimer();
  }

  downTimingFunc(start) {

  }

  render() { 
    if (!this._isStopped) {
      setTimeout(() => this.subscribeStop(), 0)    
    }
    
    if (this.props.upTimer) {
      return (
        <div className="component-wrapper">
          
        </div>
      );
    }
    
    let start = (this.state.time === 0) ?
      <button onClick={this.startTimer}>start</button> : null      
    let stop = (this.state.time === 0 || !this.state.isOn) ? null :      
      <button onClick={this.stopTimer}>stop</button>
    let resume = (this.state.time === 0 || this.state.isOn) ? null :      
      <button onClick={this.startTimer}>resume</button>
    let reset = (this.state.time === 0 || this.state.isOn) ? null :      
      <button onClick={this.resetTimer}>reset</button>          
    return (     
      <div className={`component-wrapper ${this.props.className}`}>
        <h3>timer: {(Math.floor(this.state.time / 10) / 100)} s</h3>        
        {/* {start}
        {resume}
        {stop}
        {reset} */}
      </div>
    );
  }
}
