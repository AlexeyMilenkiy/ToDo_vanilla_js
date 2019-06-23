function Filter () {
    this.filterArr = [];

    this.init = function (arr, callback) {
        var that = this;
        this.buttonCollect = document.querySelector('.filter-block').children;
        this.buttonArr = Array.prototype.slice.call(this.buttonCollect);
        this.buttonArr.forEach(function(item) {
            switch (item.className) {
                case 'all-tasks': {
                    item.classList.add('active-button');
                    item.addEventListener('click', that.showAllTasks.bind(that, item, arr, callback));
                }break;
                case 'active-tasks': {
                    item.addEventListener('click', that.renderFilterTasks.bind(that, false, item, arr, callback));
                }break;
                case 'complete-tasks': {
                    item.addEventListener('click', that.renderFilterTasks.bind(that, true, item, arr, callback));
                }break;
            }
        });
    }
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

    addFilteredTasks: function (arr, callback) {
      this.activeBtn = this.findButton();
      switch(this.activeBtn[0].innerText){
          case 'All' : {
            this.showAllTasks(this.activeBtn[0], arr, callback);
          }break;
          case 'Active': {
            this.renderFilterTasks(false, this.activeBtn[0], arr, callback);
          }break;
          case 'Complete': {
            this.renderFilterTasks(true, this.activeBtn[0], arr, callback);
          }break;
      }
    },

    showAllTasks: function (btn, arr, callback) {
        this.changeClass(btn);
        callback(arr);
    },

    renderFilterTasks: function (bul, btn, arr, callback) {
        this.filterArr = arr.filter(function (item) {
            return item.isComplete === bul
        });
        this.changeClass(btn);
        callback(this.filterArr);
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
