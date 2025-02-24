//initialize an array to store tasks
let tasks = []

//add an event listener to add tasts to the add tasks btn
document.getElementById('addTaskBtn').addEventListener('click',function() {
//storing text value from input box as a variable 'taskInput'
    let taskInput = document.getElementById('taskInput').value
//asking a question to the taskInput
    if (taskInput){
        //pushes out the variable of taskInput
    tasks.push(taskInput)
    //every time you type something and then click the button, it gets rid of whatever you typed
    document.getElementById('taskInput').value = ''

    displayTasks()
    }


})