let generateShape = (type = 'cube',option = [10,10,10]) =>{

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
	}

	return shape;
}