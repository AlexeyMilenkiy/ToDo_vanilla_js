function App () {
    this.listArr = [];

    this.init = function() {
        var that = this;
        var addButton = document.querySelector('.add-task');
        addButton.addEventListener('click', this.addNewTaskInArr.bind(this));
        var tasksFromStorage = storage.getStorage().tasks;
        var inputTask = document.querySelector('.task-input');
        if(tasksFromStorage) this.listArr = tasksFromStorage;
        inputTask.onkeyup = function(e) {
            if (e.key !== 'Enter') return;
            that.addNewTaskInArr();
        };
        filter.initFilterListener(this.render.bind(this), this.listArr);
        paging.initPagingListener(this.render.bind(this), this.listArr);
        if(tasksFromStorage) this.render();
    };
}

App.prototype = {

    addNewTaskInArr: function() {
        var taskInArr = taskCreator.returnObjTask();
        if(!taskInArr){
            return
        }
        this.listArr.push(taskInArr);
        this.render();
    },

    removeTask: function(id) {
        var that = this;
        this.listArr.forEach( function(item, i) {
            if(item.id === id){
                that.listArr.splice(i, 1);
            }
        });
        this.render();
    },

    checkTask: function(id) {
        this.listArr.forEach(function (item) {
            if(item.id === id) {
                item.isComplete = !item.isComplete;
            }
        });
        this.render();
    },

    clearDomList: function() {
        var tasksList = document.querySelector('.todo-list');
        while (tasksList.lastChild) {
            tasksList.removeChild(tasksList.lastChild);
        }
    },

    render: function() {
        var filteredArr = filter.setFilteredArray(this.listArr);
        var finishArr = paging.setPagingArray(filteredArr[0]);
        storage.setStorage(this.listArr, filteredArr[1], finishArr[1]);
        this.clearDomList();
        var fragment = document.createDocumentFragment();
        finishArr[0].forEach(function(item) {
            fragment.appendChild(taskCreator.createNewTask(
                item, this.removeTask.bind(this), this.checkTask.bind(this)
            ));
        }.bind(this));

        var tasksList = document.querySelector('.todo-list');
        tasksList.appendChild(fragment);
    }
};

var app = new App();

app.init();
