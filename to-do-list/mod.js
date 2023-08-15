const listTitleInput = document.getElementById('list-title-box');
const listOfLists = document.getElementById('list-of-lists');

function createList() {
    const title = listTitleInput.value.trim();//get the value of the input and trim whitespace
    
    if (title === '') {
        alert('Please enter a list title');//if the title is empty, alert the user
    } else {
        const newList = document.createElement('div');//    Create a new list
        newList.className = 'all-lists row';//    Add the "all-lists" class to the list
        
        const h2 = document.createElement('h2');//    Create a new h2 element
        h2.textContent = title;//    Set the text of the h2 to the title
        
        const taskInput = document.createElement('input');//    Create a new input element
        taskInput.placeholder = 'Enter a task';//    Set the placeholder of the input to "Enter a task"
        taskInput.type = 'text';//    Set the type of the input to "text"
        taskInput.className = 'new-tasks';//    Add the "new-tasks" class to the input
        
        const addButton = document.createElement('button');//    Create a new button element
        addButton.textContent = 'Add Task';//    Set the text of the button to "Add Task"
        addButton.className = 'add-new-item';//    Add the "add-new-item" class to the button
        addButton.addEventListener('click', function() {//    Add a click event listener to the button
            addTask(newList, taskInput.value);//        Call the addTask function with the list and the value of the input
            taskInput.value = '';//        Set the value of the input to an empty string
        });
        
        const deleteListButton = document.createElement('button'); // Create a "Delete List" button
        deleteListButton.textContent = 'Delete List';// Set the text of the button to "Delete List"
        deleteListButton.className = 'remove-new-item';// Add the "remove-new-item" class to the button
        deleteListButton.addEventListener('click', function() {// Add a click event listener to the button
            newList.remove();// Remove the list
            saveData();// Save the data to local storage
        });
        
        newList.appendChild(h2);// Append the h2 to the list
        newList.appendChild(taskInput);// Append the input to the list
        newList.appendChild(addButton);// Append the button to the list
        newList.appendChild(deleteListButton); // Append the "Delete List" button
        
        listOfLists.appendChild(newList);// Append the list to the "list-of-lists" div
        listOfLists.classList.add('show');// Add the "show" class to the "list-of-lists" div
    }
}

function addTask(listElement, taskText) {   // Create a new list item
    if (taskText === '') {//if the task text is empty, alert the user
        alert('Please enter a task');//if the task text is empty, alert the user
    } else {
        const li = document.createElement('li');//create a new list item
        li.textContent = taskText;//set the text of the list item to the task text
        li.classList.add('new-list-item');//add the "new-list-item" class to the list item

        const span = document.createElement('span');//create a new span
        span.textContent = '\u00d7';//set the text of the span to the unicode multiplication symbol
        span.classList.add('new-list-item-span');//add the "new-list-item-span" class to the span
        span.addEventListener('click', function() {//add a click event listener to the span
            li.remove();//remove the list item
            saveData();//save the data to local storage
        });

        li.appendChild(span);//append the span to the list item
        listElement.appendChild(li);//append the list item to the list
        saveData();//save the data to local storage
        taskText.value = '';//set the value of the input to an empty string
    }
}

// Rest of your code here...
listOfLists.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {//if the target element is a list item
        event.target.classList.toggle('checked');//toggle the checked class of the list item
        saveData();//save the data to local storage
    }
    else if (event.target.tagName === 'SPAN') {//if the target element is a span
        event.target.parentElement.remove();//remove the parent element of the span
        saveData();//save the data to local storage
    }
}, false);//use event delegation to listen for clicks on the list container
