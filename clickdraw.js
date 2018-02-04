var canvas = document.getElementById("slate");
console.log("canvas: ", canvas);

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

var clearCanvas = function(){
    canvas.fillStyle("#000000")
    console.log("Canvas cleared.")
    return true
}

canvas.addEventListener('click', draw);
var toggle = document.getElementById("toggle");
console.log("toggle: ", toggle);
canvas.addEventListener('click', draw);
var clear = document.getElementById("clear");
console.log("clear: ", clear);
canvas.addEventListener('click', clearCanvas);

//var a

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
