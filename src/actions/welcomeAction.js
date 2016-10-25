import * as types from '../constants/actionTypes';

export function welcomeWord() {
	return function (dispatch) {
    return dispatch({
      type: types.WELCOME_WORD,
      payload: "Hi, too"
    });
 };
}