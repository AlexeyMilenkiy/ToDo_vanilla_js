function Storage() {
    this.storage = window.localStorage;
}

Storage.prototype = {

    getStorage: function () {
        return {
            activePage: JSON.parse(this.storage.getItem('activePage')),
            tasks: JSON.parse(this.storage.getItem('tasks')),
            activeFilter: JSON.parse(this.storage.getItem('activeFilter'))
        }
    },

    setStorage: function (arr, filter, page) {
        this.saveActivePage(page);
        this.saveTasksList(arr);
        this.saveFilter(filter);
    },

    saveTasksList: function (arr) {
        this.storage.setItem('tasks', JSON.stringify(arr));
    },

    saveFilter: function (filter) {
        this.storage.setItem('activeFilter', JSON.stringify(filter));
    },

    saveActivePage: function (page) {
        this.storage.setItem('activePage', JSON.stringify(page));
    }
};

var storage = new Storage();
