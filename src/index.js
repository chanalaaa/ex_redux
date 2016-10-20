/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {Router,browserHistory } from 'react-router';
import routes from './routes.js';
import configureStore from './store/configureStore';
import './style/style.scss';
import { syncHistoryWithStore } from 'react-router-redux';



const store = configureStore();
const app = document.getElementById('app');
const history = syncHistoryWithStore(browserHistory, store);

render(
	<Provider store={store}>
		<Router history={history} routes={routes} />
	</Provider>,app
);


