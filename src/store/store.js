import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

const initialState = {};
const middleware = [thunk];
const reduxDevTools = process.env.NODE_ENV === 'prod' ? null :
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
  rootReducer, 
  initialState, 
  compose(
    applyMiddleware(...middleware)
  )
);

// const storeDev = createStore(
//   rootReducer, 
//   initialState, 
//   compose(    
//     applyMiddleware(...middleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

/* Use when no redux dev tools */
export default store;

/* Use when dev with redux dev tools */
// export default storeDev;