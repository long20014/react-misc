export function changeStyle(currentStyle) {  
  return function(dispatch) {        
    dispatch({
      type: 'changeStyle',
      componentStyle: currentStyle,      
    })
  }
} 

export function changeHtml(html) {
  return function(dispatch) {        
    dispatch({
      type: 'changeHtml',
      componentHtml: html,      
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

export function addOption(option, currentOptions) {  
  return function(dispatch) { 
    dispatch({
      type: 'addOption',
      options: [...currentOptions, option]  
    })
  }
}

const convertStyleToCss = (style) => {
  const className = '.component-class ';
  let css = `{`; 
  for (const key in style) {
    css = css + '\n  ' + key + ': ' + style[key] + ';';    
  }
  css = css + '\n}'
  return className + css;
}