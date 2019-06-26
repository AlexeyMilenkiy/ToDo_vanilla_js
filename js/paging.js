function Paging () {
    this.indexPaging = 5;

    this.pagingInit = function(){
        var that = this;
        this.pagingBlock = document.querySelector('.paging-block');
        this.pagingBlock.onclick = function(e){
            this.pushBtnPaging = e.target;
            if(e.target.tagName === 'DIV'){
                return
            }
            // that.addClassBtnPaging(this.pushBtnPaging);
            that.showTasks(this.pushBtnPaging, app.listArr);
        }
    }
}

Paging.prototype = {

    changeStateTask: function (arr) {
        this.activeBtn = this.findActivePagingBtn();
        this.showTasks(this.activeBtn, arr);
        // this.createBtnPaging(arr);
    },

    findActivePagingBtn: function () {
        this.buttonCollect = document.querySelector('.paging-block').children;
        this.buttonArr = Array.prototype.slice.call(this.buttonCollect);
        var activeBtnPaging = '';
        this.buttonArr.forEach(function(item) {
            if(item.matches('.active-button'))
                activeBtnPaging = item;
        });
        return activeBtnPaging;
    },

    addClassBtnPaging: function (btn) {
        this.buttonCollect = document.querySelector('.paging-block').children;
        if(btn === undefined){
            btn = this.buttonCollect[0]
        }
        this.buttonArr = Array.prototype.slice.call(this.buttonCollect);
        this.buttonArr.forEach(function(item) {
            item.classList.remove('active-button');
        });
        btn.classList.add('active-button');
    },

    amountTasks: function (arr) {
        this.createBtnPaging(arr);
        this.addClassBtnPaging();
        if(arr.length <= this.indexPaging){
            app.render(arr)
        }
    },

    clearPagingBlock: function (pagingList) {
        while (pagingList.firstChild) {
            pagingList.removeChild(pagingList.firstChild);
        }
    },

    createBtnPaging: function (arr) {
        this.quantityBtn = Math.ceil(arr.length/ this.indexPaging);
        var pagingBlock = document.querySelector('.paging-block');
        this.clearPagingBlock(pagingBlock);

        var fragment = document.createDocumentFragment();
        for(var i = 0; i < this.quantityBtn; i++){
            var pagingBtn = document.createElement('button');
            pagingBtn.classList.add('paging-button');
            pagingBtn.innerText = i+1 + '';
            fragment.appendChild(pagingBtn);
        }
        pagingBlock.appendChild(fragment);
    },

    findFilter: function(arr) {
        var activeFilter = filter.findButton().textContent;
        this.filterArr = [];
        switch (activeFilter) {
            case 'All': {
                this.filterArr = arr;
            }break;
            case 'Active': {
                this.filterArr = arr.filter(function(item) {
                    return item.isComplete === false
                })
            }break;
            case 'Complete': {
                this.filterArr = arr.filter(function(item) {
                    return item.isComplete === true
                })
            }break;
        }return this.filterArr
    },

    showTasks: function (btnPag, arr) {
        this.findActivePagingBtn();
        this.btnPag = +btnPag.textContent - 1;
        var startIndex = this.indexPaging * this.btnPag;
        var endIndex = this.indexPaging * this.btnPag + this.indexPaging;
        this.newArr = arr.slice(startIndex, endIndex);
        this.addClassBtnPaging(btnPag);
        app.render(this.newArr);
    }
};

var paging = new Paging();
