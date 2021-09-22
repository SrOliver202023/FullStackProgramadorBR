const video = document.querySelector("video");
const toBack = ()=> video.currentTime -= 15;
const toForward= ()=> video.currentTime += 15; 
const toDecrease = ()=> video.playbackRate -= 0.1;
const toIncrease= ()=> video.playbackRate += 0.1;
const toPlay= ()=> video.play();
const toStop= ()=> video.pause();
const toCheckSituation = ()=> video.paused === true ? video.play(): video.pause();