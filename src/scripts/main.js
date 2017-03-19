'use strict'
let doc = document.body;
let geoContainer = [], matContainer = [], meshContainer = [];
let config = {
		"cube":{
			geometry: {
				option:	[1,1,1]
			}
			, material: {
				color: 0xffffff
				, side: THREE.DoubleSide
				, wireframe: true
			}

		}
		, "sphere": {
			geometry: {
				option:	[5,32,32]
			}
			, material: {
				color: 0xffffff
				, side: THREE.DoubleSide
				, wireframe: true
			}

		}
		, "circle": {
			geometry: {
				option:	[5,32]
			}
			, material: {
				color: 0xffffff
				, side: THREE.DoubleSide
				, wireframe: true
			}

		}
		, "cone": {
			geometry: {
				option:	[5,20,32]
			}
			, material: {
				color: 0xffffff
				, side: THREE.DoubleSide
				, wireframe: true
			}

		}
		, "cylinder": {
			geometry: {
				option:	[5, 5, 20, 32]
			}
			, material: {
				color: 0xffffff
				, side: THREE.DoubleSide
				, wireframe: true
			}

		}
		, "ring": {
			geometry: {
				option:	[3,5,32]
			}
			, material: {
				color: 0xffffff
				, side: THREE.DoubleSide
				, wireframe: true
			}

		}
		, "torus": {
			geometry: {
				option:	[10,3,16,100]
			}
			, material: {
				color: 0xffffff
				, side: THREE.DoubleSide
				, wireframe: true
			}

		}
		, "torusKnot": {
			geometry: {
				option:	[10,3,100,16]
			}
			, material: {
				color: 0xffffff
				, side: THREE.DoubleSide
				, wireframe: true
			}

		}
};


// 可配置属性
let attribute = {
	position: true
	, scale: true
	, rotation: true
	, name: true
	, visible: true
	, castShader: false
	, receiveShader: false 
	, geometry: {

	}
	, material: {
		color: true
		, transparent: true
		, opacity: true
		, wireframe: true
		, map: false
	}
};


let attr = {name:'innerHTML', op1:'geometry', op2:'material',option:'option'};
let scene
	, camera
	, renderer
	, rayCaster
	, controls
	, hoverEdge = null
	, mouse = new THREE.Vector2()
	, toolbar = document.querySelector('#toolbar')
	, toolbarRect = toolbar.getClientRects()[0]
	, showArea = document.querySelector('#showArea')
	, showAreaRect = showArea.getClientRects()[0]
	, operateArea = document.querySelector('#operate')
	, operateAreaRect = operateArea.getClientRects()[0]
	;


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

let hover = () => {
	scene.remove(hoverEdge);
	hoverEdge = null;
	let intersects = rayCaster.intersectObjects( scene.children );
	if(intersects.length){
		let geometry = intersects[ 0 ].object.geometry;
		let edges = generateMaterial('basic',{color: 0xfff000, side: THREE.BackSide});

		hoverEdge = new THREE.Mesh(geometry, edges);
		hoverEdge.position = intersects[ 0 ].object.position;
		hoverEdge.scale.multiplyScalar(1.05);
		scene.add(hoverEdge);	
	}
	render();
	// for(let i = 0; i < intersects.length; i++){
	// 	let geometry = intersects[ i ].object.geometry;
	// 	let edges = new THREE.EdgesGeometry(geometry)
	// 	hoverEdge = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: 0x00fff0}));
	// 	scene.add(hoverEdge);
	// }

}

let addScene = () => {

}

let addShape = (event) => {
	let self = event.target;
	let type = self[attr.name];
	let op1 = JSON.parse(self.dataset[attr.op1]);
	let op2 = JSON.parse(self.dataset[attr.op2]);

	let geo = generateShape(type, op1);
	geoContainer.push(geo);

	let mat = generateMaterial('', op2);
	matContainer.push(mat);

	let mesh = new THREE.Mesh(geo, mat);
	meshContainer.push(mesh);

	scene.add(mesh);
	render();
}


let addAttr = (target) => {
	let geo = null
		, mat = null
		, mesh = null
		;

	geo = createNode('div');
	mat = createNode('div');
}

let showAttr = (target) => {
	return (attr) => {

	}
}

let loopInObject = (obj, fn, level) => {
	Object.keys(obj).forEach((item,index) => {
		if(typeof obj[item] !== 'boolean'){
			loopInObject(obj[item], fn, level + 1);
			return;
		}

		if(!obj[item]){
			return;
		}

		fn(item);
	});
}


let onMouseMove = (e) => {
	mouse.x = (e.layerX / showAreaRect.width) * 2 - 1;
	mouse.y = (e.layerY / showAreaRect.height) * 2 - 1;
}

let init = () => {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(75, showAreaRect.width/showAreaRect.height, 0.1, 1000);
	camera.position.x = 50;
	renderer = new THREE.WebGLRenderer();
	console.info(showAreaRect);
	renderer.setSize(showAreaRect.width, showAreaRect.height);
	controls = new THREE.OrbitControls(camera, renderer.domElement);
	rayCaster = new THREE.Raycaster();

	let light = new THREE.AmbientLight(0xff00ff);
	scene.add(light);

	addNode(showArea, renderer.domElement);

	addEvent(controls,'change',()=>{
		renderer.render(scene,camera);
	});
	addEvent(showArea, 'mousemove', (e)=>{
		onMouseMove(e);
		hover();
	})


}

let render = () => {
	rayCaster.setFromCamera(mouse, camera);
	renderer.render(scene,camera);
}

let animate = () => {
	requestAnimationFrame(animate);
	render();
}

let main = () => {
	let node = createNode('div')
	addEvent(node,'click',addShape);
	Object.keys(config).forEach((item,index) => {
		let shape = createNode('div');
		let type = createNode('div');
		type.innerHTML = item;
		type.dataset[attr.op1] = JSON.stringify(config[item][attr.op1][attr.option]);
		type.dataset[attr.op2] = JSON.stringify(config[item][attr.op2]);
		// addClass(type,'');
		addNode(shape, type);
		// addClass(shape,'');
		addNode(node, shape);
	})
	addNode(toolbar, node);
	init();
}





main();