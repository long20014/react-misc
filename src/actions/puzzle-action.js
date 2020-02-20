
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

export function getWinningInfo(info) {  
  return function(dispatch) {    
    dispatch({
      type: 'getWinningInfo',
      winningInfo: info
    })
  }
}
