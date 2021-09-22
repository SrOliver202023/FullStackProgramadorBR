const btnList = document.querySelector(".btn-list");
const sectionRight = document.querySelector(".container .section-right");
const btnCloseList = document.querySelector(".btn-close-list");

const btnPlay = document.querySelector(".btn-primary");
const btnBack = document.querySelector("#toBack");
const btnNext = document.querySelector("#toForward");

const audio = document.querySelector("audio");
const iDurationTime = document.querySelector(".duration-time");
const iCurrentTime = document.querySelector(".current-time");
const slider = document.querySelector(".slider");
setTimeout(()=>{
    iDurationTime.innerHTML = `${convertTime(audio.duration, "minutes")}:${convertTime(audio.duration, "seconds")}`;

}, 15);

btnList.addEventListener("click", ()=>sectionRight.style.display = "initial");
btnCloseList.addEventListener("click", ()=>sectionRight.style.display = "none");

btnBack.addEventListener("click", ()=> {
    audio.currentTime -= 15;
});
btnNext.addEventListener("click", ()=> {
    audio.currentTime += 15;
})

btnPlay.addEventListener("click", ()=>{
    if(btnPlay.getAttribute("src")=="./Assets/Play.png"){
        audio.play();
        btnPlay.setAttribute("src", "./Assets/Pause.png");
    }else{ 
        btnPlay.setAttribute("src", "./Assets/Play.png");
        audio.pause();
    }    
});    
slider.addEventListener("click", function(){
    audio.currentTime = slider.value * audio.duration / 100;
    attSlider();
});
slider.addEventListener("oninput", function(){
    audio.currentTime = slider.value;
})
audio.ontimeupdate = ()=>{
    attSlider();
} 
const convertTime = (duration, receiveValue)=>{
    let hour = Math.floor(duration / 3600).toFixed(0);
    let minutes = Math.floor(duration / 60).toFixed(0);
    let seconds = Math.floor(duration - (minutes * 60)).toFixed(0);
    if(receiveValue == "hour") return hour.length == 1 ? `0${hour}`: hour;        
    if(receiveValue == "minutes") return minutes.length == 1? `0${minutes}`: minutes;
    if(receiveValue == "seconds") return seconds.length == 1? `0${seconds}`: seconds;
};    
const attSlider = ()=>{

    slider.value = audio.currentTime/audio.duration * 100;
    iCurrentTime.innerHTML = `${convertTime(slider.value * audio.duration / 100, "minutes")}:${convertTime(slider.value * audio.duration / 100, "seconds")}`;
    let color = `linear-gradient(90deg, rgb(117, 252, 117) ${slider.value}%, rgb(214, 214, 214) ${slider.value}%)`;
    slider.style.background = color;
}