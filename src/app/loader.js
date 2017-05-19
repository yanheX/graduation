/*!===========================================
 * loader.js - a javascript sync module loader
 * by mrbrick@yinhe.org
 * MIT license
 * ===========================================*/
(function(){
	
	var loader = {
		varsion: '1.0.1'
		
		, map: {}
		
		, define: function(a, b, c, d){
			var list = [a, b, c, d]
			, item = {}
			;
			kit.each(list, function(arg, i){
				var type = kit.typeOf(arg);
				switch(type){
					case 'string':
						item.name = arg;
					break; case 'array':
						item.requires = arg;
					break; case 'object':
						if(i==1){
							item.object = arg;
						}else{
							item.op = arg;
						}
					break; case 'function':
						if(i==0){
							loader.preload(arg);
						}else{
							item.fn = arg;
						}
				}
			});
			loader.set(item);
		}
		
		, require: function(a, b){
			if(a==null){
				return loader.map;
			}
			var kList = typeof a=='string' ? [a] : a
			, list = []
			;
			kit.each(kList, function(k){
				list.push(loader.get(k));
			});
			if(b==null){
				return typeof a=='string' ? list[0] : list;
			}else if(typeof b=='function'){
				b.apply(null, list);
			}
		}
		
		, get: function(name){
			var name = name.toString().toLowerCase()
			, item = loader.map[name]
			, self = this
			;
			if(!item){
				return false;
			}
			if(item.object){
				return item.object;
			}else{
				var list = []
				, object
				;
				kit.each(item.requires, function(reqName){
					var reqName = reqName.toLowerCase()
					, req = self.get(reqName)
					;
					list.push(req);
				})
				object = item.fn.apply(null, list);
				if(item.op.cache){
					item.object = object;
				}
				return object;
			}
		}
		
		, set: function(op){
			var item = {name:'', requires:[], object:null, fn:null, op:{}}
			kit.each(op, function(v, k){
				switch(k){
					case 'op':
						kit.each(v, function(v2, k2){
							item.op[k2] = v2;
						});
					break; default:
						item[k] = v;
				}
			})
			if(item.name){
				item.name = item.name.toLowerCase()
				loader.map[item.name] = item;
			}
		}
		
		, preload: function(fn){
			var exports = window
			, defined = {}
			, kList = []
			;
			for(var k in exports) kList.push(k);
			
			fn.call(exports);
			
			for(var k in exports){
				if(kList.indexOf(k)>-1) continue ;
				
				defined[k] = exports[k];
				
				try{
					delete exports[k];
				}catch(e){
					exports[k] = undefined;
				}
			}
			
			for(var k in defined) loader.setItem({name: k.toString().toLowerCase(), object: defined[k]});
		}
		
		, exports: function(){
			var o = {}
			kit.each(['map', 'define', 'require'], function(k){
				o[k] = loader[k];
			})
			return o;
		}
	}
	;
	
	var kit = {
		typeOf: function(o){
			return Object.prototype.toString.call(o).match(/ (\w+)/)[1].toLowerCase();
		}
		, each: function(o, fn, type){
			var type = type || this.typeOf(o);
			switch(type){
				case 'object':
					for(var k in o){
						if(fn.call(o, o[k], k)===false){
							break;
						}
					}
				break; case 'array':
					for(var i=0, l=o.length; i<l; i++){
						if(fn.call(o, o[i], i)===false){
							break;
						}
					}
			}
		}
	}
	;
	
	define = loader.define;
	require = loader.require;
	window.loader = loader.exports();
})();