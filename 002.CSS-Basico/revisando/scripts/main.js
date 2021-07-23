const btnModel = document.querySelector(".btn-model");
const Result = document.querySelector(".Result");

btnModel.addEventListener("click", ()=> {
    console.log("Hello World!");

    Result.classList.add("PlusResult");

    
    
});
document.addEventListener("click", (e) => {
    const target = e.target;
    
    
    if(target.classList.contains('PlusResult')){
        console.log('OK!');
    }
    if(target.classList.contains('iQuit')){
        Result.classList.remove("PlusResult");
    }
    
});

