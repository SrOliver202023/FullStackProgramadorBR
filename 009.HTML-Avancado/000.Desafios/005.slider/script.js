const slider = document.getElementById("range");
const receive = document.querySelector("#value");

slider.oninput = function(){
    receive.innerText = this.value;
};


slider.addEventListener("mousemove", ()=>{
    let color = `linear-gradient(90deg, rgb(117, 252, 117) ${slider.value}%, rgb(214, 214, 214) ${slider.value}%)`;
    slider.style.background = color;
});