define('scripts/config', [], function(){
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

	let axisConfig = {
		axises: true
		, x: {
			axisLabel: true
			, axisTitle: true
			, axisLine: true
			, scale: true
			, scaleControl: {
				scaleLine: true
				, scaleText: true
			}
		}
		, y: {
			axisLabel: true
			, axisTitle: true
			, axisLine: true
			, scale: true
			, scaleControl: {
				scaleLine: true
				, scaleText: true
			}
		}
		, z: {
			axisLabel: true
			, axisTitle: true
			, axisLine: true
			, scale: true
			, scaleControl: {
				scaleLine: true
				, scaleText: true
			}
		}
	}

	let styleConfig = {
		name: true
		, style: true
		, material: true
		, wireframe: true
		, color: true
		, rotation: true
		, scale: true
		, position: true
		, side: true
		, transparent: true
		, opacity: true
		, x: true
		, y: true
		, z: true
	}

	let styleControl = {
		name: function(self){

			return function(name){
				self.name = name;
			}
		}

		, rotation: function(self){

			return function(vector){
				self.rotation.set(vector.x, vector.y, vector.z, 'XYZ');
			}
		}

		, scale: function(self){

			return function(vector){
				self.scale.set(vector.x, vector.y, vector.z);
			}
		}

		, position: function(self){

			return function(vector){
				self.position.set(vector.x, vector.y, vector.z);
			}
		}
		, material: function(self){

			return function(mat){
				Object.keys(mat).forEach(function(item){
					if(item === 'color'){
						self.material && (self.material[item] = new THREE.Color(mat[item]));
						return;
					}
					self.material && (self.material[item] = mat[item]);
				})
			}
		}
	}

	let Config = {
		basic: config
		, axisConfig: axisConfig
		, styleConfig: styleConfig
		, styleControl: styleControl
	}

	return Config;
});