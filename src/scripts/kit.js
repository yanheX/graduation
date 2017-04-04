let kit = {};

kit.optionSet = (o1, o2, isSample) => {
	for(let k in o2){
		if(!o2[k] || ['number', 'string', 'boolean'].indexOf(typeof o2[k]) > -1){
			o1[k] = o2[k];
		} else if(!isSample){
			o1[k] = o1[k] || {};
			this.optionSet(o1[k], o2[k]);
		}
	}

	return o1;
}

kit.typeOf = (o) => {
	return Object.prototype.toString.call(o).slice(8, -1).replace(/^[A-Z]+/, (m) => {
		return m.length === 1? m.toLowerCase() : m.slice(0, -1).toLowerCase() + m.slice(-1);
	})
};

kit.each = (o, fn, type) => {
	if (typeof o != 'object' || typeof fn != 'function') return false;

	type = type ? (type == 'array' ? type : 'object') : (typeof o.length == 'number' && o.length > -1 ? 'array' : 'object');
	if (type == 'array') {
		for (let i = 0, l = o.length; i < l; i++) {
			if (fn.call(o, o[i], i) === false) break;
		}
	} else {
		for (let i in o) {
			if (!o.hasOwnProperty(i)) continue;
			if (fn.call(o, o[i], i) === false) break;
		}
	}
};



let addNode = (target,node) => {
	target.appendChild(node);
}

let createNode = (name) => {
	return document.createElement(name);
}

let addClass = (node,CN) => {
	node.classList.add(CN);
}

let removeClass = (node,CN) => {
	node.classList.remove(CN);
}

let addEvent = (node, type, fn) => {
	node.addEventListener(type,(e) => {
		fn(e)
	});
}


