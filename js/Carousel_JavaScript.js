let index = 0
let timer = 0
//轮播图图片
var ul_li = document.getElementById("ul").getElementsByTagName("li")
//轮播图底部按钮
var point = document.getElementById("point").getElementsByTagName("li")
//轮播图左右按钮
let arrow_left = document.getElementsByClassName("arrow-left")[0]
let arrow_right = document.getElementsByClassName("arrow-right")[0]
//绑定事件
let Bound_event = function() {
	//轮播图左按钮onmouseover
	arrow_left.onclick = function() {
		clearInterval(timer)
		if (--index < 0) index = 4
		ReClass(index)
		AddIndex(index)
		run()
	}
	// 轮播图右按钮
	arrow_right.onclick = function() {
		clearInterval(timer)
		if (++index > 4) index = 0
		ReClass(index)
		AddIndex(index)
		run()
	}
	for (let i = 0; i < point.length; i++) {
		// 轮播图底部按钮
		point[i].onmousedown = function() {
			ReClass(index)
			index = i
			AddIndex(i)
		}
		// 轮播图静止不动
		//鼠标移入
		ul_li[i].onmouseover = function() {
			clearInterval(timer)
		}
		//鼠标移出
		ul_li[i].onmouseout = function() {
			run()
		}
	}
}
//定时器
let run = function() {
	timer = setInterval(function() {
		if (++index === 5) index = 0
		ReClass(index)
		AddIndex(index)
	}, 1000);
}

//显示图片
let AddIndex = function(index) {
	ul_li[index].className = "active"
	point[index].className = "active"
}
//不显示图片
let ReClass = function(index) {
	for (let i = 0; i < ul_li.length; i++) {
		ul_li[i].classList.remove("active")
		point[i].classList.remove("active")
	}
}
run()
Bound_event()