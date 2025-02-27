//initialize an array to store tasks
let tasks = []

//add an event listener to add tasts to the add tasks btn
document.getElementById('addTaskBtn').addEventListener('click', function () {
    //storing text value from input box as a variable 'taskInput'
    let taskInput = document.getElementById('taskInput').value
    //asking a question to the taskInput
    if (taskInput) {
        //pushes out the variable of taskInput
        tasks.push(taskInput)
        //every time you type something and then click the button, it gets rid of whatever you typed
        document.getElementById('taskInput').value = ''
        //call the function to update the task list display
        displayTasks()
    }


})

//function to display the tasks from tasks[] to the UL
function displayTasks() {
    //select the unordered list on the HTML
    let taskList = document.getElementById('taskList')


    //clear the existing task list before updating it
    taskList.innerHTML = ''

    //loop through each tsk in the array and create a list item
    tasks.forEach((task, index) => {
        //Create anew <li> element for each task
        let li = document.createElement('li')

        // add bootstrap classes for styling
        li.classList.add(
            'list-group-item',
            'd-flex',
            'justify-content-between',
            'align-items-center'
        )

        //set the inner HTML of the <li> element with task text and a remove button
li.innerHTML = `${task} <button class='btn btn-dark btn-sm' onclick= 'removeTask(${index})'> √ </button>` 

//append the new task to the task list
taskList.appendChild(li)
    })
}

//function to remove a task from the list when the "√" button is clicked
function removeTask (index){
    //remove the task at the given index from the array
    tasks.splice(index, 1)

    // call the function to update the task list display
    displayTasks()
}

//Event listener for the "Clear All Tasks" button
document.getElementById('clearTaskBtn').addEventListener('click', function (){

    tasks=[]

    //call function to update the task list display
    displayTasks()
})