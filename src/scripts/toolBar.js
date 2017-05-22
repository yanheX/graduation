/**

{
	rotation:{
		name: 'rotation'
		, type: 'div'
		, class: []
		, events: {
			click: fn
			, mousemove: fn
			, focus: fn
			, blur: fn
		}
		childs: {
			x: {
				...
			}
		}

	}
}

*/

define('scripts/toolBar', ['kit'], function(kit){
	class toolBar{
		constructor(op){
			this.op = op || {}
			// this.wrap = this.parseData(op);

		}

		parseData(opt){
			let self = this;
			// let opt = self.op
			let wrap = kit.createNode('div');
			Object.keys(opt).forEach((item, index) => {
				let tar = opt[item]
				let node = kit.createNode(tar.type);
				if(tar.class && tar.class.length > 0){
					kit.addClass(node, tar.class);
				}
				tar.event && Object.keys(tar.event).forEach((item) => {
					if(!tar.event[item]) return;
					kit.addEvent(node, item, tar.event[item]);
				})
				if(tar.value){
					let esp = ['input']
					if(tar.type.indexOf(esp) > -1){
						node.value = tar.value;
					} else {
						node.innerHTML = tar.value;
					}

				}
				['for', 'id'].forEach((v, k) => {
					tar[v] && (node.setAttribute(v, tar[v]));
				})

				tar.childs && kit.addNode(node, self.parseData(tar.childs));
				kit.addNode(wrap, node);
			});
			this.attributeWrap = wrap;

			return wrap;
		}

		generateMeshList(opt){
			let self = this;
			let wrap;
			wrap = kit.createNode('dl');

			kit.addClass(wrap, []);
			let title = kit.createNode('dt');
			title.innerHTML = opt.name + '\t\t' + (kit.typeOf(opt.type) === 'array'? opt.type[0] : opt.type);

			kit.addNode(wrap, title);
			if(opt.childs.length > 0){
				let childContainer = kit.createNode('dd');
				let childNode = kit.createNode('dl');
				kit.addNode(childContainer, childNode);
				kit.addNode(wrap, childContainer);

				opt.childs.forEach(function(item, index){

					let node = self.generateMeshList(item);
					kit.addNode(childNode, node);
				})
			}

			self.meshList = wrap;


			return wrap;
		}


	}

	return toolBar;

});