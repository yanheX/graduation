//===========================app/kit.js===================
define('kit', function(){
	let kit = {};

	kit.optionSet = (o1, o2, isSample) => {
		let self = this;
		for(let k in o2){
			if(!o2[k] || ['number', 'string', 'boolean'].indexOf(typeof o2[k]) > -1){
				o1[k] = o2[k];
			} else if(!isSample){
				o1[k] = o1[k] || {};
				kit.optionSet(o1[k], o2[k], isSample);
			}
		}

		return o1;
	}

	kit.typeOf = (o) => {
		return Object.prototype.toString.call(o).slice(8, -1).replace(/^[A-Z]+/, (m) => {
			return m.length === 1? m.toLowerCase() : m.slice(0, -1).toLowerCase() + m.slice(-1);
		})
	};

	kit.each = (o, fn, type) => {
		if (typeof o != 'object' || typeof fn != 'function') return false;

		type = type ? (type == 'array' ? type : 'object') : (typeof o.length == 'number' && o.length > -1 ? 'array' : 'object');
		if (type == 'array') {
			for (let i = 0, l = o.length; i < l; i++) {
				if (fn.call(o, o[i], i) === false) break;
			}
		} else {
			for (let i in o) {
				if (!o.hasOwnProperty(i)) continue;
				if (fn.call(o, o[i], i) === false) break;
			}
		}
	};

	kit.getRandomStr = (len = 10) => {
		let seed = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		let str = '';
		for(let i = 0; i < len; i++){
			let seedP = Math.floor(Math.random() * seed.length);
			str += seed[seedP];
		}
		return str;
	};

	kit.generateShape = (type = 'cube',option = [10,10,10]) =>{

		var shape = null;

		switch (type.toLowerCase()) {
			case 'cube':
				shape = new THREE.BoxGeometry(...option);
				break;
			case 'circle':
				shape = new THREE.CircleGeometry(...option);
				break;
			case 'cone':
				shape = new THREE.ConeGeometry(...option);
				break; // 棱锥
			case 'cylinder':
				shape = new THREE.CylinderGeometry(...option);
				break; //柱体
			case 'sphere':
				shape = new THREE.SphereGeometry(...option);
				break;
			case 'ring':
				shape = new THREE.RingGeometry(...option);
				break;
			case 'torus':
				shape = new THREE.TorusGeometry(...option);
				break;
			case 'torusknot':
				shape = new THREE.TorusKnotGeometry(...option);
				break;
			case 'group': 
				shape = new THREE.Group();
				break;
			case 'scene': 
				shape = new THREE.Scene();
				break;
		}

		return shape;
	}

	kit.generateMaterial = (type = 'standard', options) => {
		var material = null;
		switch (type.toLowerCase()) {
			case '':
			case 'basic':
				material = new THREE.MeshBasicMaterial(options);
				break;
			case 'phong':
				material = new THREE.MeshPhongMaterial(options);
				break;
			case 'Lambert':
				material = new THREE.MeshLambertMaterial(options);
				break;
			case 'normal':
				material = new THREE.MeshNormalMaterial();
				break;
			case 'line':
				material = new THREE.LineBasicMaterial(options);
				break;
			case 'standard':
				material = new THREE.MeshStandardMaterial(options);
				break;
			default:
				break;
		}

		return material;
	}

	kit.createNode = (name) => {
		return document.createElement(name);
	};

	kit.addNode = (target,node) => {
		target.appendChild(node);
	}

	kit.addClass = (node,CN) => {
		node.classList.add(...CN);
	}

	kit.removeClass = (node,CN) => {
		node.classList.remove(...CN);
	}

	kit.addEvent = (node, type, fn) => {
		node.addEventListener(type,(e) => {
			fn(e)
		});
	}

	kit.parseData = (data) => {

		// 检测是否为数字
		let isNumber = Number(data);
		if(!isNaN(isNumber)){
			return isNumber;
		}


		// 检测是否布尔值
		switch(data.toLowerCase()){
			case 'true': return true; break;
			case 'false': return false; break;
		}


		// #输入hex颜色转换为十进制数字
		if(data.substr(0, 1) === '#' && (data.length === 7 || data.length === 4)){
			if(isNaN(Number(data))){
				console.warn('是否打算输入一个十六进制数？')
				return data;
			}
			data.length === 4 && (data = data.replace(/\d/g, (e) => {return e + e;}));
			return Number('0x' + data.substr(1,6));

		}

		// if(data.substr())



		return data;
	}



	let addNode = (target,node) => {
		target.appendChild(node);
	}

	let createNode = (name) => {
		return document.createElement(name);
	}

	let addClass = (node,CN) => {
		node.classList.add(CN);
	}

	let removeClass = (node,CN) => {
		node.classList.remove(CN);
	}

	let addEvent = (node, type, fn) => {
		node.addEventListener(type,(e) => {
			fn(e)
		});
	}

	return kit;
})
