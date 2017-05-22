'use strict'

let gulp = require('gulp');
let http = require('http');
let fs = require('fs');
let url = require('url');
let concat = require('gulp-concat');

let config = {
	//server: '139.129.235.177'
	server: '127.0.0.1'
	, port: 8888
	, src_lib: './src/libs'
	, src_js: './src/scripts'
	, dist: './dist'
}

let count = 1;

let server = http.createServer((req, res) => {
	let pathName = url.parse(req.url).pathname || 'index.html';
	switch(pathName){
		case ''||'/':
			parseFiles('/index.html', res);
			break;
		default: 
			parseFiles(pathName, res);
			break;
	}

})

let parseFiles = (url,res) => {

	let fileName = url.slice(1);
	let type = getType(fileName.slice(fileName.lastIndexOf('.') + 1));
	let router = './src/';

	if(url.substr(1,4) === 'dist'){
		router = './'
	}

	fs.readFile(router + fileName, (err, data) => {
		if(err){
			res.writeHead(404, { 'Content-Type':'text/plain; charset="UTF-8"' });
			// res.write(err.message);
			res.end(err.message);
		} else {
			res.writeHead(200, { 'Content-Type': type });
			// res.write(data);
			res.end(data);
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

function concatJS(){
	fs.stat('./dist' , (err, stats) => {
		if(err){
			fs.mkdir('./dist');
		}
	})
	let before = ['src/libs/three.min.js', 'src/libs/OrbitControls.js', 'src/libs/OBJLoader.js', 'src/libs/Detector.js', 'src/libs/stats.min.js', 'src/libs/dat.GUI.min.js'];
	let middle = ['src/app/pack-before.js', 'src/app/loader.js', 'src/app/kit.js'];
	let after = ['src/scripts/*.js','src/scripts/draw/*.js', 'src/app/pack-after.js'];
	gulp.src(before.concat(middle, after))
		.pipe(concat('controls.js'))
		.pipe(gulp.dest('dist'));
}

function deleteAllFiles(path){
	fs.exists(path, (e) => {
		if(!e){
			return;
		}
		fs.readdir(path, (err, files) => {
			if(err){
				return ;
			}
			let filesLength = files.length;
			files.forEach((item, index) => {
				let Path = path;
				Path += ('/' + item);
				fs.stat(Path, (err, stats) => {
					if(err){
						return;
					}

					if(stats.isDirectory()){
						deleteAllFiles(path + '/' + item);
					} else{
						fs.unlink(Path);
					}

				})
			})
		});
	})
}

function deleteDiectory(path, level){
	fs.exists(path, (e) => {
		console.log(1)
		if(!e){
			console.log(2);
			return;
		}
		fs.readdir(path, (err, files) => {
			console.log(3);
			if(err){
				console.log(4);
				return ;
			}
			let filesLength = files.length;
			if(!filesLength && level){
				console.log('path ->', path)
				fs.rmdir(path);
			}
			files.forEach((item, index) => {
				console.log(5);
				let Path = path;
				Path += ('/' + item);
				fs.stat(Path, (err, stats) => {
					console.log(6);
					if(err){
						console.log(7);
						return;
					}
					if(stats.isDirectory()){
						console.log(8);
						deleteDiectory(path + '/' + item, level + 1);
					}
				})
			})
		});
	})
}




gulp.task('default',['pack', 'watch'], function(){
	server.listen(config.port);
});


// gulp.task('pack',['rmdirs'], function(){
gulp.task('pack',['rmfiles'], function(){
	concatJS()
// 	fs.stat("./dist",function(err,stats){
// 		console.log('err ->', err)
//     console.log("stats.isFile() ->" + stats.isFile())
//     console.log("stats.isDirectory() -> " + stats.isDirectory())
//     console.log("stats.isBlockDevice() ->" + stats.isBlockDevice())
//     console.log("stats.isCharacterDevice()" + stats.isCharacterDevice())
//     console.log("stats.isSymbolicLink() -> "+stats.isSymbolicLink())
//     console.log("stats.isFIFO() ->" + stats.isFIFO())
//     console.log("stats.isSocket()-> " + stats.isSocket())
// })
});

gulp.task('rmfiles', function(){
	deleteAllFiles('./dist');
})

gulp.task('rmdirs', ['rmfiles'], function() {
	deleteDiectory('./dest', 0);

})

gulp.task('watch', function(){
	gulp.watch('src/scripts/*.js', ['pack']);
	gulp.watch('src/scripts/draw/*.js', ['pack']);
	gulp.watch('src/app/*.js', ['pack']);
})