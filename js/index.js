function App () {
    this.list = [];
}

App.prototype = {
    getValue: function() {
        this.value = document.querySelector('.todo-task').value;
        return  task.value = this.value;
    },

    createNewTask : function () {
        this.tasksList = document.querySelector('.todo-list');
        this.newItem = document.createElement('li');
        this.newItem.innerText= this.getValue();
        this.tasksList.appendChild(this.newItem);
        this.list.push(task);
    }
};

const app = new App();

const buttonAdd = document.querySelector('.add-task');
buttonAdd.addEventListener('click', app.onSaveChange)


