function App () {
    this.list = [];
}

App.prototype = {
    getValue: function() {
        const value = document.querySelector('.todo-task').value;
        return  task.value = value;
    },

    createNewTask: function () {
        const tasksList = document.querySelector('.todo-list');
        const newItem = document.createElement('li');
        newItem.innerText= this.getValue();
        tasksList.appendChild(newItem);
        this.list.push(task);
    }

};

const app = new App();

const buttonAdd = document.querySelector('.add-task');
buttonAdd.addEventListener('click', () => {
    app.createNewTask();
    console.log(app.list);
});


