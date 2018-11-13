import config from './config';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

import express from 'express';
const server = express();

server.use(sassMiddleware({
	src: path.join(__dirname, 'sass'),
	dest: path.join(__dirname, 'public')
}));

// something for front end using ejs
server.set('view engine', 'ejs');

import serverRender from './serverRender';

// // Pre 3.1
// server.get('/', (req, res) => {
// 	res.send("Hello Poop")
// });

server.get('/', (req, res) => {
	serverRender()
		.then(content => {
			res.render('index', {
				content
			});
		})
		.catch(console.error);
});

server.use('/api', apiRouter);

// this line uses the html files from public folder
server.use(express.static('public'));

// unecessary code because of above line!
// import fs from 'fs';
// server.get('/about.html', (req, res) => {
// 	fs.readFile('./about.html', (err, data) => {
// 		res.send(data.toString())
// 	});
// });

server.listen(config.port, config.host, () => {
	console.info('Express listening on port ', config.port);
})






// Video2.2
// import http from 'http';

// const server = http.createServer((req, res) => {
// 	res.write('Hello HTTP!\n');
// 	setTimeout(() => {
// 		res.write('I can stream!\n');
// 		res.end();
// 	}, 3000);
// })

// server.listen(8088);

// server.on('request',
// });
