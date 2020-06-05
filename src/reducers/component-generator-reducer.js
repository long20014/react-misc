import { availableComponents } from 'pages/component-generator-page/constants';

const initialState = {
  label: 'component A',
  options: ['height', 'width', 'border', 'border-radius', 'background'],
  components: availableComponents,
  componentStyle: {
    width: 'auto',
    height: 'auto'   
  },  
  componentHtml: '',
  code: {
    html: '',
    css: ''
  },
}

export default function (state = initialState, action) {
  switch (action.type) {
    case "changeStyle":      
      return {
        ...state,
        componentStyle: action.componentStyle
      }
    case "changeHtml":      
      return {
        ...state,
        componentHtml: action.componentHtml
      }
    case "exportCode":          
      return {
        ...state,
        code: action.code,
        isCodeExporting: action.isCodeExporting
      }    
    case "addOption":     
      return {
        ...state,
        options: action.options
      }    
    default:
      return state;
  }
}
