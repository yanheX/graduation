// 用于画布的绘制相关动作的执行
define('scripts/Draw', ['kit'], function(kit){

	class Draw{
		constructor(op){
			this.op = op || {};
			// this.scene = new THREE.Scene();
			this.renderConfig = {
				preserveDrawingBuffer: true,
				antialias: true,
				alpha: true
			}
			this.renderer = new THREE.WebGLRenderer(this.renderConfig);
			this.cameraList = [];
			this.rect = {
				width: this.op.dom.clientWidth
				, height: this.op.dom.clientHeight
			}
			this.raycaster = new THREE.Raycaster();
			this.camera = new THREE.PerspectiveCamera(75, this.rect.width/this.rect.height, 0.1, 10000);
			this.renderer.setSize(this.rect.width, this.rect.height);
			this.op.dom.appendChild(renderer.domElement);

		}

		add(node){
			let self = this;
			self.scene.add(node);
			return self;
		}

		remove(node){

		}

		draw(){
			let self = this;
			requestAnimationFrame(self.draw);
			self.renderer.render(self.op.scene, self.camera);
		}

		getTarget(client){
			let p = [0, 0];
			
		}

		setSize(w, h){
			this.renderer.setSize(w, h)
		}
	}

	return Draw;
});