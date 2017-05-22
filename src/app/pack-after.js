let showArea = document.querySelector('#showArea');

function main(){
	require(['scripts/control'], function(controls){
		let control = new controls({dom: showArea})
		control.add({
			type: ['cube', 'basic']
			, style:{
				scale: {
					x: 0.2
					, y: 0.2
					, z: 0.2
				}
				, geometry: [0.2, .2, .3]
				, material: {
					color: 0x00ff00
					, opacity: 1
					, transparent: true
				}
			}
		})
	})
}
/**
o = {
	dom: dom
	, data: {
		chartType: 'simulation'
		, rawData: object
		, keyType: object
		, markData: object
		, seriesData: object
	}
}

*/
window.Chart3d = function(o){
	let chart3d
	;
	require(['scripts/control'], function(controls){
		let data = o.data
		, chartType = data? (data.chartType ? data.chartType : 'simulation') : 'simulation';

		o.chartType = chartType
		chart3d = new controls(o);
	})

	Chart3d.last = chart3d;
}

// main();

let obj = {"keyType":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"}},"seriesData":{"data":[{"data":[{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID001","mea_133":"70"},"name":"ID001","value":"70"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID002","mea_133":"28"},"name":"ID002","value":"28"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID003","mea_133":"34"},"name":"ID003","value":"34"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID004","mea_133":"46"},"name":"ID004","value":"46"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID005","mea_133":"89"},"name":"ID005","value":"89"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID006","mea_133":"3"},"name":"ID006","value":"3"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID007","mea_133":"66"},"name":"ID007","value":"66"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID008","mea_133":"71"},"name":"ID008","value":"71"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID009","mea_133":"81"},"name":"ID009","value":"81"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID010","mea_133":"38"},"name":"ID010","value":"38"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID011","mea_133":"51"},"name":"ID011","value":"51"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID012","mea_133":"30"},"name":"ID012","value":"30"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID013","mea_133":"80"},"name":"ID013","value":"80"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID014","mea_133":"74"},"name":"ID014","value":"74"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID015","mea_133":"41"},"name":"ID015","value":"41"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID016","mea_133":"61"},"name":"ID016","value":"61"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID017","mea_133":"41"},"name":"ID017","value":"41"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID018","mea_133":"78"},"name":"ID018","value":"78"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID019","mea_133":"63"},"name":"ID019","value":"63"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID020","mea_133":"20"},"name":"ID020","value":"20"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID021","mea_133":"73"},"name":"ID021","value":"73"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID022","mea_133":"85"},"name":"ID022","value":"85"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID023","mea_133":"21"},"name":"ID023","value":"21"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID024","mea_133":"92"},"name":"ID024","value":"92"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID025","mea_133":"44"},"name":"ID025","value":"44"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID026","mea_133":"17"},"name":"ID026","value":"17"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID027","mea_133":"14"},"name":"ID027","value":"14"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID028","mea_133":"0"},"name":"ID028","value":"0"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID029","mea_133":"93"},"name":"ID029","value":"93"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID030","mea_133":"18"},"name":"ID030","value":"18"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID031","mea_133":"96"},"name":"ID031","value":"96"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID032","mea_133":"79"},"name":"ID032","value":"79"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID033","mea_133":"60"},"name":"ID033","value":"60"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID034","mea_133":"20"},"name":"ID034","value":"20"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID035","mea_133":"20"},"name":"ID035","value":"20"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID036","mea_133":"52"},"name":"ID036","value":"52"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID037","mea_133":"58"},"name":"ID037","value":"58"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID038","mea_133":"14"},"name":"ID038","value":"14"},{"datum":{"dims":{"dim_474":"堆场编号"},"meas":{"mea_133":"钢材数量"},"dim_474":"ID039","mea_133":"53"},"name":"ID039","value":"53"}]}]},"rawData":[{"堆场编号":"ID001","钢材数量":"70"},{"堆场编号":"ID002","钢材数量":"28"},{"堆场编号":"ID003","钢材数量":"34"},{"堆场编号":"ID004","钢材数量":"46"},{"堆场编号":"ID005","钢材数量":"89"},{"堆场编号":"ID006","钢材数量":"3"},{"堆场编号":"ID007","钢材数量":"66"},{"堆场编号":"ID008","钢材数量":"71"},{"堆场编号":"ID009","钢材数量":"81"},{"堆场编号":"ID010","钢材数量":"38"},{"堆场编号":"ID011","钢材数量":"51"},{"堆场编号":"ID012","钢材数量":"30"},{"堆场编号":"ID013","钢材数量":"80"},{"堆场编号":"ID014","钢材数量":"74"},{"堆场编号":"ID015","钢材数量":"41"},{"堆场编号":"ID016","钢材数量":"61"},{"堆场编号":"ID017","钢材数量":"41"},{"堆场编号":"ID018","钢材数量":"78"},{"堆场编号":"ID019","钢材数量":"63"},{"堆场编号":"ID020","钢材数量":"20"},{"堆场编号":"ID021","钢材数量":"73"},{"堆场编号":"ID022","钢材数量":"85"},{"堆场编号":"ID023","钢材数量":"21"},{"堆场编号":"ID024","钢材数量":"92"},{"堆场编号":"ID025","钢材数量":"44"},{"堆场编号":"ID026","钢材数量":"17"},{"堆场编号":"ID027","钢材数量":"14"},{"堆场编号":"ID028","钢材数量":"0"},{"堆场编号":"ID029","钢材数量":"93"},{"堆场编号":"ID030","钢材数量":"18"},{"堆场编号":"ID031","钢材数量":"96"},{"堆场编号":"ID032","钢材数量":"79"},{"堆场编号":"ID033","钢材数量":"60"},{"堆场编号":"ID034","钢材数量":"20"},{"堆场编号":"ID035","钢材数量":"20"},{"堆场编号":"ID036","钢材数量":"52"},{"堆场编号":"ID037","钢材数量":"58"},{"堆场编号":"ID038","钢材数量":"14"},{"堆场编号":"ID039","钢材数量":"53"}]}
let testChart = Chart3d({data:obj,dom:showArea});