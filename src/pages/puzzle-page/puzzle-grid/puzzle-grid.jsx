import React from 'react';
import './puzzle-grid.scss';
import PuzzleGridSlot from '../puzzle-grid-slot/puzzle-grid-slot';
import Timer from 'components/timer/timer';
import GRID_SIZE_LV1 from 'shared/constants';
import * as _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { broadcastWinning, restartGame, getWinningInfo } from 'actions/puzzle-action';
import GridService from 'services/grid.service';

const gridService = GridService();

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

const gridStyle = { 
  width: `${GRID_SIZE_LV1.width * gridSlotSize(GRID_SIZE_LV1).width + 30}px`,
  height: `${GRID_SIZE_LV1.height * gridSlotSize(GRID_SIZE_LV1).height + 30}px`,  
  gridTemplateColumns: `repeat(${GRID_SIZE_LV1.width}, ${gridSlotSize(GRID_SIZE_LV1).width}px)`,
  gridTemplateRows: `repeat(${GRID_SIZE_LV1.height}, ${gridSlotSize(GRID_SIZE_LV1).height}px)`,
  gridGap: `10px`,
  border: `1px solid wheat`,  
}

class PuzzleGrid extends React.Component {
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
    this.props.getWinningInfo(winningInfo)
  }

  constructor(props) {
    super(props);
    this.announceWinning = this.announceWinning.bind(this);
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
    this.initDraggingEnvironment();   
  }

  componentWillUnmount() {
    this.props.restartGame();
  }

  getEmptySlotIds(gridSize, emptySlotQuantity) {
    const emptySlotIds = [];
    let count = 0;
    while (count < emptySlotQuantity) {
      const emptySlotId = Math.floor(Math.random()*100 % gridSize);
      if (emptySlotIds.includes(emptySlotId)) {
        continue;
      }
      emptySlotIds.push(emptySlotId)
      count++; 
    }
    return emptySlotIds;    
  }


  createGridSlots(emptySlotQuantity) {
    const slots = [];
    const gridSize = GRID_SIZE_LV1.height * GRID_SIZE_LV1.width;
    const emptySlotIds = this.getEmptySlotIds(gridSize, emptySlotQuantity);
    const pieceIdSet = gridService.getPieceIdSet(gridSize, emptySlotQuantity);    
    for (let i = 0; i < gridSize; i++) {
      let pieceId = null;
      if (!emptySlotIds.includes(i)) {
        pieceId = gridService.getRandomPieceId(pieceIdSet);
      }
      slots.push(<PuzzleGridSlot id={i} key={i} pieceId={pieceId} />)
    }
    return slots;
  }

  initDraggingEnvironment() {
    let gridSlots = Array.from(document.querySelectorAll('.puzzle-grid__slot'));    
    let emptySlots = gridService.findEmptySlots(gridSlots)    
    let transformedSlots = gridService.transformSlots(gridSlots, emptySlots, this.gameSettings.arraySize);
    const puzzlePieces = Array.from(document.querySelectorAll('.puzzle-piece'));    
    gridService.coloringEmptySlots(emptySlots, this.emptySlotBg)     
    let draggedItem = null;
    let originalSlot = null;

    puzzlePieces.forEach(piece => {      
      piece.addEventListener('dragstart', () => {
        originalSlot = piece.parentElement;        
        draggedItem = piece;
        setTimeout(() => {
          piece.style.display = 'none';
        })
      });
      
      piece.addEventListener('dragend', () => {       
        setTimeout(() => {          
          draggedItem.style.display = 'flex';
          draggedItem = null
        })
      });  
      
      gridSlots.forEach(slot => {
        const slotOriginalColor = slot.style.backgroundColor;

        slot.addEventListener('dragover', (e) => {
          e.preventDefault();          
        });

        slot.addEventListener('dragenter', (e) => {
          e.preventDefault();
          if (originalSlot.id !== slot.id && !slot.hasChildNodes()) {
            slot.style.backgroundColor = this.hoveredSlotBg;          
          }                
        });

        slot.addEventListener('dragleave', (e) => {
          e.preventDefault();
          const emptySlotIds = gridService.getIdNumbers(emptySlots);
          const slotId = gridService.getIdNumber(slot)
          if (!emptySlotIds.includes(slotId)  ) {
            slot.style.backgroundColor = this.slotBg;   
          }
          else {
            slot.style.backgroundColor = this.emptySlotBg  
          }                 
        });
        
        slot.addEventListener('drop', (e) => {          
          const draggedSlot = draggedItem.parentNode;          
          const slotId = gridService.getIdNumber(slot)
          const draggedSlotId = gridService.getIdNumber(draggedSlot)
          console.log(draggedSlot);                       
          if (!slot.hasChildNodes() && gridService.isAdjacent(slotId, draggedSlotId, this.gameSettings.arraySize)) {            
            slot.append(draggedItem)            
            slot.style.backgroundColor = this.slotBg
            gridSlots = Array.from(document.querySelectorAll('.puzzle-grid__slot'));    
            emptySlots = gridService.findEmptySlots(gridSlots)
            gridService.coloringEmptySlots(emptySlots, this.emptySlotBg)    
            transformedSlots = gridService.transformSlots(gridSlots, emptySlots, this.gameSettings.arraySize);            
            setTimeout(() => this.checkWiningCondition(transformedSlots, emptySlots), 100)            
          }
          else if (slotId !== draggedSlotId) {
            slot.style.backgroundColor = slotOriginalColor;
          }          
        });         
      })
    });
  }

  checkWiningCondition(gridSlots, emptySlots) {
    let count = 0;
    const winningCount = gridSlots.length - emptySlots.length;       
    gridSlots.forEach(slot => {
      const child = slot.firstElementChild;
      const slotId = gridService.getIdNumber(slot);
      let childId = null;
      if (child) {
        childId = gridService.getIdNumber(child)
      }
      if (slotId === childId) {
        count++;
      }
    })       
    if (count === winningCount) {
      this.announceWinning();
    }
  }

  announceWinning() {
    this.props.broadcastWinning();    
    setTimeout(() => {
      console.log('You win the game', this.props.isWin);
      alert('Congratulation! You win the game')  
    }, 100)      
  }
  
  render() {    
    const gridSlots = this.createGridSlots(this.gameSettings.emptySlotQuantity);    
    return (
      <div className="component-wrapper puzzle-wrapper">
        <div className="puzzle-grid" style={gridStyle}>
          {gridSlots.map(item => item)}
        </div>
        <Timer className={'timer-pos'} 
          stop={this.isWin} 
          updateStop={this.subscribeWinning} 
          emitTime={this.getEmittedTime}
        />
        {/* <button onClick={this.announceWinning}>Win</button> */}
      </div>
    );
  }  
}

PuzzleGrid.propsType = {
  broadcastWinning: PropTypes.func.isRequired,
  restartGame: PropTypes.func.isRequired,
  getWinningInfo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isUpdated: false,
  isWin: state.puzzle.isWin,
  gameLevel: state.puzzle.gameLevel
})

export default connect(mapStateToProps, { broadcastWinning, restartGame, getWinningInfo })(PuzzleGrid);