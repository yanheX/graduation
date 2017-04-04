// 用于画布的绘制相关动作的执行

class Draw{
	constructor(dom){
		this.scene = new THREE.Scene();
		this.renderConfig = {
			preserveDrawingBuffer: true,
			antialias: true,
			alpha: true
		}
		this.renderer = new THREE.WebGLRenderer(this.renderConfig);
		this.cameraList = [];
		this.camera = new THREE.PerspectiveCamera()

	}

	draw(){
		let self = this;
		requestAnimationFrame(self.draw);
		self.renderer.render(self.scene, self.camera);
	}
}