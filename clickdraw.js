var canvas = document.getElementById("slate");
console.log("canvas: ", canvas);
var state = "Circle"

ctx = canvas.getContext("2d");

var draw = function(){
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(50,50,800,200)
    ctx.fillStyle = "#f34566";
    ctx.fillRect(150,70,80,200)
    //code for drawing a rectangle
    console.log("Drew a rectangle")
    return true
}

var drawCircle = function(e){
    console.log("X: ", e.offsetX);
    console.log("Y: ", e.offsetY);
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(50,50,800,200)
    ctx.fillStyle = "#f34566";
    ctx.fillRect(150,70,80,200)
    //code for drawing a rectangle
    console.log("Drew a rectangle")
    return true
}

var draw = function(){
    if (state == "square"){
	drawCircle();
    } else {
	drawCircle();
    }
    return true;
}

var clearCanvas = function(){
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0,0,600,600);
    console.log("Canvas cleared.");
    return true
}

var changeShape = function(){
    if (state == "circle"){
	state = "square";
	var tag = document.getElementById("state");
	console.log("STATE TAG: ", tag);
	console.log("Circle changed to square.");
    } else {
	state = "circle";
	var tag = document.getElementById("state");
	console.log("STATE TAG: ", tag);
	console.log("Square changed to circle.");
    }
    return true
}

canvas.addEventListener('click', drawCircle);
var toggle = document.getElementById("toggle");
console.log("toggle: ", toggle);
toggle.addEventListener('click', changeShape);
var clear = document.getElementById("clear");
console.log("clear: ", clear);
clear.addEventListener('click', clearCanvas);


/*
var ctx = c.getContext("2d");
console.log(ctx);

// Draw Rectangles
ctx.fillStyle = "#ff0000";
ctx.fillRect(50,50,800,200)
ctx.fillStyle = "#f34566";
ctx.fillRect(150,70,80,200)
*/

/*
// Initial Setup
// 1. Activate event listener for the button
var b = document.getElementById("b");
console.log("b:", b);
b.addEventListener('click', buttonCallBack);
// 2. Activate responses for each of the initial items in the list
activate();
*/
