function Filter () {
    this.filterArr = [];
}

Filter.prototype = {

    buttonsAddEvents : function () {

        this.allTasksButton = document.querySelector('.all-tasks');
        this.allTasksButton.addEventListener('click',this.showAllTasks.bind(this));
        this.allTasksButton.classList.add('active-button');

        this.activeButton = document.querySelector('.active-tasks');
        this.activeButton.addEventListener('click', this.showCompleteOrActiveTasks.bind(this, false));

        this.completedButton = document.querySelector('.complete-tasks');
        this.completedButton.addEventListener('click', this.showCompleteOrActiveTasks.bind(this, true));
    },

    showAllTasks: function () {
        var pushButton = arguments[0].target;
        this.changeClass(pushButton);
        app.render(app.listArr);
    },

    showCompleteOrActiveTasks: function(bul) {
        var pushButton = arguments[1].target;
          this.filterArr = app.listArr.filter(function (item) {
            return item.isComplete === bul
        });
          this.changeClass(pushButton);
          app.render(this.filterArr);
    },

    changeClass: function (bt) {
          this.allTasksButton.classList.remove('active-button');
          this.activeButton.classList.remove('active-button');
          this.completedButton.classList.remove('active-button');
          bt.classList.add('active-button');
    }
};

var filter = new Filter();
filter.buttonsAddEvents();
