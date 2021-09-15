const toDo1 = (e)=>{
    console.log(e);
}
function toDo2(){
    console.log(this.something);
}
const joao = {
    "something":"correr",
    "execute": toDo2
}
joao.execute();