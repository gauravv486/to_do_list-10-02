const taskInput = document.getElementById("taskInput");
const taskcontent = document.getElementById("To-Do-list");

function createlement() {
    if (taskInput.value === "") {
        alert("You Haven't Write your Task");
    } else {
        let element = document.createElement("div");
        element.id = "element-container";
        element.style.display = "flex";

        let taskInputElement = document.createElement("input");
        taskInputElement.id = "taskelement";
        taskInputElement.value = taskInput.value;

        let editButtonElement = document.createElement("button");
        editButtonElement.id = "editbtn";
        editButtonElement.textContent = "Edit";
        editButtonElement.addEventListener("click", function () {
            editclick(editButtonElement,savebutton);
        });

        let deleteButtonElement = document.createElement("button");
        deleteButtonElement.id = "deletebtn";
        deleteButtonElement.textContent = "Delete";
        deleteButtonElement.addEventListener("click", function () {
            deleteclick(deleteButtonElement);
        });

        let savebutton = document.createElement("button");
        savebutton.id = "deletebtn";
        savebutton.textContent = "save";
        savebutton.style.display="none";
        savebutton.addEventListener("click", function () {
            alert("Task edited successfully");
            saveclick(editButtonElement,savebutton);

        });

        element.appendChild(taskInputElement);
        element.appendChild(editButtonElement);
        element.appendChild(deleteButtonElement);
        element.appendChild(savebutton);

        taskcontent.appendChild(element);
        taskInput.value = "";
    }
}


function deleteclick(deleteButton) {
    deleteButton.parentElement.remove();
}

function editclick(editButton,savebutton) {
    let taskElement = editButton.parentElement.querySelector("#taskelement");
    taskElement.readOnly = false;
    taskElement.focus();
    editButton.style.display = "none";
    savebutton.style.display = "flex";
}

function saveclick(editbtn,savebutton){
    editbtn.style.display="flex";
    savebutton.style.display="none";
}

