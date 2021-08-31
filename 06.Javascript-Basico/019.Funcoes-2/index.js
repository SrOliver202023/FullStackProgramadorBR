let getRandom = ()=> Math.random() * (1-10) + 10;

function mediaTo(n1, n2) {
    let nota1 = n1;
    let nota2 = n2;
    media = (nota1 + nota2) / 2;
    return media;
}

let resultado1 = mediaTo(6, 7);

let mediaTo2 = (n1, n2) =>{
    return console.log(((n1+n2) /2).toFixed(2))
}
let setNum = getRandom();
mediaTo2(setNum, setNum);
