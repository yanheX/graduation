define('scripts/control', ['kit','scrips/draw', 'scripts/Node'], function(kit, Draw, Node){
	class control{
		constructor(op){
			this.dom = op.dom;
			this.op = op || {};
			let self = this;
			self.eventMap = {};
			self.init();
			self._toolBarInit();
		}

		_toolBarInit(){
			
		}

		init(){
			let self = this;

			self.nodeInit();
			self.domInit();
			self.eventInit();
		}

		nodeInit(){
			this.document = new Node({type:'scene'});
		}

		domInit(){
			let self = this;
			self.webgl = new Draw({
				scene: self.document
				, dom: self.dom
			});
		}

		setSize(w, h){
			this.webgl.setSize(w, h);
		}

		eventInit(){
			let self = this;
			let eventList = ['click', 'dbclick', 'contextmenu', 'mousemove', 'mouseover', 'mousedown', 'mouseup'];
			self.eventMap = {};
			kit.each(eventList, (type) => {
				self.eventMap[type] = [];
				self.dom['on' + type] = (e) => {
					return self.triger(type, e);
				}
			})

			self.eventAdd();

		}

		hover(node){
			let self = this;

			if(node){

			} else {
				let lastNode = self.eventLastNode = self.eventLastNode || {};
				let lastHoverNode = lastNode['hover'];

				if(lastHoverNode){
					lastNode['hover'] = null;
					lastHoverNode.updateStyle();
				}
			}

			return self;
		}

		eventAdd(){
			let self = this;
			let target = null;

			self.on('mousemove', (e) => {
				let isNeedRedraw = false;
				let lastNode = self.eventLastNode = self.eventLastNode || {};
				let lastHoverNode = lastNode['hover'];

				if(lastHoverNode){
					if(e.target != lastHoverNode){
						lastHoverNode.style.mat.opacity = 0.5;
						lastHoverNode.updateStyle();
						lastNode['hover'] = null;
						isNeedRedraw = true;
					}
				}

				if(e.target){
					target = e.target;

					if((lastHoverNode !== target && typeof target.hover === 'object') || e.data){
						// self.highlightNode(target);
						lastNode['hover'] = target;
						isNeedRedraw = true;
					}
				}
				isNeedRedraw && self.draw();
			})
		}
		

		on(e, n, fn){

			let self = this
				, isPrivate = false
				, isExists = false
				, list
				;

			if(typeof n === 'function'){
				fn = n;
				n = null;
			}

			if(/^!/.test(type)){
				isPrivate = true;
				type = type.substr(1);
			}

			if(typeof fn === 'function'){
				fn.isPrivate = isPrivate;
			}

			list = self.eventMap[type] = this.eventMap[type] || [];

			if(list){
				kit.each(list, (tFn) => {
					if(tFn && tFn.isPrivate){
						if(tFn.uniqukey === n){
							isExists = true;
							return false;
						}
					}
				})
				!isExists && list.push(fn);
			}

			return this;
			// let eventList = ['click', 'dbclick', 'mousemove', 'mouseup', 'mousedown'];
			// let self = this;
			// if(eventList.indexOf(e) === -1){
			// 	return;
			// }
			// if(kit.typeOf(n) === 'function'){
			// 	fn = n;
			// 	n = 'default';
			// }
			// if(!self.eventMap.hasOwnProperty(n)){
			// 	self.eventMap[n] = {};
			// }
			// self.eventMap[n][e] = fn;

		}

		triger(type, event){
			let self = this;
			let e = self;
			if(event){
				let domRect = self.dom.getBoundingClientRect();
				let op = {
					context: self.document
					, control: self
					, type: type
					, origin: event 
					, offset: {
						control: this.translate()
						, dom: [domRect.left, domRect.top]
					}
				}

				let e = new Event(op);
				let lastNode = self.eventLastNode = self.eventLastNode || {};
				let nodeList = [];
				e.originList = this.draw.getTarget([e.clientX, e.clientY]);

				kit.each(e.originList, (node, i) => {
					node.datum && nodeList.push(node);
				});

				e.nodeList = nodeList;
				e.target = e.nodeList.length ? e.nodeList[0] : null;
				e.data = e.target ? e.target.datum || null : null;
				e.lastNode = lastNode[type] || null;
				lastNode[type] = e.target;

				kit.each(self.eventMap[type], (fn) => {
					if(typeof fn === 'function'){
						if(fn.call(self, e) === false) return false;
					}
				});

				return this;
			}

		}

		off(type, fn){
			let eventMap = this.eventMap;
			let typeList = !type ? kit.keys(eventMap) : [type];
			kit.each(typeList, (type) => {
				let list = eventMap[type];
				if(list){
					for(let i = 0, item; i < list.length; i++){
						item = list[i];
						if((fn && fn == item) || (!fn && item && !item.isPrivate)){
							list.splice(i, 1);
							i--;
						}
					}
				}
			})
			return this;
		}
	}

	class Event{
		constructor(op){
			for(let k in op) this[k] = op[k];
			this.pageX = this.origin.x
			this.pageY = this.origin.y
			this.clientX = this.pageX - this.offset.dom[0]
			this.clientY = this.pageY - this.offset.dom[1]
			this.x = this.clientX - this.offset.chart[0]
			this.y = this.clientY - this.offset.chart[1]
			this.target = null
			return this;
		}

		hightlight(){
			if(!this.target || !this.data){
				return false;
			}
			// this.chart.hightlight(this.target);
		}
	}

	return control;
})
