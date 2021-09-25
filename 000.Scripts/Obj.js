const students = [
  {name:"Emmerson", age:19, city:"Itabuna-ba"},
  {name:"Livia", age:38, city:"Itabui-ba"},
  {name:"Carlos", age:24, city:"Joacan-ba"},
  {name:"Izabel", age:28, city:"Ipicuiba-ba"},
  {name:"Juliana", age:16, city:"Sanaina-ba"},
  {name:"Pandora", age:19, city:"Ilheus-ba"},
  {name:"Gabriel", age:15, city:"Salvador-ba"},
  {name:"Marcos", age:32, city:"Aracaju-ba"},
  {name:"Felipe", age:18, city:"Ubaitaba-ba"}, 
]


let result = Object.values(students)
  .filter((item) => item.name === "Pandora")

console.log(students.findIndex(item => item.name === result[0].name));
