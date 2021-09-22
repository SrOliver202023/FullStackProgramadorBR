function composition(...functions){
    return function(value){
        return functions.reduce((acumulator, childrenFunctions) =>{
            return childrenFunctions(acumulator);
        }, value)
    } 
}
const toSpeakUpperCase = (value) => value.toLocaleUpperCase();
const removeSpaces = (value) => value.replace(" ","");
const addYears = (value) => `${value} 2021`;

const theGeneral = composition(
    toSpeakUpperCase,
    removeSpaces,
    addYears
)

let result = theGeneral("hello man")
console.log(result);