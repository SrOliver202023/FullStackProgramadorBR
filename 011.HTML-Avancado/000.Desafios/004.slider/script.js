const slider = document.getElementById("myRange");
const output = document.getElementById("value");

slider.oninput = function() {
    output.innerHTML = this.value;
}

slider.addEventListener("mousemove", function(){
    let x = slider.value;
    let color = `linear-gradient(90deg, rgb(117, 252, 117) ${x}%, rgb(214, 214, 214) ${x}%)`
    slider.style.background = color;
})