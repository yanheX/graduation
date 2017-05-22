// 用于画布的绘制相关动作的执行
define('scripts/draw', ['kit'], function(kit){

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
			this.currentCamera = new THREE.PerspectiveCamera(75, this.rect.width/this.rect.height, 0.1, 10000);
			this.currentCamera.position.z = 100;
			this.currentCamera.position.x = 100;
			this.renderer.setSize(this.rect.width, this.rect.height);
			this.op.dom.appendChild(this.renderer.domElement);
			this.option = {
				translate: [0, 0]
				, scale: 0
			}

			this.diyCamera = new THREE.OrbitControls(this.currentCamera, this.renderer.domElement);
			let self = this;
			self.diyCamera.addEventListener('change',function(){
				self.renderer.render(self.op.scene.option, self.currentCamera);
			});

		}

		add(node){
			let self = this;
			self.scene.add(node);
			return self;
		}

		translate(p){
			let rs = this;

			if(p){
				p = p.slice(0);
				p[0] = !p[0] ? 0 : Number(p[0]);
				p[1] = !p[1] ? 0 : Number(p[1]);

				this.option.translate = p;

				rs = this.option.translate;
			} else {
				rs = this.option.translate.slice(0);
			}

			return rs;
		}

		remove(node){

		}

		draw(self){
			// let self = this;
			return () => {
				self.diyCamera.update();
				self.renderer.render(self.op.scene.option, self.currentCamera);
				requestAnimationFrame(self.draw(self));
			}
		}

		getTarget(client, selectable){
			let self = this;
			let p = [0, 0];
			let mouse = new THREE.Vector2(p);
			let rs = [];
			mouse.x = ((client[0] || p[0]) / self.rect.width ) * 2 - 1;
			mouse.y = - ((client[1] || p[1]) / self.rect.height ) * 2 + 1;

			self.raycaster.setFromCamera(mouse, self.currentCamera);

			let intersects = self.raycaster.intersectObjects(selectable);

			if(intersects.length > 0){
				rs = intersects.map(function(item){
					return item.object.refer || item.object.refer;
				});
			}

			return rs;

			
		}

		setSize(w, h){
			this.renderer.setSize(w, h)
		}
	}

	return Draw;
});