import { combineReducers } from 'redux';
import authReducer from './auth-reducer'
import puzzleReducer from './puzzle-reducer'

export default combineReducers({
  auth: authReducer,
  puzzle: puzzleReducer
})