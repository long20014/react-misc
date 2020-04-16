import React from 'react';
import './counter.scss';

export default class Counter extends React.Component {
  _isMounted = false;
  _stopSubscribe = false;
  subscribeCount = () => {    
    this.props.updateCount((count) => {               
      if (!this._stopSubscribe && count !== this.state.count) {
        this.setState(state => state.count = count)        
      }                    
    })
  }

  constructor(props){
    super(props)
    this.state = {
      subscribeTimer: 0,
      count: props.count      
    }
    this.startSubscribe.bind(this)    
  }

  componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      this.startSubscribe();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
    this._stopSubscribe = true;        
  }

  startSubscribe() {    
    setInterval(() => this.setState({
      subscribeTimer: this.state.subscribeTimer + 1
    }), 50);
  }

  render() {    
    if (!this._stopSubscribe) {
      setTimeout(() => this.subscribeCount(), 0)    
    }
                 
    return (     
      <div className={`component-wrapper ${this.props.className}`}>
        <p>{this.props.label}: {this.state.count}</p>
      </div>
    );
  }
}
