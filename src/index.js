import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import reducers from './reducers';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const store = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render( 
	<Provider store={store(reducers)}>
		<App />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
