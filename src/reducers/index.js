// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import welcomeWord from "./welcomeWordReducer";
 import {routerReducer} from 'react-router-redux';

const rootReducer =  combineReducers({
	welcomeWord,
	routing: routerReducer
 });


export default rootReducer;