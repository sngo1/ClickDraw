// Samantha Ngo
// Workshop 2 - Canvas
// Softdev - pd7
// 2017-02-05

// Access canvas for actions
var canvas = document.getElementById("slate");
console.log("canvas: ", canvas);
var state = "circle"
var lastX = -1;
var lastY = -1;
var lastShape = "circle";

// Set the context for canvas actions
ctx = canvas.getContext("2d");

// Given the coordinates relative to the canvas upper left corner, draw a circle
// at that location.
var drawCircle = function(x,y){
    console.log("X: ", x);
    console.log("Y: ", y);
   
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "hotpink"
    ctx.fill()
    console.log("Drew a circle.")
    return true
}

// Given the coordinates relative to the canvas upper left corner, draw a square
// centered at that location.
var drawSquare = function(x,y){
    console.log("X: ", x);
    console.log("Y: ", y);

    var side = 20;
    var half = side/2;
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(x - half, y - half, side, side);
    console.log("Drew a square.")
    return true
}

// Based on the global state variable, decide whether to draw a circle or a
// square, connect the new point to the last point, and then draw the shape.
var draw = function(e){
    if (lastX == -1) {
	lastX = e.offsetX;
	lastY = e.offsetY;
    }
    ctx.beginPath()
    ctx.moveTo(lastX,lastY);
    console.log("Moved to ", lastX, " ", lastY)
    ctx.lineTo(e.offsetX, e.offsetY);
    console.log("Line drawn to ", e.offsetX, " " , e.offsetY);
    ctx.strokeStyle = "#FF0000";
    ctx.stroke();
 
    if (lastShape == "square"){
	drawSquare(lastX,lastY);
	lastShape = "circle"

    } else {
	drawCircle(lastX,lastY);
	lastShape = "square";
    }
    
    lastX = e.offsetX;
    lastY = e.offsetY;

    var x = e.offsetX;
    var y = e.offsetY;
    if (state == "square"){
	drawSquare(x,y);
	lastShape = "square";
    } else {
	drawCircle(x,y);
	lastShape = "circle"
    }
    
    return true;
}

// Draw a white rectangle over the canvas to clear it.
var clearCanvas = function(){
    ctx.beginPath();
    lastX = -1;
    lastY = -1;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0,0,600,600);
    console.log("Canvas cleared.");
    return true
}

// Change the state variable to other shape when toggle is pressed
var changeShape = function(){
    if (state == "circle"){
	state = "square";
	var tag = document.getElementById("state");
	console.log("STATE TAG: ", tag);
	console.log("Circle changed to square.");
	lastShape = "circle";
    } else {
	state = "circle";
	var tag = document.getElementById("state");
	console.log("STATE TAG: ", tag);
	console.log("Square changed to circle.");
	lastShape = "square";
    }
    return true
}

// Listen for user clicks
canvas.addEventListener('click', draw);
var toggle = document.getElementById("toggle");
console.log("toggle: ", toggle);
toggle.addEventListener('click', changeShape);
var clear = document.getElementById("clear");
console.log("clear: ", clear);
clear.addEventListener('click', clearCanvas);

