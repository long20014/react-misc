
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
      type: 'broadcastWinning',
      isWin: false
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
