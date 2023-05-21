const taskInput = document.getElementById('taskInput');//input
const addButton = document.getElementById('addButton');//btn
const taskList = document.getElementById('taskList');//ul

let tasks = [];

// Function to render tasks
function renderTasks() {
    // Clear the task list
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'taskItem';
        listItem.innerHTML = task + ' <button onClick="deleteTask(' + index + ')">Delete</button>';
        taskList.appendChild(listItem);
    });
}

function addTask(){
    const taskText = taskInput.value;
    if(taskText !== ''){
        tasks.push(taskText);
        taskInput.value = '';
        renderTasks();
    }
}

function deleteTask(index){
    tasks.splice(index, 1);
    renderTasks();
}

//call render
renderTasks();
