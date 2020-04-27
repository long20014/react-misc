const initialState = {
  moveCount: 0,
  matchedPairs: 0,
  isWaiting: false,
  isWin: false,
  gameLevel: {
    level: 'Hard',
    arraySize: 4,
    shiftCase: getRandomInt(2)
  },
  winningInfo: []
}

function changeLevel(level) {
  switch (level) {
    case 'Normal':
      return {
        level,
        arraySize: 4
      }
    case 'Hard':
      return {
        level,
        arraySize: 4,
        shiftCase: getRandomInt(2),        
      }
    case 'Nightmare':
      return {
        level,
        arraySize: 4,
        toggle: false,
        unsuccessfulMoves: 0
      }
    default:
      return {
        level: 'Normal',
        arraySize: 4
      }
  }
}

function getRandomInt(max) {
  const result = Math.floor(Math.random() * Math.floor(max)) + 1;
  return result;
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
    case 'setWinningInfo':
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
    case 'alterMatchedPairCount':
      return {
        ...state,
        matchedPairs: action.matchedPairs
      };
    case 'restartGame':
      return {
        ...state,
        isWin: action.isWin,
        moveCount: action.moveCount,
        matchedPairs: action.matchedPairs,
      };
    case 'saveScores':
      return {
        ...state,
        winningInfo: action.winningInfo
      };
    case 'toggleShiftMode':
      return {
        ...state,
        gameLevel: {
          level: state.gameLevel.level,
          arraySize: state.gameLevel.arraySize,
          toggle: action.toggle,
          unsuccessfulMoves: state.gameLevel.unsuccessfulMoves
        }
      };
    case 'alterUnsuccessfulMoveCount':
      return {
        ...state,
        gameLevel: {
          level: state.gameLevel.level,
          arraySize: state.gameLevel.arraySize,
          toggle: state.gameLevel.toggle,
          unsuccessfulMoves: action.unsuccessfulMoves
        }
      };    
    default:
      return state;
  }
};