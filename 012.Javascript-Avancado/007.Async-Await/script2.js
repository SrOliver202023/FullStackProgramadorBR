function tShow(a){
    let promise = new Promise(function(resolve, reject){

        console.log("Algo");
        
        let error = false;
        !error? resolve(): reject({ msg: "Erro" });


    })
    return promise;
}
function toExecute(){
    console.log("OK!")
}
tShow("nada")
    .then(toExecute)
    .catch((error)=>{
        console.log(error.msg);
    })
    