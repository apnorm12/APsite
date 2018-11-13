import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


import Header from './components/Header';
import App from './components/App';

import data from './testData';


// ReactDOM.render(
// 	<App initialContests={[]}/>,
// 	document.getElementById('root')
// );

axios.get('/api/contests') //gives us a promise
//.then gives us a response object
	.then(resp => {
		// this line showed the response - and we could see a data field
		// console.log(resp); - know we want resp.data.contests in setState
		ReactDOM.render(
			<App initialContests={resp.data.contests}/>,
			document.getElementById('root')
		);
	})
	.catch(console.error);

// One responsibility now - Render top component to the DOM

// Renders the App component to the DOM


// ReactDOM.render(
// 	<Header message=":)"/>,
// 	document.getElementById('poop-root')
// );


// setTimeout(() => {
// 	ReactDOM.render(
// 		<h2> Test Unmount </h2>,
// 		document.getElementById('root')
// 	);
// }, 4000);
