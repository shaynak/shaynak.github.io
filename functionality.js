var color = "coral"
var rand = getRandomInt(5, 20);
$(document).ready(function() {
	var link = window.location.href;
	if (link.split("#").length < 2) {
		$("#name").click(function() {
			$("#home").fadeOut(1000);
			$("#content").fadeIn(1000);
		});
	} else {
		$("#home").toggle();
		$("#content").toggle();
		if (link.split("#")[1] == 'projects') {
			$(".proj").toggle();
			$(".abt").toggle();
		}
	}
	$(".bottom-link").click(function() {
		$(".proj").toggle();
		$(".abt").toggle();
	});
	$(document).mousemove(function(event) {
		var x = event.pageX;
		var y = event.pageY;
		if (document.elementFromPoint(x, y) === document.getElementById("home")) {
			appendElem(x, y, rand, color, "#home");
		} else if (document.elementFromPoint(x, y) === document.getElementById("content")) {
			appendElem(x, y, rand, color, "#content");
		}
		if (color == "coral") {
			color = "purple";
		} else {
			color = "coral";
		}
		rand = getRandomInt(5, 20);
	});
});

function appendElem(x, y, rand, color, elem) {
	console.log(100*(x/$('body').width()) + "vw");
	var left = 100*(x/$('body').width()) + "vw";
	var top = 100*(y/$('body').height()) + "vh";
	$(elem).append('<div class = "teenybubs" style = "position:absolute; opacity:0.5; background-color:' + color + '; top:' + top + '; margin-left:' + left + '; width:' + rand + 'px; height: ' + 
		rand + 'px; border-radius:' + rand + 'px"></div>');
}

// @SOURCE mozilla libraries!!
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}