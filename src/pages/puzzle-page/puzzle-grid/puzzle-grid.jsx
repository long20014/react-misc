import React from 'react';
import './puzzle-grid.scss';
import PuzzleGridSlot from '../puzzle-grid-slot/puzzle-grid-slot';
import PuzzleSwapCount from '../puzzle-swap-count/puzzle-swap-count'
import Timer from 'components/timer/timer';
import constants from 'shared/constants';
import * as _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { broadcastWinning, restartGame, setWinningInfo } from 'actions/puzzle-action';
import GridService from 'services/grid.service';

const gridService = GridService();

const gridSlotSize = (gridSize) => {
  let width = window.innerWidth <= 540 ? 90 : 160;
  let height = window.innerWidth <= 540 ? 90 : 160;
  if (gridSize.width > 3 || gridSize.height > 3) {
    if (window.innerWidth <= 540) {
      width = 70;
      height = 70; 
    } else {
      width = 120;
      height = 120; 
    }    
  }
  return {
    width,
    height
  }  
}

const gap = 10;
const HorizontalGaps = constants.GRID_SIZE_LV1.width * gap
const VerticalGaps = constants.GRID_SIZE_LV1.height * gap

const gridStyle = { 
  width: `${constants.GRID_SIZE_LV1.width * gridSlotSize(constants.GRID_SIZE_LV1).width + HorizontalGaps}px`,
  height: `${constants.GRID_SIZE_LV1.height * gridSlotSize(constants.GRID_SIZE_LV1).height + VerticalGaps}px`,  
  gridTemplateColumns: `repeat(${constants.GRID_SIZE_LV1.width}, ${gridSlotSize(constants.GRID_SIZE_LV1).width}px)`,
  gridTemplateRows: `repeat(${constants.GRID_SIZE_LV1.height}, ${gridSlotSize(constants.GRID_SIZE_LV1).height}px)`,
  gridGap: `${gap}px`,
  border: `1px solid wheat`,  
}

class PuzzleGrid extends React.Component {
  emptySlotBg = 'rgba(255, 255, 255, 0.3)';
  slotBg = 'rgba(255, 255, 255, 1)';
  hoveredSlotBg = 'rgba(255, 255, 255, .6)';
  swapChanceCount = 1;
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
    this.announceWinning = this.announceWinning.bind(this);
    this.getSwapChanceCount = this.getSwapChanceCount.bind(this);
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

  createEmptySlotIds(gridSize, emptySlotQuantity) {
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
    const gridSize = constants.GRID_SIZE_LV1.height * constants.GRID_SIZE_LV1.width;
    const emptySlotIds = this.createEmptySlotIds(gridSize, emptySlotQuantity);
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

  getSwapChanceCount(callback) {                   
    callback(this.swapChanceCount)
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
          draggedItem.style.display = 'none';
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
          if (!emptySlotIds.includes(slotId)) {
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
          if (!slot.hasChildNodes() && gridService.isAdjacent(slot, draggedSlot, this.gameSettings.arraySize)) { 
            draggedItem.style.display = 'flex';           
            slot.append(draggedItem)            
            slot.style.backgroundColor = this.slotBg
            gridSlots = Array.from(document.querySelectorAll('.puzzle-grid__slot'));    
            emptySlots = gridService.findEmptySlots(gridSlots)
            gridService.coloringEmptySlots(emptySlots, this.emptySlotBg)    
            transformedSlots = gridService.transformSlots(gridSlots, emptySlots, this.gameSettings.arraySize);            
            setTimeout(() => {
              if (this.checkWiningCondition(transformedSlots, emptySlots)) {
                this.announceWinning();
              }              
            }, 100)            
          }
          else if (slot.hasChildNodes() && this.swapChanceCount > 0) {            
            const swapSuccess = gridService.swapPieces(draggedSlot, slot, this.gameSettings.arraySize)
            slot.firstElementChild.style.display = 'flex';
            transformedSlots = gridService.transformSlots(gridSlots, emptySlots, this.gameSettings.arraySize);
            if (swapSuccess) {
              this.swapChanceCount--;
            } 
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
      return true;
    }
    return false;
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
        <PuzzleSwapCount className={'text-pos'} updateCount={this.getSwapChanceCount} swapChanceCount={this.swapChanceCount}/>
        {/* <button onClick={this.announceWinning}>Win</button> */}
      </div>
    );
  }  
}

PuzzleGrid.propsType = {
  broadcastWinning: PropTypes.func.isRequired,
  restartGame: PropTypes.func.isRequired,
  setWinningInfo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isUpdated: false,
  isWin: state.puzzle.isWin,
  gameLevel: state.puzzle.gameLevel
})

export default connect(mapStateToProps, { broadcastWinning, restartGame, setWinningInfo })(PuzzleGrid);