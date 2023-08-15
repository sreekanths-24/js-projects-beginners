const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// Add an event listener to the input element for the "keydown" event
inputBox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    if (inputBox.value === '') {//if the input box is empty
        alert('Please enter a task');//alert the user to enter a task
    } else {
        let li = document.createElement('li');//create a new list item
        li.innerHTML = inputBox.value;//set the innerHTML of the list item to the value of the input box
        listContainer.appendChild(li);//append the list item to the list container

        let span = document.createElement('span');//create a new span
        span.innerHTML = '\u00d7';//set the innerHTML of the span to 'x'
        li.appendChild(span);//append the span to the list item
    }
    inputBox.value = '';//set the value of the input box to an empty string
    saveData();//save the data to local storage
}

listContainer.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {//if the target element is a list item
        event.target.classList.toggle('checked');//toggle the checked class of the list item
        saveData();//save the data to local storage
    }
    else if (event.target.tagName === 'SPAN') {//if the target element is a span
        event.target.parentElement.remove();//remove the parent element of the span
        saveData();//save the data to local storage
    }
}, false);//use event delegation to listen for clicks on the list container

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);//save the innerHTML of the list container to local storage   
}

function showTasks() {
    listContainer.innerHTML = localStorage.getItem('data');//set the innerHTML of the list container to the data in local storage
}

showTasks();//show the tasks when the page loads