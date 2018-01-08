// JavaScript Document
var currproject = "#project-first";

var projs = [["PROJECTS", "I love to create new things--I've been designing for as long as I can remember, from when I was eight years old and carried an 'inventor's notebook' with me wherever I went to the projects I work on now. I love investigating things at the intersection of disciplines, whether that's art and computer science, biology and engineering, or environmental science and evolution. After all, the ideas that change the world are the interdisciplinary ones."], ["ANTIKYTHERA", "I used Javascript to create a bias-checking Google Chrome extension that uses a 5 nearest-neighbors algorithm to determine the general bias of a webpage based on word frequencies. With the prevalence of bias and the presence of partisan 'bubbles' on the internet, I decided to do something about it, so I created Antikythera! The extension is published on the Chrome Web Store."], ["JARL", "As a part of the club EnableTech, I spent this semester working on the preliminary design for JARL: Just Another Robotic Limb. JARL is a wheelchair attachment for people with limited hand mobility, and our team hopes that we will eventually be able to put JARL on the market as a low-cost option for people to use. I specifically helped design the linear actuator that helps the arm move on the z-axis this semester."], ["WEBSITES", 'This is my personal project: I designed this website from scratch so that I could learn more HTML/CSS. Although I first learned the two while experimenting with web design in eighth grade, I had avoided web development since then because I thought it was really tedious. However, with the development of this website, I learned that I enjoy using HTML, CSS, and jQuery to design websites. I have since started building more websites and have also built a writing portfolio for myself at <a href = "http://shaynak.github.io/writing" style = "color: azure">shaynak.github.io/writing</a>.']];
var index = 0;
$(document).ready(function() { /*
	"use strict";
	projectShow();
	$(".link").click(function(){
		currproject = '#' + $(this).data('rel');
		projectShow();
	}); */
	"use strict";
	showAtIndex(index);
	console.log("pie");
	$("#left.button").click(function() {
		index -= 1;
		showAtIndex();
	});
	$("#right.button").click(function() {
		index += 1;
		showAtIndex();
	});
});

function showAtIndex() {
	if (index == projs.length) {
		index = 0;
	} else if (index < 0) {
		index = projs.length - 1;
	}
	var title = projs[index][0];
	var text = projs[index][1];
	console.log("hello");
	console.log(title);
	console.log(index);
	$("#proj-title").text(title);
	$("#proj-text").html(text);
}

function projectShow() {
	"use strict";
	$(".unselected").fadeOut(500);
	$(currproject).fadeToggle(1000);
}