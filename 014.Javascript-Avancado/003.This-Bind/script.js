function readElement1(element){
    console.log(element.name);
}
function readElement2(a){
    let name = "nada";
    console.log(this.name);
}
const person = {
    "name":"Joao"
};

// readElement2(person); 

const bindedFunction = readElement2.bind(person);

bindedFunction();

const readElement3 = (element)=>{
    console.log(name);
}