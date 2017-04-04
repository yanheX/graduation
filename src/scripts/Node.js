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
				, transparent: true
				, wireframe: true
				, side: THREE.DoubleSide
				, emssive: null
				, map: null
				, roughness: null
				, metaless: null
			}
		};

		kit.optionSet(this, op);
		let groupList = ['group', 'scene'];
		if(groupList.indexOf(this.type) > -1){
			this.geo = null;
			this.mat = null;
			this.option = kit.generateShape(this.type);
		} else {
			this.geo = kit.generateShape(this.type, this.geo);
			this.mat = kit.generateMaterial('standard', this.style.material);
			this.option = THREE.Mesh(this.geo, this.mat);
		}



	}

	create(op){
		let node = new Node(op);
		return node;
	}

	insertNode(node, type){
		type = type == 1 ? 'prepend' : 'append';
		if(kit.typeOf(node) == 'array'){
			let self = this;
			kit.each(node, (node) => {
				self.insertNode(node);
			})
		} else {
			if( typeof node.updateStyle == 'undefined'){
				node = new Node(node);
			}
			return this[type](node);
		}

	}

	append(node){
		if(typeof node.updateStyle == 'undefined'){
			return this.insertNode(node);
		}
		node.parent = this;
		this.childs.push(node);
		this.option.add(node.option);
		return node;
	}

	prepend(node){
		if(typeof node.updateStyle == 'undefined'){
			return this.insertNode(node, 1);
		}

		node.parent =this;
		this.childs.unshift(node);
		this.option.add(node.option);
		return node;
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
		this.style.visible = this.option.visible = true;
		return this;
	}

	hide(){
		this.style.visible = this.option.visible = false;
		return this;
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

	updateStyle(flag){
		let self = this;
		kit.optionSet(self.option, self.style, flag);
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