let line_smooth = echarts.init(document.getElementById('line_smooth'));
let line_ajax = new XMLHttpRequest;

option = {
    title: {
        text: '曲线图数据展示',
        left: 'center'
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
        itemStyle: {
            normal: {
                color: '#3399ff', //改变折线点的颜色
                lineStyle: {
                    color: '#3399ff' //改变折线颜色
                }
            }
        },
        label: {
            normal: {
                show: true,
            }
        },
    }]
};
line_ajax.onreadystatechange = function () {
    let line_result = line_ajax.responseText;
    let line_json = JSON.parse(line_result);
    let quantity = line_json.data.series;
    let time = line_json.data.xAxis;
    line_smooth.setOption({
        series: [{
            type: 'line',
            data: quantity,
        }],
        xAxis: {
            type: 'category',
            data: time,
        },
    });
}
line_ajax.open("GET", "https://edu.telking.com/api/?type=month", true)
line_ajax.send(null);
line_smooth.setOption(option, true);