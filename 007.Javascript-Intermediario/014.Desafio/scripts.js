const btnAdd = document.querySelector(".btn-add");
const inputTask = document.querySelector("#inputTask");
const result = document.querySelector(".result");
const countTasks = document.querySelector(".result .count-Tasks span");
window.onload=()=>{
    reloadTasks();
    checkTasks();
    attCount();
}
btnAdd.addEventListener('click', ()=>{
    
    if(inputTask.value !== ""){
        result.appendChild(newTask(inputTask.value))
        let analise = result.contains(document.querySelector(".withoutTask"));
        if(analise == true){
            document.querySelector(".withoutTask").remove();
        }
        inputTask.value = "";
        inputTask.focus();
        attCount();
        saveTasks();
    }
})

document.addEventListener('click', (e)=>{
    if(e.target.className == "btn-drop"){
        e.target.parentElement.remove();
        console.log(e.target.parentElement.id);
        localStorage.removeItem("tasks",e.target.parentElement.id);
        checkTasks();
        attCount();
        saveTasks();
    }
});

const newTask = (name)=>{
    const newObj = document.createElement("div");
    newObj.classList.add("task");
    newObj.setAttribute("id",name);
    newObj.innerText = name;

    const btnDrop = document.createElement("div");
    btnDrop.innerText = "X";
    btnDrop.classList.add("btn-drop");
    newObj.appendChild(btnDrop);

    return newObj;
};

const checkTasks = ()=>{
    let countChild = (result.childElementCount - 1);

    if(! result.contains(document.querySelector(".task"))) {
        const tAlert = document.createElement("h3");
        tAlert.classList.add("withoutTask");
        tAlert.innerText="Sem Tarefas";
        result.appendChild(tAlert);
    }
}
const attCount = ()=>{
    let numC = 0;
    let nTasks = document.querySelectorAll(".result .task");
    nTasks.forEach(item=>numC++);
    countTasks.innerText = numC;
}
const saveTasks = ()=>{
    localStorage.clear();
    let nTasks = document.querySelectorAll(".result .task");
    const tasks = [];
    nTasks.forEach((item)=>{
        tasks.push(item.id);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
const reloadTasks = ()=>{
    let n = [];
    let nTasks = JSON.parse(localStorage.getItem("tasks", [...n]))
    nTasks.forEach((item)=>{
        result.appendChild(newTask(item));
    });

}