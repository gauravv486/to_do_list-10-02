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
            editclick(editButtonElement);
        });

        let deleteButtonElement = document.createElement("button");
        deleteButtonElement.id = "deletebtn";
        deleteButtonElement.textContent = "Delete";
        deleteButtonElement.addEventListener("click", function () {
            deleteclick(deleteButtonElement);
        });

        element.appendChild(taskInputElement);
        element.appendChild(editButtonElement);
        element.appendChild(deleteButtonElement);

        taskcontent.appendChild(element);
        taskInput.value = "";
    }
}

function deleteclick(deleteButton) {
    deleteButton.parentElement.remove();
}

function editclick(editButton) {
    let taskElement = editButton.parentElement.querySelector("#taskelement");
    taskElement.readOnly = false;
    taskElement.focus();
}
