let piechart = echarts.init(document.getElementById('piechart'));
let line = new XMLHttpRequest;

option = {
	title: {
		text: '饼状图数据展示',
		// subtext: '纯属虚构',
		left: 'center'
	},
	tooltip: {
		trigger: 'item',
		formatter: '{a} <br/>{b} : {c} ({d}%)'
	},
	// legend: {
	//     orient: 'vertical',
	//     left: 'left',
	//     data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
	// },
	series: [{
		name: '访问来源',
		type: 'pie',
		radius: '55%',
		center: ['50%', '60%'],
		data: [],
		// [{ 
		// 	value: 335, 
		// 	name: '直接访问' 
		// }, 
		// { 
		// 	value: 310, 
		// 	name: '邮件营销' 
		// },
		// {
		// 	value: 234,
		// 	name: '联盟广告'
		// },
		// {
		// 	value: 135,
		// 	name: '视频广告'
		// },
		// {
		// 	value: 1548,
		// 	name: '搜索引擎'
		// }
		// ],
		emphasis: {
			itemStyle: {
				shadowBlur: 10,
				shadowOffsetX: 0,
				shadowColor: 'rgba(0, 0, 0, 0.5)'
			}
		}
	}]
};
line.onreadystatechange = function () {
	let result = line.responseText;
	let json = JSON.parse(result);
	let mapp = [];
	for (let i = 0; i < json.data.series.length; i++) {
		let map = {};
		for (let j = 0; j < json.data.xAxis.length; j++) {
			if (i == j) {
				map.value = json.data.series[i];
				map.name = json.data.xAxis[j];
				mapp.push(map);
			}
		}
	}
	let pie = JSON.parse(JSON.stringify(mapp));
	piechart.setOption({
		series: [{
			name: '访问来源',
			data: pie,
		}]
	});
}
line.open("GET", "https://edu.telking.com/api/?type=week", true)
line.send(null);
piechart.setOption(option, true);