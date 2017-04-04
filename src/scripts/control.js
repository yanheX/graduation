class control{
	constructor(op){
		this.dom = op.dom;
		let self = this;
		this.document = new Node('scene');
		this.webgl = new Draw({
			scene: self.document
			, dom: self.dom
		});
		this._toolBarInit();
	}

	_toolBarInit(){
		
	}
}