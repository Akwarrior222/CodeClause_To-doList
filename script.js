const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const task = taskInput.value;
  if (task !== '') {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(task));
    taskList.appendChild(li);
    taskInput.value = '';
    li.addEventListener('click', completeTask);
  }
}

function completeTask() {
  this.classList.toggle('completed');
}
