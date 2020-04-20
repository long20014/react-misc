import React from 'react';
import './card-grid.scss';
import CardGridSlot from '../card-grid-slot/card-grid-slot';
import Counter from '../counter/counter'
import Timer from 'components/timer/timer';
import constants from 'shared/constants';
import * as _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { broadcastWinning, restartGame, setWinningInfo } from 'actions/card-action';
import GridService from 'services/grid.service';
import CardGridService from 'services/card-grid.service';

const gridService = GridService();
const cardGridService = CardGridService();

const gridSlotSize = (gridSize) => {
  let width = 160
  let height = 160
  if (gridSize.width > 3 || gridSize.height > 3) {
    width = 120
    height = 120 
  }
  return {
    width,
    height
  }  
}

const gap = 10;
const HorizontalGaps = constants.GRID_SIZE_LV2.width * gap;
const VerticalGaps = constants.GRID_SIZE_LV2.height * gap;

const gridStyle = { 
  width: `${constants.GRID_SIZE_LV2.width * gridSlotSize(constants.GRID_SIZE_LV2).width + HorizontalGaps}px`,
  height: `${constants.GRID_SIZE_LV2.height * gridSlotSize(constants.GRID_SIZE_LV2).height + VerticalGaps}px`,  
  gridTemplateColumns: `repeat(${constants.GRID_SIZE_LV2.width}, ${gridSlotSize(constants.GRID_SIZE_LV2).width}px)`,
  gridTemplateRows: `repeat(${constants.GRID_SIZE_LV2.height}, ${gridSlotSize(constants.GRID_SIZE_LV2).height}px)`,
  gridGap: `${gap}px`,
  border: `1px solid wheat`,  
}

class CardGrid extends React.Component {
  emptySlotBg = 'rgba(255, 255, 255, 0.3)';
  slotBg = 'rgba(255, 255, 255, 1)';
  hoveredSlotBg = 'rgba(255, 255, 255, .6)';
  _isMounted = false;
  isWin = false; 
  subscribeWinning = (callback) => {
    this.isWin = this.props.isWin;      
    callback(this.isWin);
  }
  getEmittedTime = (emittedTime) => {
    console.log('get time');     
    const winningInfo = {
      playedTime: emittedTime,
      playerName: 'Unknown player',
      level: this.props.gameLevel.level
    }
    this.props.setWinningInfo(winningInfo)
  }  

  constructor(props) {
    super(props);    
    this.getMoveCount = this.getMoveCount.bind(this);
    this.getMatchedPairs = this.getMatchedPairs.bind(this);
    this.gameSettings = {
      emptySlotQuantity: props.gameLevel.emptySlotQuantity,
      arraySize: props.gameLevel.arraySize
    }   
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.isUpdated) {
      return true;
    }
    return false;
  }

  componentDidMount() {    
    
  }

  componentWillUnmount() {
    this.props.restartGame();
  }

  createGridSlots() {
    const slots = [];
    const gridSize = constants.GRID_SIZE_LV2.height * constants.GRID_SIZE_LV2.width;    
    const pieceIdSet = gridService.getPieceIdSet(gridSize);
    const pieceNames = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H']    
    for (let i = 0; i < gridSize; i++) {
      const name = cardGridService.getRandomPieceName(pieceNames);
      let pieceId = gridService.getRandomPieceId(pieceIdSet);          
      slots.push(<CardGridSlot id={i} key={i} pieceId={pieceId} name={name}/>)
    }
    return slots;
  } 

  getMoveCount(callback) {                   
    callback(this.props.moveCount)
  } 
  
  getMatchedPairs(callback) {                   
    callback(this.props.matchedPairs)
  }
  
  render() {    
    const gridSlots = this.createGridSlots(this.gameSettings.emptySlotQuantity);    
    return (
      <div className="component-wrapper card-wrapper">
        <div className="card-grid" style={gridStyle}>
          {gridSlots.map(item => item)}
        </div>
        {/* <Timer className={'timer-pos'} 
          stop={this.isWin} 
          updateStop={this.subscribeWinning} 
          emitTime={this.getEmittedTime}
        /> */}
        <Counter className={'text-pos'} 
          label="Moves"
          updateCount={this.getMoveCount} 
          count={this.props.moveCount}/>
        <Counter className={'text-pos-2'} 
          label="Matches"
          updateCount={this.getMatchedPairs} 
          count={this.props.matchedPairs}/> 
      </div>
    );
  }  
}

CardGrid.propsType = {
  broadcastWinning: PropTypes.func.isRequired,
  restartGame: PropTypes.func.isRequired,
  setWinningInfo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isUpdated: false,
  isWin: state.card.isWin,
  gameLevel: state.card.gameLevel,
  moveCount: state.card.moveCount,
  matchedPairs: state.card.matchedPairs
})

export default connect(mapStateToProps, { broadcastWinning, restartGame, setWinningInfo: setWinningInfo })(CardGrid);