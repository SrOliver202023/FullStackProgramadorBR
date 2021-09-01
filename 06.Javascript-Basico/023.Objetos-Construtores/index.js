function aluno(nome, n1, n2){
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function(){
        return(this.nota1 + this.nota2) / 2;
    }
}

// let turma = [
//     criarAluno("Igor", 9, 6),
//     criarAluno("Joao", 7, 4),
//     criarAluno("Marcela", 8, 7.5)
// ]

// let aluno = turma[2];
