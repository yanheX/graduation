define('scripts/draw/simulation',['kit', 'scripts/Node'], function(kit, Node){

	function draw(opt, dItem, dWrap, level){
		let data = dItem;
		let wrap = dWrap || new Node({
			type: 'group'
		});
		let singleX = 20;
		let singleY = 20;
		let singleHeight = 1;
		let interval = 15;
		let xIndex = 0;
		let yIndex = 0;
		kit.each(dItem.data || dItem, function(item){
			if(level === 0){
				opt.chart.document.append(wrap);
				let num = item.data.length;
				let nxn = Math.ceil(Math.sqrt(num));
				wrap.style.position.x = - (singleX * nxn + interval * (nxn - 1)) / 2;
				wrap.style.position.y = - (singleY * nxn + interval * (nxn - 1)) / 2;
				wrap.updateStyle();
				draw(opt, item, wrap, level + 1)

			} else {
				let height = Number(item.value) * singleHeight;
				let num = dItem.data.length;
				let nxn = Math.ceil(Math.sqrt(num));
				let node = new Node({
					type: ['cube', 'basic']
					, datum: item.datum
					, style: {
						position: {x:0, y:0, z:0}
						, geometry: [singleX, singleY, height]
						, material: {
							opacity: 0.5
							, color: '#27a7f3'
							, wireframe: false
						}
					}
				})
				node.style.position.z = height / 2;
				if(xIndex === 0){
					node.style.position.x = 0;
					node.style.position.y = (yIndex === 0? 0 : (yIndex * interval + yIndex * singleY));
					xIndex++;
				}else {
					node.style.position.x = xIndex * interval + singleX * xIndex;
					node.style.position.y = (yIndex === 0? 0 : (yIndex * interval + yIndex * singleY));
					xIndex++;
					if(xIndex >= nxn){
						xIndex = 0;
						yIndex++;
					}
				}
				node.updateStyle();
				opt.chart.selectable.push(node.option)
				wrap.append(node);
			}

		})
	}

	return function(opt){
		let seriesData = opt.seriesData;
		draw(opt, seriesData, null, 0);
	}
})