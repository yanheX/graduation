'use strict'
let generateMaterial = (type, options) => {
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
		default:
			break;
	}

	return material;
}