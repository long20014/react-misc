const initialState = {
  moveCount: 0,
  matchedPairs: 0,
  isWaiting: false,
  isWin: false,
  gameLevel: {
    level: 'Normal',    
    arraySize: 4
  },
  winningInfo: []
}

const changeLevel = (level) => {
  switch (level) {   
    case 'Normal':
      return {
        level,        
        arraySize: 4
      }
    case 'Hard':
      return {
        level,        
        arraySize: 4
      }
    default:
      return {
        level: 'Normal',        
        arraySize: 4
      }
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'broadcastWinning':
      return {
        ...state,
        isWin: action.isWin
      };
    case 'changeGameLevel':
      return {
        ...state,
        gameLevel: changeLevel(action.level)
      };
    case 'getWinningInfo':
      return {
        ...state,
        winningInfo: [...state.winningInfo, action.winningInfo]
      };
    case 'increaseMoveCount':
      return {
        ...state,
        moveCount: action.moveCount
      };
    case 'setWait':
      return {
        ...state,
        isWaiting: action.isWaiting
      };
    case 'increaseMatchedPairCount':
      return {
        ...state,
        matchedPairs: action.matchedPairs
      };
    default:
      return state;
  }
};