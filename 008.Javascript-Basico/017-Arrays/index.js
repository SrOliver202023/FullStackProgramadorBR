let alunos = ["Igor", "José", "Marcos", "Mariana"];


for(let aluno in alunos) console.log(aluno); // index 

console.log("-------------------------");

for(let i =0; i < alunos.length; i++) console.log(i) // index

console.log("-------------------------");

for(let aluno of alunos) console.log(aluno); // valor

console.log("-------------------------");

alunos.forEach(aluno => console.log(aluno)); // valor 
