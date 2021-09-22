const alunos = [
    {
        nome: "Emmerson",
        idade: 18,
        cidade: "Itabuna",
        estado: "Bahia"
    },
    {
        nome: "Marcos",
        idade: 12,
        cidade: "Ilhéus",
        estado: "Bahia"
    },
    {
        nome: "Lucas",
        idade: 24,
        cidade: "Ubaitaba",
        estado: "Bahia"
    }
];
for(let aluno of alunos){
    aluno["itens"] = {
        veiculo: "Carro",
        casa: "Kitnet",
        escova: "Azul"
    };
     console.log(`Nome: ${aluno.nome} Itens: ${ aluno }`);
    console.log(aluno);
}