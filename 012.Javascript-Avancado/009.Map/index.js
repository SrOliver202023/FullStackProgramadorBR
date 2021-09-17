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
function temMenosde30(aluno){
    return aluno.idade < 30;
}

let alunosComMenosde30 = alunos.filter(aluno=> aluno.idade < 30);
console.log(alunosComMenosde30);
