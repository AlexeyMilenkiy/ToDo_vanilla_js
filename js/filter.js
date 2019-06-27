function Filter () {

    this.initFilterListener = function (callback) {
        var that = this;
        var buttonArr = this.createArrFromFilterBtns();
        buttonArr.forEach(function(item) {
            switch (item.className) {
                case 'all-tasks': {
                    item.classList.add('active-button');
                    item.addEventListener('click', function(){
                        that.changeClass(item);
                        callback();
                    });
                }break;
                case 'active-tasks': {
                    item.addEventListener('click', function(){
                        that.changeClass(item);
                        callback();
                    });
                }break;
                case 'complete-tasks': {
                    item.addEventListener('click', function(){
                        that.changeClass(item);
                        callback();
                    });
                }break;
            }
        });
    }
}

Filter.prototype = {

    createArrFromFilterBtns: function() {
        var buttonCollect = document.querySelector('.filter-block').children;
        return Array.prototype.slice.call(buttonCollect);
    },

    findActiveFilter: function () {
        var buttonArr = this.createArrFromFilterBtns();
        var pushButton = null;
        buttonArr.forEach(function(item) {
            if(item.matches('.active-button'))
            pushButton = item;
        });
        return pushButton;
    },

    setFilteredArray: function (arr) {
      var activeBtn = this.findActiveFilter();
      switch(activeBtn.innerText){
          case 'All' : {
           return this.returnAllTasks(activeBtn, arr);
          }
          case 'Active': {
            return this.returnFilteredTasks(false, activeBtn, arr);
          }
          case 'Complete': {
            return this.returnFilteredTasks(true, activeBtn, arr);
          }
      }
    },

    returnAllTasks: function (btn, arr) {
        this.changeClass(btn);
        return arr
    },

    returnFilteredTasks: function (bool, btn, arr) {
        var filterArr = [];
        arr.forEach(function (item) {
           if(item.isComplete === bool){
               filterArr.push(item);
           }
        });
        this.changeClass(btn);
        return filterArr
    },

    changeClass: function (btn) {
        var buttonArr = this.createArrFromFilterBtns();
        buttonArr.forEach(function(item) {
            item.classList.remove('active-button');
        });
        btn.classList.add('active-button');
    }
};

var filter = new Filter();
