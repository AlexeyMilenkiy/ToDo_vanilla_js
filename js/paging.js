function Paging () {
    this.indexPaging = 5;
    this.isActivePage = 1;

    this.initPagingListener = function(callback, arr) {
        var that = this;
        var pageFromStorage = storage.getStorage().activePage;
        if(pageFromStorage) that.isActivePage = pageFromStorage;
        this.createButtonPagination(arr);
        var pagingBlock = document.querySelector('.paging-block');
        pagingBlock.addEventListener('click', function(e){
            if(e.target.tagName === 'BUTTON') callback();
        });
    }
}

Paging.prototype = {

    clearPagingBlock: function (pagingList) {
        while (pagingList.lastChild) {
            pagingList.removeChild(pagingList.lastChild);
        }
    },

    createButtonPagination: function(arr) {
        var that = this;
        var pagingBlock = document.querySelector('.paging-block');
        var amountPages = Math.ceil(arr.length/ this.indexPaging);
        this.clearPagingBlock(pagingBlock);
        var fragment = document.createDocumentFragment();
        for(var i = 0; i < amountPages; i++) {
            var pagingBtn = document.createElement('button');
            pagingBtn.addEventListener('click', function(i) {
                return function () {
                    that.isActivePage = i+1;
                }
            }(i));
            if(amountPages < that.isActivePage) {
                that.isActivePage = amountPages;
            }if(i+1 === that.isActivePage) {
                pagingBtn.classList.add('active-btn');
                that.isActivePage = i+1;
            }
            pagingBtn.classList.add('paging-button');
            pagingBtn.innerText = i+1 + '';
            fragment.appendChild(pagingBtn);
        }
        pagingBlock.appendChild(fragment);
    },

    returnPagingArray: function (array) {
        var activeButton = this.isActivePage - 1;
        var startIndex = this.indexPaging * activeButton;
        var endIndex = this.indexPaging * activeButton + this.indexPaging;
        var newArr = array.slice(startIndex, endIndex);
        return [newArr, this.isActivePage];
    },

    setPagingArray: function(arr) {
        this.createButtonPagination(arr);
        return this.returnPagingArray(arr);
    }
};

var paging = new Paging();
