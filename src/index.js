import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './store/reducers';
import App from './App';

const store = createStore(rootReducer);

const init = () => {
	const mountNode = document.getElementById('react-app');
	render(
			<Provider store={store}>
				<App />
			</Provider>,
			mountNode
	);
};

init();
