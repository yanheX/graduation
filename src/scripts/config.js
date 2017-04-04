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

let matConfig = {

}


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
		, side: true
		, emissive: true
		, roughness: true
		, metaless: true
		, wireframe: true
	}
};

let attributes = {
	'position/x': true
	, 'position/y': true
	, 'position/z': true
	, 'rotation/x': true
	, 'rotation/y': true
	, 'rotation/z': true
	, 'scale/x': true
	, 'scale/y':true
	, 'scale/z': true
	, 'name': true
	, 'visible': true
	, 'castShader': false
	, 'receiveShader': false 
	, 'material/color': true
	, 'material/transparent': true
	, 'material/opacity': true
	, 'material/wireframe': true
	, 'material/map': false
	, 'material/side': true
	, 'material/emissive': true
	, 'material/roughness': true
	, 'material/metaless': true
};


let attr = {name:'innerHTML', op1:'geometry', op2:'material',option:'option'};