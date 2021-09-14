const defaultMeses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];
let iMarket = {
    "Janeiro": 1000,
    "Fevereiro": 2000,
    "Março": 3000,
    "Abril": 4000,
    "Maio": 5000,
    "Junho": 6000,
    "Julho": 7000,
    "Agosto": 8000,
    "Setembro": 9000,
    "Outubro": 10000,
    "Novembro": 11000,
    "Dezembro": 12000
};
let iMarket2 = {
    "Janeiro": 1000,
    // "Fevereiro": 2000,
    // "Março": 3000,
    // "Abril": 4000,
    "Maio": 5000,
    "Junho": 6000,
    "Julho": 7000,
    "Agosto": 8000,
    "Setembro": 9000,
    "Outubro": 10000,
    "Novembro": 11000,
    "Dezembro": 12000
};
const newMarket = {};

Object.keys(iMarket2).forEach(function(key, index) {
// console.log(key, iMarket[key]);
    // console.log(key, defaultMeses[index]);
    // if(key == defaultMeses[index]){
    //     console.log(`key : ${key} , meses : ${defaultMeses[index]}`);
    // }
    const iDiff = [];
    defaultMeses.filter((e)=>{
        if(e === key){

        }
    })
    console.log(iDiff);
});



// Object.keys(newMarket).forEach(function(key, index) {
//     console.log(key, newMarket[key]);
// });
