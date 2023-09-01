const addButton = document.getElementById('addButton');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    addButton.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
        taskInput.value = '';
      }
    });

//taskText: This line gets the value of the input field (taskInput) and trims any leading and trailing whitespace using trim(). This is to ensure that we don't add tasks with only whitespace characters.
// if (taskText !== ''): This condition checks if the trimmed taskText is not empty. If it's not empty, we proceed to add the task.
// const taskItem = document.createElement('li');: We create a new list item (<li>) element using document.createElement(). This will be used to represent the new task.
// taskItem.textContent = taskText;: We set the text content of the newly created list item to the taskText, which is the value entered in the input field.
// taskList.appendChild(taskItem);: We append the newly created list item (taskItem) as a child of the taskList unordered list. This effectively adds the new task to the list.
// taskInput.value = '';: Finally, we clear the input field by setting its value to an empty string, so that it's ready for the user to enter the next task.