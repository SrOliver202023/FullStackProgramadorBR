let pessoa = {
    name: "José Silva",
    idade: 32
}

let contato = {
    telefone: 87123123,
    email: "jose@gmail.com"
}

let copia = {...pessoa, cidade: "Rio de Janeiro"}

copia.idade = 88;

console.log(pessoa);
console.log(copia);

let notasTurma1 = [10, 8, 4, 3];
let notasTurma2 = [4, 5, 4, 6];
let todasNotas = [...notasTurma1, ...notasTurma2];