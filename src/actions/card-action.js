export function increaseMoveCount(currentMoveCount) {
  return function(dispatch) {        
    dispatch({
      type: 'increaseMoveCount',
      moveCount: increaseCount(currentMoveCount),      
    })
  }
}

export function increaseMatchedPairCount(currentMatchedPairs) {
  return function(dispatch) {        
    dispatch({
      type: 'increaseMatchedPairCount',
      matchedPairs: increaseCount(currentMatchedPairs),      
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

function increaseCount(count) {
  return ++count;
}