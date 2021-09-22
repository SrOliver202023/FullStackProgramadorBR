// Carne - 400gr por pessoa + de 6 horas - 650gr
// Refrigerante/agua - 1000ml por pessoa + 6 horas 1500ml
// Cerveja - 1200ml por Pessoa + de 6 horas - 2000ml
// Crianças valem por 0,5 (metade)
const btnCalculate = document.querySelector(".btnCalculate");
const theCalc = ()=>{
    const iAdults = document.getElementById("adults");
    const iChildren = document.getElementById("children");
    const iDuration = document.getElementById("duration");
    const iResult = document.getElementById("result");

    const amountMeat = (duration)=> duration >= 6 ? 650 : 400; 
    const amountBeer = (duration)=> duration >= 6 ? 2000 : 1200;
    const amountDrinks = (duration)=> duration >= 6 ? 1500 : 1000;

    let totalAmountMeat = amountMeat(iDuration.value) * iAdults.value + ((amountMeat(iDuration.value)/2) * iChildren.value);
    let totalAmountDrinks = amountDrinks(iDuration.value) * iAdults.value + ((amountDrinks(iDuration.value)/2) * iChildren.value); 
    let totalAmountBeer = amountBeer(iDuration.value) * iAdults.value;
    
    iResult.innerHTML = `<p>${totalAmountMeat / 1000} Kg de 🍖Carne.</p>`;
    iResult.innerHTML += `<p>${Math.ceil(totalAmountDrinks /2000)} Pet's 2L de 🥤bebidas.</p>`;
    iResult.innerHTML += `<p>${Math.ceil(totalAmountBeer / 355)} Latas de 🍻Cerveja.</p>`;
};
btnCalculate.addEventListener("click", theCalc);