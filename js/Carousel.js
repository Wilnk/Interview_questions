$(function() {
	let timer = 0
	let index = 0
	let BoundEvent = function() {
		$(".ul li").hover(function() {
			clearInterval(timer)
			index = $(this).index()
			SwitchStyle()
		}, function() {
			run()
		})
		$(".arrow-left").click(function() {
			clearInterval(timer)
			if (--index < 0) index = 5
			SwitchStyle()
			run()
		})
		$(".arrow-right").click(function() {
			clearInterval(timer)
			if (++index > 5) index = 0
			SwitchStyle()
			run()
		})
	}
	BoundEvent()
	let MouselickC = function() {
		$(".point li").click(function() {
			index = $(this).index()
			SwitchStyle()
		})
	}
	MouselickC()
	let run = function() {
		timer = setInterval(function() {
			if (++index === 5) index = 0
			SwitchStyle()
		}, 1000);
	}
	run()
	let SwitchStyle = function() {
		$(".ul li").eq(index).addClass("active").siblings(".active").removeClass("active")
		$(".point li").eq(index).addClass("active").siblings(".active").removeClass("active")
	}
})
