import constants from 'shared/constants';
import callApi from 'services/api-caller.service'

const config = constants.config;

export function fetchScores() {
  return async function(dispatch) { 
    return callApi(config.CARD_API_URL, 'card-score', 'GET', null).then(res => {
      const sortedWinningInfo = res.data.sort((info1, info2) => {
        return info1.winningInfo.moves - info2.winningInfo.moves;
      })
      dispatch(saveScores(sortedWinningInfo))
    })          
  }
}

export function saveScores(score) {
  return {
    type: 'saveScores',
    winningInfo: score
  }  
}

export function increaseUnsuccessfulMoveCount(currentUnsuccessfulMoveCount) {
  return function(dispatch) {        
    dispatch({
      type: 'alterUnsuccessfulMoveCount',
      unsuccessfulMoves: increaseCount(currentUnsuccessfulMoveCount, 2),      
    })
  }
}

export function resetUnsuccessfulMoveCount() {
  return function(dispatch) {        
    dispatch({
      type: 'alterUnsuccessfulMoveCount',
      unsuccessfulMoves: 0,      
    })
  }
}

export function increaseMoveCount(currentMoveCount) {
  return function(dispatch) {        
    dispatch({
      type: 'increaseMoveCount',
      moveCount: increaseCount(currentMoveCount, 1),      
    })
  }
}

export function alterMatchedPairCount(currentMatchedPairs, amount) {
  return function(dispatch) {        
    dispatch({
      type: 'alterMatchedPairCount',
      matchedPairs: increaseCount(currentMatchedPairs, amount),      
    })
  }
}


export function setWait(isWaiting) {
  return function(dispatch) {        
    dispatch({
      type: 'setWait',
      isWaiting,      
    })
  }
}

export function broadcastWinning() {
  return function(dispatch) {    
    dispatch({
      type: 'broadcastWinning',
      isWin: true
    })
  }
}

export function restartGame() {
  return function(dispatch) {    
    dispatch({
      type: 'restartGame',
      isWin: false,
      moveCount: 0,
      matchedPairs: 0,
    })
  }
}

export function changeGameLevel(level) {  
  return function(dispatch) {    
    dispatch({
      type: 'changeGameLevel',
      level
    })
  }
}

export function setWinningInfo(info) {  
  return function(dispatch) {    
    dispatch({
      type: 'setWinningInfo',
      winningInfo: info
    })
  }
}

export  function toggleShiftMode(toggle) {  
  return {
    type: 'toggleShiftMode',
    toggle: !toggle
  }  
}

function increaseCount(count, amount) {  
  return count + amount;
}
