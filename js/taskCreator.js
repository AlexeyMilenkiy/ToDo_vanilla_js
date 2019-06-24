function TaskCreator() {}

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

    createButtonsForTask: function (id, callback, text) {
        var button = document.createElement('button');
        button.addEventListener('click', function() {
            callback(id);
        });
        button.classList.add('buttons-single-task');
        button.innerText = text;
        return button;
    },

    createNewLi: function (task) {
        var newItem = document.createElement('li');
        newItem.classList.add('single-task-value');
        newItem.innerText = task.value;
        var className = task.isComplete ? 'complete' : 'active';
        newItem.classList.add(className);
        return newItem;
    },

    createNewTask: function (task, removeTask, checkTask) {
        var div = document.createElement('div');
        div.appendChild(this.createButtonsForTask(task.id, checkTask, 'Complete'));
        div.appendChild(this.createNewLi(task));
        div.appendChild(this.createButtonsForTask(task.id, removeTask, 'Delete'));
        div.classList.add('single-task');
        return div;
    }
};

var taskCreator = new TaskCreator();

