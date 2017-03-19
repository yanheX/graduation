'use strict'

let gulp = require('gulp');
let http = require('http');
let fs = require('fs');
let url = require('url');

let config = {
	server: '127.0.0.1'
	, proxy: '8081'
}

let count = 1;

let server = http.createServer((req, res) => {
	console.log(count++);
	let pathName = url.parse(req.url).pathname || 'index.html';
	// pathName = pathName === '/'? 'src' + pathName + 'index.html' : 'src' + pathName
	// let path = pathname.split('/');
	console.log(pathName);
	if(pathName.slice(-3) === 'css'){
		res.writeHead(200,{'Content-Type':'text/css'});
	}else{
		res.writeHead(200,{'Content-Type':'text/html'});
	}
	fs.readFile( '/毕业设计' + pathName,'utf8',(err,data) => {
		if(err){
			// throw err;
		}
		res.end(data)

	})
})

gulp.task('default', function(){
	server.listen(config.proxy,config.server,()=>{
		console.log('start');
	});
});

