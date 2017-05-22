define('scripts/tip',['kit'], function(kit){
	class tip{
		constructor(){
			this.init();
		}

		init(){
			this.container = kit.createNode('div');
			this.container.style.display = 'none';
			this.container.style.border = '1px solid black';
			this.container.style.borderRadius = '10px';
			this.container.style.padding = '5px';
			this.container.style.position = 'absolute';
			document.body.appendChild(this.container);
		}

		showTip(datum, position){
			this.container.style.left = position[0] + 'px';
			this.container.style.top = position[1] + 'px';
			this.container.innerHTML = '';
			let self = this;
			kit.each(['dims', 'meas'], function(item){
				kit.each(datum[item], function(dItem, index){
					let title = dItem;
					let value = datum[index];
					let content = title + ': ' + value;
					let width = content.length * 12;
					let node = kit.createNode('div');
					node.innerHTML = content;
					node.style.width = width + 'px';
					self.container.style.width = Math.max(parseInt(self.container.style.width), width) + 'px';
					node.style.height = '20px';
					node.style.lineHeight = '20px';
					kit.addNode(self.container, node);

				})
			})
			this.container.style.display = 'block'
		}

		hideTip(){
			this.container.style.display = 'none';
		}
	}
	return tip;
});