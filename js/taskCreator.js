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

    createCheckTask: function(id, callback) {
        var button = document.createElement('input');
        button.addEventListener('click', function() {
            callback(id);
        });
        button.classList.add('check-single-task');
        button.type = 'button';
        button.value = 'Complete';
        return button;
    },

    createButtonDelete: function (id, callback) {
        var button = document.createElement('input');
        button.addEventListener('click', function() {
            callback(id);
        });
        button.classList.add('delete-single-task');
        button.type = 'button';
        button.value = 'Delete';
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
        div.appendChild(this.createCheckTask(task.id, checkTask));
        div.appendChild(this.createNewLi(task));
        div.appendChild(this.createButtonDelete(task.id, removeTask));
        div.classList.add('single-task');
        return div;
    }
};

var taskCreator = new TaskCreator();

