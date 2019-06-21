function TaskCreator() {
    // this.removeTask = removeTask;
}

TaskCreator.prototype= {

    returnObjTask: function() {
        var inputTodo = document.querySelector('.todo-input');
        var valueFromInput = inputTodo.value;
        valueFromInput.replace(/\s/gu, '');
        if(!valueFromInput){
            return
        }
        inputTodo.value = '';
        return new Task(valueFromInput);
    },

    createCheckTask: function() {
        var checkbox = document.createElement('input');
        checkbox.classList.add('check-single-task');
        checkbox.type = 'checkbox';
        return checkbox;
    },

    createButtonDelete: function (id, callback) {
        var button = document.createElement('input');
        button.addEventListener('click', function() {
            callback(id);
        });
        button.classList.add('delete-single-task');
        button.type = 'button';
        button.value = 'X';
        return button;
    },

    createNewLi: function (task) {
        var newItem = document.createElement('li');
        newItem.classList.add('single-task-value');
        newItem.innerText = task.value;
        return newItem;
    },

    createNewTask: function (task, removeTask) {
        var div = document.createElement('div');
        div.appendChild(this.createCheckTask());
        div.appendChild(this.createNewLi(task));
        div.appendChild(this.createButtonDelete(task.id, removeTask));
        div.classList.add('single-task');
        return div;
    }
};

var taskCreator = new TaskCreator();

