function App () {
    this.listArr = [];
}

App.prototype = {
    
    addNewTaskInArr: function() {
        var taskInArr = taskCreator.getValue();
        this.listArr.push(taskInArr);
    },

    clearDomList: function() {
        var tasksList = document.querySelector('.todo-list');
        tasksList.innerHTML = '';
    },

    render: function() {    
        this.clearDomList();
        this.addNewTaskInArr();

        var fragment = document.createDocumentFragment();
        this.listArr.forEach(function(task) {
            fragment.appendChild(taskCreator.createNewTask(task));
        }.bind(this));

        var tasksList = document.querySelector('.todo-list');
        tasksList.appendChild(fragment)
    }

};

var app = new App();

var buttonAdd = document.querySelector('.add-task');
buttonAdd.addEventListener('click', function () {
    app.render()
});