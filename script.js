document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskName = document.getElementById('taskName').value;
    const taskDeadline = document.getElementById('taskDeadline').value;
    const taskPriority = document.getElementById('taskPriority').value;

    if (taskName === '' || taskDeadline === '') {
        alert('Please fill out all fields');
        return;
    }

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${taskName}</span>
        <span>Deadline: ${taskDeadline}</span>
        <span>Priority: ${taskPriority}</span>
        <button class="delete-btn">Delete</button>
    `;

    taskList.appendChild(taskItem);

    taskItem.querySelector('.delete-btn').addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    document.getElementById('taskName').value = '';
    document.getElementById('taskDeadline').value = '';
    document.getElementById('taskPriority').value = 'low';
}
