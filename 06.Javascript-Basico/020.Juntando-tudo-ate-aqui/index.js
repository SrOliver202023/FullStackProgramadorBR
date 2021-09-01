// Nome do aluno - nota1 - nota2- media - Aprovado

const alunos = ["Igor", "José", "Emmerson"];
const nota1 = [6.3, 4.2, 7];
const nota2 = [2.1, 6.5, 9];

function media(nota1, nota2){
    return (nota1 + nota2)/2;
}
let avaliation = (media) => media > 6 ? "Aprovado  ": "Reprovado "; 

for(let i in alunos){
    let nomeAluno = alunos[i].padEnd(10, " ");
    this.nota1 = nota1[i].toFixed(2);
    this.nota2 = nota2[i].toFixed(2);
    this.media = media(nota1[i], nota2[i]).toFixed(2);
    console.log(`| Aluno: ${nomeAluno} | ${this.nota1} , ${this.nota2} | Média: ${this.media} | ${avaliation(this.media)}|`);
}
