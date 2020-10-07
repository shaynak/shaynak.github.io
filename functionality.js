var color = "teal";
var rand = getRandomInt(5, 20);
$(document).ready(function() {
	$(document).mousemove(function(event) {
		var x = event.pageX;
		var y = event.pageY;
		elem = document.elementFromPoint(x - window.pageXOffset, y - window.pageYOffset);
		console.log(elem.tagName);
		if (elem.tagName == "HTML") {
			appendElem(x, y, rand, color, "body");
		}
		if (color == "rgba(211, 206, 235)") {
			color = "rgba(203, 245, 231)";
		} else {
			color = "rgba(211, 206, 235)";
		}
		rand = getRandomInt(5, 20);
	});

	$(".top-link").click(function(event) {
		const elem = event.target;
		$(".top-link-active").removeClass("top-link-active");
		$(elem).addClass("top-link-active");
		box_elem = "#" + elem.innerText
		const box_sections = ["#about", "#experience", "#teaching"];
		box_sections.forEach((section) => $(section).hide());
		$(box_elem).show();
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