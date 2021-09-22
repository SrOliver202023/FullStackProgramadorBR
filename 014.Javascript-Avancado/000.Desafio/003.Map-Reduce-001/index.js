const employees = [
    {
        name: "Joane",
        position: "Adm",
        salary: 3400
    },
    {
        name: "Carlos",
        position: "Supervisor",
        salary: 5234
    },
    {
        name: "Juliete",
        position: "Seller",
        salary: 2312
    },
    {
        name: "Zack",
        position: "Seller",
        salary: 3000
    },
    {
        name: "Amanda",
        position: "Supervisor",
        salary: 5234
    },
    {
        name: "Roby",
        position: "Seller",
        salary: 2753
    },{
        name: "Mary",
        position: "Seller",
        salary: 3894
    }
]

const analisesResult = employees.filter(employer => employer.position === "Seller")
    .map((value) => value.salary)
    .reduce((comissionTotal, values)=>comissionTotal += values,0);
console.log(analisesResult) 