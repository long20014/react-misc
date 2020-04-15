const CardGridService = () => {
  return {    
    getRandomPieceName,    
  }
};

const getRandomPieceName = (pieceNames) => {       
  const splicePos = Math.floor(Math.random()*100 % pieceNames.length)
  const pieceId = pieceNames.splice(splicePos, 1)
  return pieceId[0]; 
}

export default CardGridService;