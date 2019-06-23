function App () {
    this.listArr = [];

    this.init = function() {
        this.addButton = document.querySelector('.add-task');
        this.addButton.addEventListener('click', this.addNewTaskInArr.bind(this));
        var filter = new Filter();
        filter.buttonsAddEvents();

        // filter.init(this.listArr, this.render.bind(this));
    };
}

App.prototype = {

    addNewTaskInArr: function() {
        var taskInArr = taskCreator.returnObjTask();
        if(!taskInArr){
            return
        }
        this.listArr.push(taskInArr);
        filter.addFilteredTasks();
    },

    clearDomList: function() {
        var tasksList = document.querySelector('.todo-list');
        while (tasksList.firstChild) {
            tasksList.removeChild(tasksList.firstChild);
        }
    },

    removeTask: function(id) {
        this.listArr = this.listArr.filter( function(item) {
          return item.id !== id
        });
        this.render(this.listArr);
    },

    checkTask: function(id) {
        this.listArr.forEach(function (item) {
           if(item.id === id) {
               item.isComplete = !item.isComplete;
           }
        });
        this.render(this.listArr);
    },

    render: function(arr) {
        this.clearDomList();

        var fragment = document.createDocumentFragment();
        arr.forEach(function(item) {
            fragment.appendChild(taskCreator.createNewTask(item, this.removeTask.bind(this),
                                                            this.checkTask.bind(this)));
        }.bind(this));

        var tasksList = document.querySelector('.todo-list');
        tasksList.appendChild(fragment);
    }
};

var app = new App();

app.init();
