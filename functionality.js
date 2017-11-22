// JavaScript Document
var currproject = "#project-first";

$(document).ready(function() {
	"use strict";
	projectShow();
	$(".link").click(function(){
		currproject = '#' + $(this).data('rel');
		projectShow();
	});
});

function projectShow() {
	"use strict";
	$(".unselected").hide();
	$(currproject).show();
}