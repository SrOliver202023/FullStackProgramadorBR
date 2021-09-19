function novoAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("Maria", 18),
    novoAluno("Lucas", 33),
    novoAluno("Julia", 15),
    novoAluno("Matheus", 43)
]
function alunoDaqui5Anos(aluno){
    if(aluno.idade >= 15  && aluno.idade <= 20){
        return aluno;
    }
}


console.log(alunos.filter(alunoDaqui5Anos));




