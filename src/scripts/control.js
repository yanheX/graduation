class control{
	constructor(op){
		this.dom = op.dom;
		this.op = op || {};
		let self = this;
		this.document = new Node({type:'scene'});
		this.webgl = new Draw({
			scene: self.document
			, dom: self.dom
		});
		this._toolBarInit();
		this.eventMap = {};
	}

	_toolBarInit(){
		
	}

	on(e, n, fn){
		let eventList = ['click', 'dbclick', 'mousemove', 'mouseup', 'mousedown'];
		let self = this;
		if(eventList.indexOf(e) === -1){
			return;
		}
		if(kit.typeOf(n) === 'function'){
			fn = n;
			n = 'default';
		}
		if(!self.eventMap.hasOwnProperty(n)){
			self.eventMap[n] = {};
		}
		self.eventMap[n][e] = fn;

	}

	trigger(){

	}

	off(){

	}
}