import {LOGIN, LOGOUT} from 'actions/type';
import { STORAGE_KEYS } from 'utils/constants';
import { getIsLoggedIn } from 'utils';

export function loginAction() {
  return function(dispatch) {
    localStorage.setItem(STORAGE_KEYS.IS_LOGGED_IN, 'true');
    dispatch({
      type: LOGIN,
      isLoggedIn: getIsLoggedIn()
    })
  }
}

export function logoutAction() {
  return function(dispatch) {
    localStorage.removeItem(STORAGE_KEYS.IS_LOGGED_IN);
    dispatch({
      type: LOGOUT,
      isLoggedIn: getIsLoggedIn()
    })
  }
}