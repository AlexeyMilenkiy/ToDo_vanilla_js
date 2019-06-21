function App () {
    this.listArr = [];

    this.init = function() {
        this.button = document.querySelector('.add-task');
        this.button.addEventListener('click', this.addNewTaskInArr.bind(this));
    }
}

App.prototype = {

    addNewTaskInArr: function() {
        var taskInArr = taskCreator.returnObjTask();
        this.listArr.push(taskInArr);
        this.render();
    },

    clearDomList: function() {
        var tasksList = document.querySelector('.todo-list');
        tasksList.innerHTML = '';
    },

    removeTask: function(id) {
        this.listArr = this.listArr.filter( function(item) {
          return item.id !== id
        });
        this.render()
    },

    render: function() {
        this.clearDomList();

        var fragment = document.createDocumentFragment();
        this.listArr.forEach(function(item) {
            fragment.appendChild(taskCreator.createNewTask(item, this.removeTask.bind(this)));
        }.bind(this));

        var tasksList = document.querySelector('.todo-list');
        tasksList.appendChild(fragment)
    }
};

var app = new App();

app.init();
