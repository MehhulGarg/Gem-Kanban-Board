// drag and drop
function drag(obj) {
    obj.dataTransfer.setData("text", obj.target.id);
}

function allowDrop(obj) {
    obj.preventDefault();
}

function drop(obj) {
    obj.preventDefault();
    var data = obj.dataTransfer.getData("text");
    obj.currentTarget.appendChild(document.getElementById(data));

}
//create new task block
function createTask(){
    var a = document.getElementById("backlog");
    var b = document.getElementById("inProgress");
    var c = document.getElementById("inTesting");
    var d = document.getElementById("done")
    var z = document.getElementById("create-new-task");
    if (a.style.display === "none") {
        a.style.display = "block";
        b.style.display = "block";
        c.style.display = "block";
        d.style.display = "block";
        z.style.display = "none";
    } else {
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        z.style.display = "flex";
    }
}
//save new task
function saveTask(){

    var todo= document.getElementById("todo");
    var backlog = document.getElementById("backlog");
    var inProgress = document.getElementById("inProgress");
    var inTesting = document.getElementById("inTesting");
    var done = document.getElementById("done");
    var taskName = document.getElementById("task-name").value;
    var taskDesc = document.getElementById("task-description").value;
    var taskStatus = document.getElementById("task-status").value;
    var taskDeadline = document.getElementById("task-deadline").value;
    var taskassignee = document.getElementById("task-assignee").value;
    if(taskStatus == "todo"){
    todo.innerHTML += `<div class="item-input" id="${taskName.toLowerCase().split(" ").join("")}" draggable="true" ondragstart="drag(event)">
    <strong>${taskName}</strong>
    <span class="options">
        <i class="fas fa-trash-alt" onclick="deleteItem(this)"></i>
    </span>
    <hr><div class="task-description" contenteditable="true">Description: ${taskDesc} </div>
    <div class="task-deadline" contenteditable="true">Deadline: ${taskDeadline}</div>
    <div class="task-assignee" contenteditable="true">Assignee: ${taskassignee}</div>
    </div>`
    acceptData();
    }

    else if(taskStatus =="backlog"){
    backlog.innerHTML += `<div class="item-input" id="${taskName.split(" ").join("")}" draggable="true" ondragstart="drag(event)">
    ${taskName}
    <span class="options">
        <i class="fas fa-trash-alt" onclick="deleteItem(this)"></i>
    </span>
    <hr><div class="task-description" contenteditable="true">Description: ${taskDesc} </div>
    <div class="task-deadline" contenteditable="true">Deadline: ${taskDeadline}</div>
    <div class="task-assignee" contenteditable="true">Assignee: ${taskassignee}</div>
    </div>`
    acceptData();
    }
    
    else if(taskStatus =="inProgress"){
        inProgress.innerHTML += `<div class="item-input" id="${taskName.split(" ").join("")}" draggable="true" ondragstart="drag(event)">
        ${taskName}
        <span class="options">
            <i class="fas fa-trash-alt" onclick="deleteItem(this)"></i>
        </span>
        <hr><div class="task-description" contenteditable="true">Description: ${taskDesc} </div>
        <div class="task-deadline" contenteditable="true">Deadline: ${taskDeadline}</div>
        <div class="task-assignee" contenteditable="true">Assignee: ${taskassignee}</div>
        </div>`
        acceptData();
    }
    else if(taskStatus =="inTesting"){
            inTesting.innerHTML += `<div class="item-input" id="${taskName.split(" ").join("")}" draggable="true" ondragstart="drag(event)">
            ${taskName}
            <span class="options">
                <i class="fas fa-trash-alt" onclick="deleteItem(this)"></i>
            </span>
            <hr><div class="task-description" contenteditable="true">Description: ${taskDesc} </div>
            <div class="task-deadline" contenteditable="true">Deadline: ${taskDeadline}</div>
            <div class="task-assignee" contenteditable="true">Assignee: ${taskassignee}</div>
            </div>`
            acceptData();
    }
    else if(taskStatus =="done"){
                done.innerHTML += `<div class="item-input" id="${taskName.split(" ").join("")}" draggable="true" ondragstart="drag(event)">
                ${taskName}
                <span class="options">
                    <i class="fas fa-trash-alt" onclick="deleteItem(this)"></i>
                </span>
                <hr><div class="task-description" contenteditable="true">Description: ${taskDesc} </div>
                <div class="task-deadline" contenteditable="true">Deadline: ${taskDeadline}</div>
                <div class="task-assignee" contenteditable="true">Assignee: ${taskassignee}</div>
                </div>`
                acceptData();
    }
}
//accept data in local storage
let data = [];
let acceptData= () => {
    var taskName = document.getElementById("task-name").value;
    var taskDesc = document.getElementById("task-description").value;
    var taskStatus = document.getElementById("task-status").value;
    var taskDeadline = document.getElementById("task-deadline").value;
    var taskassignee = document.getElementById("task-assignee").value;
    data.push({
        tname : taskName,
        description : taskDesc,
        assignee : taskassignee,
        deadline : taskDeadline
    });
    localStorage.setItem("data", JSON.stringify(data));
    
    console.log(data);
}
//delete item from kanban board as well as from local storage
let deleteItem = (e) => {
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id, 1);

    localStorage.setItem("data", JSON.stringify(data));

    console.log(data);
}

let editItem = (e) => {
    var taskName = document.getElementById("task-name").value;
    var taskDesc = document.getElementById("task-description").value;
    taskName.value = e.parentElement.previousElementSibling.innerHTML;
    taskDesc.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};

// function to update data by using AJAX

// let url = "https://jsonplaceholder.typicode.com/posts/4";
// let payload ={
//     userId: 1,
//     id : 4,
//     title: "kanban Board",
//     body : "A kanban board is a physical or digital project management tool designed to help visualize work, limit work-in-progress, and maximize efficiency(or flow)."
// }
// let options = {
//     method: "PUT",
//     body : JSON.stringify(payload)
// }
// fetch(url,options)
// .then(response => console.log(response.status));

// function editTask(){
//     var z = document.getElementById("create-new-task");
//     z.style.display="block"
//     var saveButton = document.getElementById("save-button");
//     var editButton = document.getElementById("edit-button");
//     if (saveButton.style.display === "none") {
//         saveButton.style.display = "block";
//         editButton.style.display = "none";
//     } else{
//         saveButton.style.display = "none";
//         editButton.style.display = "block";
//     }
// }



