const GridService = () => {
  return {
    getPieceIdSet,
    getRandomPieceId,
    getIdNumber,
    getIdNumbers,
    findEmptySlots,
    coloringEmptySlots,
    transformSlots,
    isAdjacent
  }
};

const getIdNumber = (item) => {
  return item.id.split('-')[1]
}

const getIdNumbers = (items) => {
  const ids = []
  items.forEach(item => {
    const id = getIdNumber(item);
    ids.push(id)
  })
  return ids;
}

const getPieceIdSet = (gridSize, emptySlotQuantity) => {
  const pieceIdSet = [];
  for (let i = 0; i < gridSize - emptySlotQuantity; i++) {      
    pieceIdSet.push(i)      
  }
  return pieceIdSet
}

const getRandomPieceId = (pieceIdSet) => {       
  const splicePos = Math.floor(Math.random()*100 % pieceIdSet.length)
  const pieceId = pieceIdSet.splice(splicePos, 1)
  return pieceId[0]; 
}

const findEmptySlots = (slots) => {    
  let emptySlots = [];
  slots.forEach(slot => {
    if (!slot.hasChildNodes()) {
      emptySlots.push(slot);        
    }
  })
  return emptySlots;
}

const coloringEmptySlots = (emptySlots, color) => {
  emptySlots.forEach(emptySlot => emptySlot.style.backgroundColor = color);  
}

const transformSlots = (slots, emptySlots, arraySize) => {    
  const transformedSlots = [];
  const emptySlotIds = getIdNumbers(emptySlots);

  slots.forEach(slot => {
    const slotId = getIdNumber(slot);
    let draggableChecked = false;     
    emptySlotIds.forEach(emptySlotId => {
      if (!emptySlotIds.includes(slotId) && !draggableChecked) {        
        let childDraggable = slot.firstElementChild.draggable;
        if (isAdjacent(slotId, emptySlotId, arraySize) && !childDraggable) {
          slot.firstElementChild.draggable = true;
          draggableChecked = true;       
        }
        else {
          slot.firstElementChild.draggable = false;  
        }  
      }         
    });   
    transformedSlots.push(slot);
  })
  return transformedSlots;
}

const isAdjacent = (slotId, comparedSlotId, arraySize) => {
  slotId = +slotId;
  comparedSlotId = + comparedSlotId; 
  if ((slotId === comparedSlotId + 1 && Math.floor(slotId/arraySize) === Math.floor(comparedSlotId/arraySize)) ||
    (slotId === comparedSlotId - 1 && Math.floor(slotId/arraySize) === Math.floor(comparedSlotId/arraySize)) ||
    slotId === comparedSlotId + arraySize ||
    slotId === comparedSlotId - arraySize) 
  {
    return true;
  }
  return false
}

export default GridService;