define('scripts/draw/series', ['kit'], function(kit){
	return function(opt){
		let chartType = require('scripts/chartType');
		let chartModule = opt.type;
		let fn = require('scripts/draw/' + chartModule);
		fn && fn.call(null, opt);
	}
})