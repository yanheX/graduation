define('scripts/app/transData', [], function() {
	return function(rawData) {
		// 目前仅实现了构造datum
		keyType = {
			dims: [],
			meas: []
		}
		Object.keys(rawData[0]).forEach(function(item) {
			if (isNaN(Number(rawData[0][item]))) {
				keyType.dims.push(item)
			} else {
				keyType.meas.push(item)
			}
		})


		var parseKey = Object.keys(keyType).map(function(item) {
			let tempArray = keyType[item].map(function(dItem) {
				let obj = {};
				obj[item.substr(0, 3) + '_' + parseInt(Math.random() * 900 + 99)] = dItem;
				return obj;
			})
			console.info(tempArray)
			let obj = {};
			for (let i = 0; i < tempArray.length; i++) {
				Object.assign(obj, tempArray[i])
			}
			return obj;
		})
		finalKey = {
			'dims': parseKey[0],
			'meas': parseKey[1]
		}
		keyType = finalKey
		var middleData = rawData.forEach(function(item) {
			item.datum = {}
			Object.assign(item.datum, keyType);
			Object.keys(keyType).forEach(function(dItem, dIndex) {
				Object.keys(keyType[dItem]).forEach(function(tItem, tIndex) {
					item.datum[tItem] = item[keyType[dItem][tItem]];

					if (!dIndex && tIndex === 0) {
						item.name = item[keyType[dItem][tItem]]
					}
					if (dIndex && tIndex === 0) {
						item.value = item[keyType[dItem][tItem]]
					}
					delete item[keyType[dItem][tItem]];
				})
			})
			return item;
		})
		seriesData.data.push({
			data: middleData
		})
		data = {
			keyType: keyType,
			seriesData: seriesData,
			rawData: rawData
		}
	}

})