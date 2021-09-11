const display = document.getElementById("display");

let ctx = display.getContext("2d");

ctx.rect(10, 10, 100, 200);

ctx.fillStyle = "blue";
// ctx.fillRect(10, 10, 100, 200);
ctx.lineWidth = 5;
ctx.strokeStyle = "red";
// ctx.strokeRect(10, 10, 100, 200);

ctx.fill();
ctx.stroke();

ctx.clearRect(20, 20, 30, 30)