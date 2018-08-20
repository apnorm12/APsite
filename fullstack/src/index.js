import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import App from './components/App';

import data from './testData';

// One responsibility now - Render top component to the DOM

// Renders the App component to the DOM
ReactDOM.render(
	<App />,
	// createElement(html tag, attributes, children we want element to have)
	// React.createElement('h2', null, 'Hello React'),
	document.getElementById('root')
);

ReactDOM.render(
	<Header message=":)"/>,
	document.getElementById('poop-root')
);


// setTimeout(() => {
// 	ReactDOM.render(
// 		<h2> Test Unmount </h2>,
// 		document.getElementById('root')
// 	);
// }, 4000);
