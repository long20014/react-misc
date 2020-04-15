import { combineReducers } from 'redux';
import authReducer from './auth-reducer'
import puzzleReducer from './puzzle-reducer'
import cardReducer from './card-reducer';

export default combineReducers({
  auth: authReducer,
  puzzle: puzzleReducer,
  card: cardReducer
})