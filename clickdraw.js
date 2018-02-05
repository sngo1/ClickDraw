var canvas = document.getElementById("slate");
console.log("canvas: ", canvas);
var state = "circle"

ctx = canvas.getContext("2d");

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

var draw = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    if (state == "square"){
	drawSquare(x,y);
    } else {
	drawCircle(x,y);
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

canvas.addEventListener('click', draw);
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
