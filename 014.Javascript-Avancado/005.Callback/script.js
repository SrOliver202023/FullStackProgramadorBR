// function toCallAll(a, b){
//     name = "toCallAll"
//     a();

// }
// function a(){
//     console.log(this.name);
//     name = "a"
//     b();
// }
// function b(){
//     console.log(this.name);
//     name = "b"
// }

// toCallAll(a);

let users = ["Adriano", "Marcia", "Jose"];

function insertUsers(name, callback){
    setTimeout(()=>{
        users.push(name)
        callback();
    }, 1000)
};

function listUsers(){
    console.log(users);
}

insertUsers("Igor", listUsers);