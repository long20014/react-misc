const initialState = {
  componentStyle: {
    width: "auto",
    height: "auto"   
  },
  label: "component A",
  code: {
    html: ``,
    css: 
`{
  width: auto;
  height: auto;
}
`
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case "changeStyle":      
      return {
        ...state,
        componentStyle: action.componentStyle
      }
    case "exportCode":
      console.log(action.code);      
      return {
        ...state,
        code: action.code
      }
    default:
      return state;
  }
}
