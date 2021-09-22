// functions dentro de objetos se torna metodos
function calcMedia () {
    return (this.notas[0] + this.notas[1]) / 2;
}

const aluno1 = {
    nome: "Igor",
    notas: [9, 8],

    media: calcMedia
}

const aluno2 = {
    nome: "Emmerson",
    notas: [6, 7],

    media: calcMedia
}

console.log(aluno1.nome);
console.log(aluno1.media());

console.log(aluno2.nome);
console.log(aluno2.media());