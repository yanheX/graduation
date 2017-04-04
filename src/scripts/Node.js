class Node{
	constrcutor(op){
		this.opt = op || {};
		let self = this;
		this.childs = [];
		this.style = {
			visible: true
			, castShader: false
			, receiveShader: false
			, position: [0, 0, 0]
			, scale: [1, 1, 1]
			, rotation: [0, 0, 0]
			, material: {
				color: null
				, opacity: 1
				, wireframe: true
				, side: THREE.DoubleSide
				, emssive: null
				, map: null
				, roughness: null
				, metaless: null
			}
		};

		kit.optionSet(this.style, op.style);



	}

	create(op){
		let node = new Node(op);
		return node;
	}

	insertNode(){

	}

	appendNode(node){

	}

	prepend(node){

	}

	empty(){
		this.childs = [];
		return this;
	}

	remove(){
		let i = this.parent.childs.indexOf(this);
		i!=-1 && this.parent.childs.splice(i, 1);
	}

	show(){

	}

	hide(){

	}

	find(selector){

	}

	clone(isDeep){
		let self = this;
		let cloneNode = (node) => {
			return new Node(node)
		}
		let wrap = cloneNode(this);
		if(isDeep){
			let cloneChild = (pNode, nNode) => {
				pNode.each((node) => {
					let tNode = nNode.append(cloneNode(node));
					cloneChild(node, tNode);
				}, 1);
			}
			cloneChild(this, wrap);
		}

		return wrap;
	}

	updateStyle(){

	}

	each(fn, justChild){
		let self = this
		, eachNode = (node) => {
			node.childs.forEach((node) => {
				let rs = fn.call(self, node);
				!justChild&& (rs !== false) && eachNode(node);
			});
		}
		;

		typeof fn === 'function' && eachNode(this);
	}


}