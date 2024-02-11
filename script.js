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
            // alert("Task edited successfully");
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
// var editbuttons=document.querySelectorAll("#editbtn");

function editclick(editButton,savebutton) {
    let currentbutton=editButton.parentElement.querySelector("#editbtn");
    // let savecurrentbutton=editButton.parentElement.querySelector('#deletebtn');

    let taskElement = editButton.parentElement.querySelector("#taskelement");
    let editbuttons=document.querySelectorAll("#editbtn");

    editbuttons.forEach(element => {
        if(element!==currentbutton){
            // element.disabled="true";
            element.style.display="none";
        }
        else {
            currentbutton.focus();
        }
    });

    taskElement.readOnly = false;
    taskElement.focus();
    editButton.style.display = "none";
    savebutton.style.display = "flex";
} 


function saveclick(editbtn,savebutton,){

    let editbtnshow=document.querySelectorAll("#editbtn");
    editbtnshow.forEach(element =>{
        // element.removeAttribute("disabled");
        element.style.display="flex";
    })
    editbtn.style.display="flex";
    savebutton.style.display="none";
}
