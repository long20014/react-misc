export function changeStyle(currentStyle) {  
  return function(dispatch) {        
    dispatch({
      type: 'changeStyle',
      componentStyle: currentStyle,      
    })
  }
} 

export function exportCode(currentStyle, html) {   
  return function(dispatch) {        
    dispatch({
      type: 'exportCode',
      code: {
        html,
        css: convertStyleToCss(currentStyle)
      }     
    })
  }
} 

const convertStyleToCss = (style) => {
  let css = `{`; 
  for (const key in style) {
    css = css + '\n  ' + key + ': ' + style[key] + ';';    
  }
  css = css + '\n}'
  return css;
}