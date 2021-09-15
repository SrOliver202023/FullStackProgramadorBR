let users = ["Adriano", "Marcia", "Jose"];

function insertUsers(name){
    let promise = new Promise(function (resolve, reject){
        setTimeout(()=>{
            users.push(name);
            let error = true;

            !error?resolve():reject({ msg: "Erro Detected!" })
            
        }, 1000);
    })
    return promise;
}
function usersList(){
    console.log(users);
}

insertUsers("Igor")
    .then(usersList)
    .catch((error)=>{
        console.log(error.msg);
    });