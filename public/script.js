class Task{
    constructor(description){
        this.description = description;
        this.completed = false;
    }

    toggleComplete(){
        this.completed = !this.completed;
    }
}

class TaskManager{
    constructor(){
        this.taskList = document.getElementById('task-list');
        this.loadTask();
    }

    async loadTasks(){
        const response = await fetch('/tasks');
        const tasks = await response.json();
        this.render(tasks);
    }

    async addTask(description){
        await fetch('/tasks', {
            method: 'POST',
            headers: { 'Content-type': 'application/json'},
            body: JSON.stringify({description})
        });
        this.loadTasks();
    }

    async removeTasks(id){
        await fetch(`/tasks/${id}`, {method: 'DELETE'});
        this.loadTasks();
    }

    async toggleTask(id){
        await fetch (`/tasks/${id}/toggle`, {method:'PATCH'});
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const TaskManager = new TaskManager();
    const addTaskBtn = document.getElementById('add-task-btn')
    const taskInput = document.getElementById('task-input')

    addTaskBtn.addEventListener('click', () => {
        const taskDescription =  taskInput.value.trim();
        
    })
})