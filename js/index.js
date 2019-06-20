function App () {
    this.list = [];
}

App.prototype = {
    getValue: function() {
        const value = document.querySelector('.todo-task').value;
        this.addNewTask( new Task(value));
    },

    createNewTask: function (task) {
        var newItem = document.createElement('li');
        newItem.innerText = task.value;
        newItem.style.color = !task.isComplete ? 'green' : 'red';
        return newItem;
    },

    addNewTask: function(task) {
        this.list.push(task);
        this.render()
    },

    render: function() {
        var fragment = document.createDocumentFragment();
        this.list.forEach(function(task) {
            fragment.appendChild(this.createNewTask(task));
        }.bind(this))

        const tasksList = document.querySelector('.todo-list');
        tasksList.appendChild(fragment)
    }

};

var app = new App();

var buttonAdd = document.querySelector('.add-task');
buttonAdd.addEventListener('click', function () {
    app.getValue();
    console.log(app.list);
});


