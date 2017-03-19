'use strict'

let gulp = require('gulp');
let http = require('http');
let fs = require('fs');
let url = require('url');

let config = {
	server: '127.0.0.1'
	, port: 8081
}

let count = 1;

let server = new http.Server();

server.on('request',(req, res) => {
	console.log(count++);
	let pathName = url.parse(req.url).pathname || 'index.html';
	console.log(pathName);

	switch(pathName){
		case ''||'/':
			parseFiles('/index.html', res);
			break;
		default: 
			parseFiles(pathName);
			break;
	}

})

let parseFiles = (url,res) => {
	let fileName = url.slice(1);
	let type = getType(fileName.lastIndexOf('.') + 1);

	fs.readFile('./src/' + fileName, (err, data) => {
		if(err){
			res.writeHead(404, { 'Content-Type':'text/plain; charset="UTF-8"' });
			res.write(err.message);
			res.end();
		} else {
			res.writeHead(200, { 'Content-Type': type });
			res.write(data);
			res.end();
		}
	})
}

let getType = (endTag) => {
	var type = null;
	switch (endTag) {
		case 'html':
		case 'htm':
			type = 'text/html; charset=UTF-8';
			break;
		case 'js':
			type = 'application/javascript; charset="UTF-8"';
			break;
		case 'css':
			type = 'text/css; charset="UTF-8"';
			break;
		case 'txt':
			type = 'text/plain; charset="UTF-8"';
			break;
		case 'manifest':
			type = 'text/cache-manifest; charset="UTF-8"';
			break;
		default:
			type = 'application/octet-stream';
			break;
	}
	return type;
}


gulp.task('default', function(){
	server.listen(config.port);
});

