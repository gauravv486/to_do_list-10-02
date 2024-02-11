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
            editclick(editButtonElement,savebutton,deleteButtonElement);
        });

        let deleteButtonElement = document.createElement("button");
        deleteButtonElement.id = "deletebtn";
        deleteButtonElement.textContent = "Delete";
        deleteButtonElement.addEventListener("click", function () {
            deleteclick(deleteButtonElement);
        });

        let savebutton = document.createElement("button");
        savebutton.id = "savebtn";
        savebutton.textContent = "save";
        savebutton.style.display="none";
        savebutton.addEventListener("click", function () {
            saveclick(editButtonElement,savebutton,deleteButtonElement);

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


function editclick(editButton,savebutton,deleteButton) {

    let currentbutton=editButton.parentElement.querySelector("#editbtn");
    let taskElement = editButton.parentElement.querySelector("#taskelement");
    let editbuttons=document.querySelectorAll("#editbtn");
    let deletebuttons=document.querySelectorAll("#deletebtn");
    let inputbutton=document.querySelectorAll("#taskelement");
    let maintask=document.querySelector("#taskInput");

    editbuttons.forEach(element => {
        if(element!==currentbutton){
            element.style.display="none";
        }
        else {
            currentbutton.focus();
        }
    });

    deletebuttons.forEach(element => {
        if(element!==currentbutton){
            element.style.display="none";
        }
        else {
            currentbutton.focus();
        }
    });

    inputbutton.forEach(element =>{
        if(element!=taskElement)
        {
            element.readOnly=true;
            element.style.height="55px";
        }
        else{
            taskElement.readOnly = false;
        }
    })

    taskElement.focus();
    editButton.style.display = "none";
    deleteButton.style.display="none";
    savebutton.style.display = "flex";
    maintask.disabled=true;

} 

function saveclick(editbtn,savebutton,deleteButton){

    let maintask=document.querySelector("#taskInput");
    let editbtnshow=document.querySelectorAll("#editbtn");
    let deletetnshow=document.querySelectorAll("#deletebtn");
    let inputbutton=document.querySelectorAll("#taskelement");

    inputbutton.forEach(element =>{
        element.removeAttribute("height");
    })

    editbtnshow.forEach(element =>{
        element.style.display="flex";
    })
    deletetnshow.forEach(element =>{
        element.style.display="flex";
    })
    editbtn.style.display="flex";
    savebutton.style.display="none";
    deleteButton.style.display="flex";
    maintask.disabled=false;
}
