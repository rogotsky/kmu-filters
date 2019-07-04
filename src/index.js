import React from 'react';
import { render } from 'react-dom';
import store from './store/store';
import { Provider } from 'react-redux';
import App from './App';

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
