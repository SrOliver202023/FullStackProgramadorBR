const iType = document.getElementById("iType");
const h1 = document.getElementById("title");

iType.addEventListener("input", ()=>{
    h1.innerText = iType.value;
    localStorage.setItem("value", iType.value);
    console.log('hi')
})


onload = function(){
    iType.value = localStorage.getItem("value"); 
    h1.innerText = localStorage.getItem("value");
    console.log('hi')
}
