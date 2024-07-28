const inputTask = document.getElementById("inputTask");

const addTaskBtn = document.getElementById("addTaskBtn");

const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

// adding function to be able to add tasks using the input field provided

function addTask() {
    // getting the input value the user entered
    const taskText = inputTask.value;

    if (taskText.trim() === ""){
        return;
    }

    //create a new li element to hold the task that has just been added
    const newTask = document.createElement("li");

    newTask.textContent = taskText;

    taskText.id = "taskText"

    // adding the ability to be able to remove tasks
    //creating a remove task button
    const removeBtn = document.createElement("button");
    removeBtn.id = "removeBtn"
    removeBtn.textContent = "Remove";

    //adding an event listener to the remove button

    removeBtn.addEventListener("click", () => {
        taskList.removeChild(newTask);
    });

    //append the remove task button to the new task
    newTask.appendChild(removeBtn);

    //append the new task to the task list
    taskList.appendChild(newTask);

    // clear the input field to allow for another task to be entered
    inputTask.value = "";

}

