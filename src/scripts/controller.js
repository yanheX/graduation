/*
controller(target, fns, attrs)
target: Array 用于存放需要绑定的对象
fns:    Array 用于存放属性更改所需要的
attrs:  Object用于存放需要监听属性的对象，需要监听的属性值为true

this.data 根据target中第一个对象以及attrs中的属性生成的基准对象
*/
class controller{
	constructor(target, fns, attrs){
		if(!target instanceof Array || !fns instanceof Array||target.length!==fns.length||target.length<=1){
			return;
		}
		this.target = target;
		this.fns = fns;
		this.attrs = attrs;
		this.data = {};
		this._init();
	}

	_init(){
		let self = this
			, origin = self.target[0]

		Object.keys(self.attrs).forEach((item) => {
			if(!self.attrs[item]){
				return;
			}

			self.data[item] = self._parse(origin, item)

		})

	}

	// 从层级结构获取数据
	_parse(data, attrs){
		if(typeof data[attrs] == 'number'){
			return data[attrs];
		}
		let keysArray = attrs.split('/');
		if(keysArray.length === 0){
			return;
		}

		let temp = data;

		for(let i = 0; i < keysArray.length; i++){
			if(typeof temp[keysArray[i]] !== 'object'){
				return temp[keysArray[i]];
			}
			temp = temp[keysArray[i]];
		}
	}

	// 将层级结构根据需要转换为单层结构
	_format(data,attr){
		
	}

	on(){
		let self = this;

	}

	trigger(data){
		let self = this;
		Object.keys(self.data).forEach((item, index) => {
			if(self.data[item] === self._parse(data, item)){
				return ;
			}
			// if(typeof a !== 'number'&& !isNaN(a))


		})
	}

	_loopInAttrs(data, fn){

	}


}