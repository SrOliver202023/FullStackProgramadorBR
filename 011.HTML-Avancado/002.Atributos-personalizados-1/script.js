let list = document.getElementById("list");
let num = parseInt(list.getAttribute("num"));
let content = "";

for(let i = 0; i < num; i++) content += "<li>" + i + "</li>";
list.innerHTML = content;

document.getElementById("like").addEventListener("click", (e)=> e.target.getAttribute("src")=="./images/liker.png" ? e.target.setAttribute("src", "./images/desliker.png"):e.target.setAttribute("src", "./images/liker.png"));
