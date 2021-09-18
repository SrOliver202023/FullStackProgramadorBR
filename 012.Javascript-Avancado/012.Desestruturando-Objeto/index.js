const aluno1 = {
    name:"Emmerson",
    matricula: 1234,
    cidade:"Itabuna"
}

const aluno2 = {
    name:"Luiza",
    matricula: 3214,
    cidade:"Itabuna"
}

const aluno3 = {
    name:"Carlos",
    matricula: 6542,
    cidade:"Itabuna"
}

const alunos = [aluno1, aluno2, aluno3];

const [Emmerson, ...outros] = alunos;

console.log(Emmerson);