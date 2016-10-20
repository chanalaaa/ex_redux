import {WELCOME_WORD} from '../constants/actionTypes';

export default function reducer(state = {welcome_word: "hello"}, action) {
	switch(action.type){
		case WELCOME_WORD:
			return {...state, welcome_word: action.payload};
		default:
			return state; 
	}
}