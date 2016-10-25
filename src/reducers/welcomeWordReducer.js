import {WELCOME_WORD} from '../constants/actionTypes';

export default function reducer(state = {
	welcome_word: {
      word: 'init Hello',
    }
	}, action) {
	switch(action.type){
		case WELCOME_WORD:
			return {
				...state, 
				welcome_word: {...state.welcome_word,word: action.payload}};
		default:
			return state; 
	}
}