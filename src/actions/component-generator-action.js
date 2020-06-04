export function changeStyle(currentStyle) {
  console.log(currentStyle);  
  return function(dispatch) {        
    dispatch({
      type: 'changeStyle',
      componentStyle: currentStyle,      
    })
  }
} 