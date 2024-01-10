function addTask() {
  const titleInput = document.getElementById('titleInput').value;
  const descriptionInput = document.getElementById('descriptionInput').value;
  const dueDateInput = document.getElementById('dueDateInput').value;
  const priorityInput = document.getElementById('priorityInput').value;
  const categoryInput = document.getElementById('categoryInput').value;
  const statusInput = document.getElementById('statusInput').value;

  const taskList = document.getElementById('taskList');
  const newTask = document.createElement('li');

  newTask.innerHTML = `
    <div class="checkbox-container">
      <input type="checkbox">
      <span>Title: ${titleInput}</span>
    </div>
    <span>Description: ${descriptionInput}</span>
    <span>Due Date: ${dueDateInput}</span>
    <span>Priority: ${priorityInput}</span>
    <span>Category: ${categoryInput}</span>
    <span>Status: ${statusInput}</span>
  `;

  taskList.appendChild(newTask);

  // Save task to local storage
  const task = {
    title: titleInput,
    description: descriptionInput,
    dueDate: dueDateInput,
    priority: priorityInput,
    category: categoryInput,
    status: statusInput,
  };

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
