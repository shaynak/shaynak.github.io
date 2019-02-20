var color = "teal";
var rand = getRandomInt(5, 20);
$(document).ready(function() {
	$(document).mousemove(function(event) {
		var x = event.pageX;
		var y = event.pageY;
		console.log(document.elementFromPoint(x, y));
		elem = document.elementFromPoint(x - window.pageXOffset, y - window.pageYOffset);
		if (!elem || !elem.classList.contains("nobubbles")) {
			appendElem(x, y, rand, color, "body");
		}
		if (elem) {
				console.log(elem.classList + " " + elem.classList.contains("nobubbles"));
			}
		if (color == "darkgray") {
			color = "teal";
		} else {
			color = "darkgray";
		}
		rand = getRandomInt(5, 20);
	});
});

function appendElem(x, y, rand, color, elem) {
	var left = 100*(x/window.innerWidth) + "vw";
	var top = 100*(y/window.innerHeight) + "vh";
	$(elem).append('<div class = "teenybubs" style = "position:absolute; opacity:0.2; background-color:' + color + '; top:' + top + '; margin-left:' + left + '; width:' + rand + 'px; height: ' + 
		rand + 'px; border-radius:' + rand + 'px"></div>');
}

// @SOURCE mozilla libraries!!
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}