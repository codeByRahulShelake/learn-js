document.querySelector('.add-btn').addEventListener('click', () => {
    let inputField = document.querySelector('.task-input');
    const task = inputField.value;
    if (task !== '') {
        let todoList = document.querySelector('.todo-list');

        // Create the list item
        let newLi = document.createElement('li');

        // Create the status box
        let newStatus = document.createElement('div');
        newStatus.className = 'status-box';
        newStatus.innerText = 'Pending';

        // Create the delete button
        let newTaskEle = document.createElement('button');
        newTaskEle.className = 'delete-btn';
        newTaskEle.innerText = 'Delete';

        // Add task text
        let newTaskText = document.createElement('span');
        newTaskText.className = 'task-text';
        newTaskText.innerText = task;

        // Append all elements to the list item
        newLi.appendChild(newTaskText);
        newLi.appendChild(newStatus);  
        newLi.appendChild(newTaskEle);

        // Append the list item to the todo list
        todoList.appendChild(newLi);

        // Store the task in localStorage
        storeTasksInLocalStorage();

        // Clear the input field
        inputField.value = '';
    }
});

// Store tasks in localStorage
function storeTasksInLocalStorage() {
    let todoList = document.querySelector('.todo-list');
    let tasks = [];

    // Loop through each task in the list and push its details into the tasks array
    todoList.querySelectorAll('li').forEach(taskItem => {
        let taskText = taskItem.querySelector('.task-text').innerText;
        let taskStatus = taskItem.querySelector('.status-box').innerText;

        tasks.push({
            taskText: taskText,
            taskStatus: taskStatus
        });
    });

    // Save the tasks array to localStorage as a JSON string
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks from localStorage when the page loads
window.addEventListener('load', () => {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(task => {
        let todoList = document.querySelector('.todo-list');

        // Create the list item
        let newLi = document.createElement('li');

        // Create the status box
        let newStatus = document.createElement('div');
        newStatus.className = 'status-box';
        newStatus.innerText = task.taskStatus;

        // Create the delete button
        let newTaskEle = document.createElement('button');
        newTaskEle.className = 'delete-btn';
        newTaskEle.innerText = 'Delete';

        // Add task text
        let newTaskText = document.createElement('span');
        newTaskText.className = 'task-text';
        newTaskText.innerText = task.taskText;

        // Append all elements to the list item
        newLi.appendChild(newTaskText);
        newLi.appendChild(newStatus);  // Status button in between task and delete button
        newLi.appendChild(newTaskEle);

        // Append the list item to the todo list
        todoList.appendChild(newLi);
    });
});

// Delete and change the status when clicked
document.querySelector('.todo-list').addEventListener('click', (e) => {
    console.log(e.target.tagName);
    if (e.target.tagName === 'BUTTON') {
        let taskItem = e.target.parentNode;
        taskItem.remove();

        // Update localStorage after deletion
        storeTasksInLocalStorage();
    }
    if(e.target.tagName === 'DIV')
    {
        let status = e.target
        status.innerText = 'Completed'

        // Update localStorage after status change
        storeTasksInLocalStorage();
    }
});