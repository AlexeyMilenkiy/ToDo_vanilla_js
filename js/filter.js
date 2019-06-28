function Filter () {

    this.activeFilter = 'All';

    this.initFilterListener = function (callback) {
        var that = this;
        var filterFromStorage = storage.getStorage().activeFilter;
        if(filterFromStorage) that.activeFilter = filterFromStorage;
        this.changeClass();
        var buttonArr = this.createArrFromFilterBtns();
        buttonArr.forEach(function(item) {
            item.addEventListener('click', function () {
                that.activeFilter = item.textContent;
                callback();
            });
        });
    }
}

Filter.prototype = {

    createArrFromFilterBtns: function() {
        var buttonCollect = document.querySelector('.filter-block').children;
        return Array.prototype.slice.call(buttonCollect);
    },

    returnFilteredTasks: function (arr, bool) {
        if(!bool){
            return [arr,this.activeFilter];
        }
        var filterArr = [];
        arr.forEach(function (item) {
           if(item.isComplete === bool){
               filterArr.push(item);
           }
        });
        return [filterArr, this.activeFilter];
    },

    changeClass: function () {
        var that = this;
        var buttonArr = this.createArrFromFilterBtns();
        buttonArr.forEach(function(item) {
            item.classList.remove('active-button');
            if(item.textContent === that.activeFilter) item.classList.add('active-button');
        });
    },

    setFilteredArray: function (arr) {
        this.changeClass();
        switch(this.activeFilter){
            case 'All' : {
                return this.returnFilteredTasks(arr);
            }
            case 'Active': {
                return this.returnFilteredTasks(arr, false);
            }
            case 'Complete': {
                return this.returnFilteredTasks(arr, true);
            }
        }
    }
};

var filter = new Filter();
