let background = echarts.init(document.getElementById('bar_background'));
let bar = new XMLHttpRequest;

option = {
	title: {
		text: '柱状图数据展示',
		left: 'center',
	},
	xAxis: {
		type: 'category',
		data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
	},
	yAxis: [{
		type: 'value',
		name: '商品数',
	}],
	series: [{
		data: [120, 200, 150, 80, 70, 110, 130],
		type: 'bar',
		barWidth: 30,
		itemStyle: {
			normal: {
				color: '#3399ff', //改变折线点的颜色
			}
		},
	}]
};
bar.onreadystatechange = function() {
	if (bar.readyState == 4 && bar.status == 200 || bar.status == 304) {
		let bar_result = bar.responseText;
		let bar_json = JSON.parse(bar_result);
		let week = bar_json.data.xAxis;
		let number = bar_json.data.series;
		background.setOption({
			series: [{
				type: 'bar',
				data: number,

			}],
			xAxis: {
				type: 'category',
				data: week,
			},
		});
	}
}
bar.open("GET", "https://edu.telking.com/api/?type=week", true)
bar.send(null);
background.setOption(option, true);
