const name = document.querySelector("#name");
const midleName = document.querySelector("#midleName");
const btnSend = document.querySelector(".btn-send");

btnSend.addEventListener("click", ()=>{
    const person={
        name: name.value,
        midleName: midleName.value
    }
     localStorage.setItem("person", JSON.stringify(person));
})

const person = JSON.parse(localStorage.getItem("person"));

console.log(person);

 name.value = person.name;
 midleName.value = person.midleName;
