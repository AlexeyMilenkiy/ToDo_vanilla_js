function Paging () {
    this.indexPaging = 5;
    this.isActivePage = null;

    this.pagingInit = function(callback){
        var that = this;
        var pagingBlock = document.querySelector('.paging-block');
        pagingBlock.onclick = function(e){
            var pushedBtnPaging = +e.target.textContent;
            if(e.target.tagName === 'DIV') return;
            that.isActivePage = pushedBtnPaging;
            callback();
        }
    }
}

Paging.prototype = {

    createArrayFromCollect: function() {
        var buttonCollect = document.querySelector('.paging-block').children;
        return Array.prototype.slice.call(buttonCollect);
    },

    changeClassBtnPaging: function () {
        var that = this;
        var buttonArr = this.createArrayFromCollect();
        buttonArr.forEach(function(item, i) {
            item.classList.remove('active-button');
            if(i+1 === that.isActivePage) item.classList.add('active-button');
        });
    },

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
        for(var i = 0; i < amountPages; i++){
            var pagingBtn = document.createElement('button');
            if(i+1 === that.isActivePage) pagingBtn.classList.add('active-button');
            pagingBtn.classList.add('paging-button');
            pagingBtn.innerText = i+1 + '';
            fragment.appendChild(pagingBtn);
        }
        pagingBlock.appendChild(fragment);
    },

    findActivePagingBtn: function () {
        var that = this;
        var buttonArr = this.createArrayFromCollect();
        if(!buttonArr.length) return this.isActivePage = null;
        buttonArr.some(function(item) {
            if(item.matches('.active-button')){
                that.isActivePage = +item.textContent;
            }else{
                that.isActivePage = 1;
            }});
        this.changeClassBtnPaging();
    },

    returnPagingArray: function (btn, array) {
        if(!btn){
            return array
        }
        btn = btn - 1;
        var startIndex = this.indexPaging * btn;
        var endIndex = this.indexPaging * btn + this.indexPaging;
        this.isActivePage = 1;
        return array.slice(startIndex, endIndex);
    },

    setPagingArray: function(arr) {
        this.createButtonPagination(arr);
        this.findActivePagingBtn();
        return this.returnPagingArray(this.isActivePage, arr);
    }
};

var paging = new Paging();
