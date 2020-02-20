const initialState = {
  isWin: false,
  gameLevel: {
    level: 'Normal',
    emptySlotQuantity: 2,
    arraySize: 3
  },
  winningInfo: []
}

const changeLevel = (level) => {
  switch (level) {
    case 'Easy':
      return {
        level,
        emptySlotQuantity: 3,
        arraySize: 3
      }
    case 'Normal':
      return {
        level,
        emptySlotQuantity: 2,
        arraySize: 3
      }
    case 'Hard':
      return {
        level,
        emptySlotQuantity: 1,
        arraySize: 3
      }
    default:
      return {
        level: 2,
        emptySlotQuantity: 2,
        arraySize: 3
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
      console.log(state.winningInfo);
      console.log(action.winningInfo);
      return {
        ...state,
        winningInfo: [...state.winningInfo, action.winningInfo]
      };
    default:
      return state;
  }
};