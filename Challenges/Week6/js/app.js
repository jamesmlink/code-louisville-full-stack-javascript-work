//#Week 6 JQuery Code Challenge

//Objects
		
//Code Challenge:
//Create an object named "Box" with 3 properties, height, width, volume.
//Create 2 buttons for Height. The first button decreases the Box Height by 1. The second button increases the Box Height by 1.
//Create a button that prints the object and its attributes to the page (use the span "output".
 
//Extra credit
//Create interactive buttons to decrease or increase the Width and Volume

function Box (height, width) {
	this.height = height;
	this.width = width;
};

Box.prototype.heightChange = function(value) {
	startingBox.height += value;
	var newHTML = "Height: " + startingBox.height +"em";
	$("#height").html(newHTML);
	var newVolHTML = "Vol: " + (startingBox.width * startingBox.height) +"em";
	$("#vol").html(newVolHTML);
};

Box.prototype.widthChange = function(value) {
	startingBox.width += value;
	var newHTML = "Width: " + startingBox.width +"em";
	$("#width").html(newHTML);
	var newVolHTML = "Vol: " + (startingBox.width * startingBox.height) +"em";
	$("#vol").html(newVolHTML);
};

Box.prototype.print = function () {
	var widthCSS = startingBox.width + "em";
	var heightCSS = startingBox.height + "em";	$("#boxman").css("width", widthCSS).css("height", heightCSS);
};

var startingBox = new Box(10,10);

$("#HeightDecrease").click(function() {
	startingBox.heightChange(-1)
});

$("#HeightIncrease").click(function() {
	startingBox.heightChange(1)
});

$("#WeightDecrease").click(function() {
	startingBox.widthChange(-1)
});

$("#WeightIncrease").click(function() {
	startingBox.widthChange(1)
});

$("#Print").click(function () {
	startingBox.print();
});

