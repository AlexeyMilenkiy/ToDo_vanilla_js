function TaskCreator() {}

TaskCreator.prototype= {

    getValue: function() {
        var inputTodo = document.querySelector('.todo-input');
        var valueFromInput = inputTodo.value;
        inputTodo.value = ''; 
        return new Task(valueFromInput);
    },

    createCheckTask: function() {
        var checkbox = document.createElement('input');
        checkbox.classList.add('check-single-task');
        checkbox.type = 'checkbox';
        return checkbox;
    },

    createButton: function (clickHandler) {
        var button = document.createElement('input');
        button.classList.add('delete-single-task');
        button.type = 'button';
        button.value = 'X';
        button.addEventListener('click', clickHandler);
        return button;
    },

    createNewLi: function (task) {
        var newItem = document.createElement('li');
        newItem.classList.add('single-task-value');
        newItem.innerText = task.value;
        newItem.style.color = !task.isComplete ? 'green' : 'red';
        return newItem;
    },
    
    createNewTask: function (task) {
        var div = document.createElement('div');
        div.appendChild(this.createCheckTask());
        div.appendChild(this.createNewLi(task)); 
        div.appendChild(this.createButton());
        div.classList.add('single-task');
        return div;
    }
}

var taskCreator = new TaskCreator();

