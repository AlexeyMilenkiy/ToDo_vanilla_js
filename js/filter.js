function Filter () {
    this.filterArr = [];
}

Filter.prototype = {

    findButton: function () {
        this.buttonCollect = document.querySelector('.filter-block').children;
        this.buttonArr = Array.prototype.slice.call(this.buttonCollect);
        this.pushButton = this.buttonArr.filter(function(item) {
            if(item.matches('.active-button'))
            return item
        });
        return this.pushButton;
    },

    addFilteredTasks: function () {
      this.activeBtn = this.findButton();
      switch(this.activeBtn[0].innerText){
          case 'All' : {
            this.showAllTasks(this.activeBtn[0]);
          }break;
          case 'Active': {
            this.renderFilterTasks(false, this.activeBtn[0]);
          }break;
          case 'Complete': {
            this.renderFilterTasks(true, this.activeBtn[0]);
          }break;
      }
    },

    buttonsAddEvents: function () {

        this.allTasksButton = document.querySelector('.all-tasks');
        this.allTasksButton.addEventListener('click',this.showAllTasks.bind(this, this.allTasksButton));
        this.allTasksButton.classList.add('active-button');

        this.activeButton = document.querySelector('.active-tasks');
        this.activeButton.addEventListener('click', this.renderFilterTasks.bind(this, false, this.activeButton));

        this.completedButton = document.querySelector('.complete-tasks');
        this.completedButton.addEventListener('click', this.renderFilterTasks.bind(this, true, this.completedButton));
    },

    showAllTasks: function (btn) {
        var pressedButton = btn;
        this.changeClass(pressedButton);
        app.render(app.listArr);
    },

    renderFilterTasks: function(bul, btn) {
        var pressedButton = btn;
        this.filterArr = app.listArr.filter(function (item) {
            return item.isComplete === bul
        });
        this.changeClass(pressedButton);
        app.render(this.filterArr);
    },

    changeClass: function (btn) {
        this.buttonCollect = document.querySelector('.filter-block').children;
        this.buttonArr = Array.prototype.slice.call(this.buttonCollect);
        this.buttonArr.forEach(function(item) {
            item.classList.remove('active-button');
        });
        btn.classList.add('active-button');
    }
};

var filter = new Filter();
