const initialState = {
  componentStyle: {
    width: "auto",
    height: "auto"   
  },
  label: "component A"
}

export default function (state = initialState, action) {
  switch (action.type) {
    case "changeStyle":
      console.log('changeStyle');
      return {
        ...state,
        componentStyle: action.componentStyle
      }
    default:
      return state;
  }
}
