function App () {
    this.listArr = [];

    this.init = function() {
        this.addButton = document.querySelector('.add-task');
        this.addButton.addEventListener('click', this.addNewTaskInArr.bind(this));
        filter.initFilter(this.listArr, this.render.bind(this));
    };
}

App.prototype = {

    addNewTaskInArr: function() {
        this.taskInArr = taskCreator.returnObjTask();
        if(!this.taskInArr){
            return
        }
        this.listArr.push(this.taskInArr);
        filter.addFilteredTasks(this.listArr, this.render.bind(this));
        paging.createBtnPaging(this.listArr);
    },

    removeTask: function(id) {
        var that = this;
        this.listArr.forEach( function(item, i) {
          if(item.id === id){
              that.listArr.splice(i, 1);
          }
        });
        filter.addFilteredTasks(this.listArr, this.render.bind(this));
    },

    checkTask: function(id) {
        this.listArr.forEach(function (item) {
           if(item.id === id) {
               item.isComplete = !item.isComplete;
           }
        });
        filter.addFilteredTasks(this.listArr, this.render.bind(this));
    },

    clearDomList: function() {
        var tasksList = document.querySelector('.todo-list');
        while (tasksList.firstChild) {
            tasksList.removeChild(tasksList.firstChild);
        }
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
