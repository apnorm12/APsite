// fetch the data from the api
//
// Instead of waiting for React to warm up, render the components, and then
// go back to the server to fetch the data, we can have an initial view ready
// by the server.

// Need to edit server.get(..content...)

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import config from './config';
import axios from 'axios';

const serverRender = () =>
  axios.get(`${config.serverUrl}/api/contests`)
    .then(resp => {
      // render react codes and render everything to string
      return ReactDOMServer.renderToString(
        <App initialContests={resp.data.contests}/>
      );
      // console.log(resp.data);
    });



// const serverRender = () =>
//   axios.get(`${config.serverUrl}/api/contests`)
//     .then(resp => {
//       // render react codes and render everything to string
//       return ReactDOMServer.renderToString(
//         <Test/>
//       );
//       // console.log(resp.data);
//     });
export default serverRender;
