function Filter () {

    this.activeFilter = 'All';

    this.initFilterListener = function (callback) {
        var filterFromStorage = storage.getStorage().activeFilter;
        if(filterFromStorage) this.activeFilter = filterFromStorage;
        var filterBlock = document.querySelector('.filter-block');
        this.createFilterButtons();
        filterBlock.addEventListener('click',function(e) {
            if(e.target.tagName === 'BUTTON') callback();
        });
    }
}

Filter.prototype = {

    clearFilterBlock: function (container) {
        while (container.lastChild) {
            container.removeChild(container.lastChild);
        }
    },

    createFilterButtons: function() {
        var that = this;
        var btnValue = ['All', 'Active', 'Complete'];
        var buttonsContainer = document.querySelector('.filter-block');
        this.clearFilterBlock(buttonsContainer);
        var fragment = document.createDocumentFragment();

        btnValue.forEach(function(item) {
            var button = document.createElement('button');
            button.className = item === that.activeFilter ? 'filter'+' active-btn' : 'filter';
            button.innerText = item;
            button.addEventListener('click', function() {
                that.activeFilter = item;
            });
            fragment.appendChild(button);
        });
        buttonsContainer.appendChild(fragment);
    },

    returnFilteredTasks: function (arr, bool) {
        if(!bool && bool !== false) {
            return [arr, this.activeFilter];
        }
        var filterArr = [];
        arr.forEach(function (item) {
           if(item.isComplete === bool) {
               filterArr.push(item);
           }
        });
        return [filterArr, this.activeFilter];
    },

    setFilteredArray: function (arr) {
        this.createFilterButtons();
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
