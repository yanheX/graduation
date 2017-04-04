class Node2Dom(){
	constructor(op){
		this._init(op);
	}

	_init(){

	}

	formateAttr(op){
		let self = this;
		let wrap = {};
		kit.each(op, (item, i)=>{
			self.isInAttr(attributes, item)
			if(kit.typeOf(op[i]) === 'object'){
				wrap[i] = {};
				let tWrap = wrap[i]
				if(kit.typeOf(item) !== 'object' || kit.typeOf(item) !== 'array'){
					tWrap.type = 'input';
					tWrap.class = [];
					tWrap.name = op.name;
					tWrap.parentRef = op;
					tWrap.event = {
						focus: ((op,i) => {
							return (e) => {
								let value = e.value;
								window.timer = setInterval(() => {
									if(value != e.value){
										op[i] = e.value;
										value = e.value;
									} else {
										return;
									}
								}, 0)		
							}
						})(op,i)
						, blur: () => {
							clearInterval(window.timer);
						}
					}
				} else {
					tWrap.type = 'div';
					tWrap
					self.formate(item);
				}
			}
		})

		return wrap;
	}

	isInAttr(origin, target){

	}

}