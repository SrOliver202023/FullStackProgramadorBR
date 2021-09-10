const btnList = document.querySelector(".btn-list");
const sectionRight = document.querySelector(".container .section-right");
const btnCloseList = document.querySelector(".btn-close-list");

btnList.addEventListener("click", ()=>{
    sectionRight.style.display = "initial";
})
btnCloseList.addEventListener("click", ()=>{
    sectionRight.style.display = "none";
});