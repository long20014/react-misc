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

export  function saveScores(score) {
  return {
    type: 'saveScores',
    winningInfo: score
  }  
}


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
