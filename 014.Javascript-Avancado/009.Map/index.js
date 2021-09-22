// function novoAluno(nome, idade){
//     return {nome, idade}
// }
// let alunos = [
//     novoAluno("Mario", 23),
//     novoAluno("Maria", 18),
//     novoAluno("Lucas", 33),
//     novoAluno("Julia", 15),
//     novoAluno("Matheus", 43)
// ]
// function alunoDaquiA5Anos(aluno){
    // aluno.idade += 5; está modificando os valores originais do objeto!
//     return { name: aluno.nome }
// }
// function filtreIdade(aluno){
//     if(aluno.idade <= 25){
//         return aluno;
//     }
// }
// let procureAlunos = alunos.filter(filtreIdade);
// console.log(procureAlunos);
// let tt = procureAlunos.map(alunoDaquiA5Anos);
// console.log(tt);
// let toSearch = alunos.filter(filtreIdade).map(alunoDaquiA5Anos);
// console.log(toSearch);

let alunoA = {nome:"Igor", idade:15};

// slice(objeto/variavel), [...nomeDaVariaveil], [...nomeDoObjeto]

let alunoB = Object.assign({}, alunoA);
alunoA.idade += 5;
alunoB.idade += 20;

console.log(alunoA, alunoB);
