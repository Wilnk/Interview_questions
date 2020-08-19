// 滑块效果
let list = document.getElementsByClassName("Navigation_Id");
let piece = document.getElementsByClassName("slider")[0];
for (let i = 0; i < list.length; i++) {
	list[i].index = i;
}
for (let i = 0; i < list.length; i++) {
	list[i].onmouseover = function() {
		piece.style.backgroundColor = "#3E8760";
		piece.style.left = 250 + 90 * this.index + "px";
	}
	list[i].onmousedown = function() {
		piece.style.backgroundColor = "#3E8760";
		piece.style.left = 250 + 90 * this.index + "px";
	}
}