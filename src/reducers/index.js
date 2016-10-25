 import { combineReducers } from 'redux';
 import welcomeWordReducer from "./welcomeWordReducer";
 import {routerReducer} from 'react-router-redux';

const rootReducer =  combineReducers({
	welcomeWordReducer,
	routing: routerReducer
 });


export default rootReducer;