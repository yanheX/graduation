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
	}

	_toolBarInit(){
		
	}
}