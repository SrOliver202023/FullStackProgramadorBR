let display = document.getElementById("display");

let view = display.getContext("2d");

view.moveTo(0,0);
view.lineTo(250, 250);
view.lineTo(500, 0);
view.stroke();