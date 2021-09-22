const list = document.querySelector("#list");

console.log(list.dataset.n);

for(let i=0;i<=parseInt(list.dataset.n); i++) list.innerHTML+=`<li>Item-${i}</li>`