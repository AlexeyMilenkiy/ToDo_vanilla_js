function Paging () {
    this.indexPaging = 5;

    this.pagingInit = function(callback){
        var that = this;
        var pagingBlock = document.querySelector('.paging-block');
        pagingBlock.onclick = function(e){
            var pushedBtnPaging = e.target;
            if(e.target.tagName === 'DIV'){
                return
            }
            that.changeClassBtnPaging(pushedBtnPaging);
            callback();
        }
    }
}

Paging.prototype = {

    changeClassBtnPaging: function (btn) {
        var buttonArr = this.createArrayFromCollect();
        buttonArr.forEach(function(item) {
            item.classList.remove('active-button');
        });
        btn.classList.add('active-button');
    },

    createArrayFromCollect: function() {
        var buttonCollect = document.querySelector('.paging-block').children;
        return Array.prototype.slice.call(buttonCollect);
    },

    findActivePagingBtn: function () {
        var buttonArr = this.createArrayFromCollect();
        if(buttonArr.length === 0){
            return
        }
        var activeBtnPaging = null;
        var haveClass = buttonArr.some(function(item) {
            return item.matches('.active-button');
        });
        if(haveClass){
            buttonArr.forEach(function(item) {
                if(item.matches('.active-button')){
                   activeBtnPaging = item;
                }
            });
        }else{
            buttonArr[0].classList.add('active-button');
            activeBtnPaging = buttonArr[0];
        }

        return activeBtnPaging;
    },

    clearPagingBlock: function (pagingList) {
        while (pagingList.lastChild) {
            pagingList.removeChild(pagingList.lastChild);
        }
    },

    createBtnPaging: function (arr) {
        var pagingBlock = document.querySelector('.paging-block');
        if(arr.length === 0) {
            this.clearPagingBlock(pagingBlock);
        }
        var buttonArr = this.createArrayFromCollect();
        var activeBtn = null;
        if(buttonArr.length !== 0) {
            buttonArr.forEach(function(item, i){
                if(item.matches('.active-button'))
                    activeBtn = i;
            });
        }
        var quantityBtn = Math.ceil(arr.length/ this.indexPaging);
        this.clearPagingBlock(pagingBlock);

        var fragment = document.createDocumentFragment();
        for(var i = 0; i < quantityBtn; i++){
            var pagingBtn = document.createElement('button');
            pagingBtn.classList.add('paging-button');
            pagingBtn.innerText = i+1 + '';
            fragment.appendChild(pagingBtn);
        }
        pagingBlock.appendChild(fragment);
        if(activeBtn !== null && (this.createArrayFromCollect().length !== 0 && this.createArrayFromCollect().length === buttonArr.length )){
            this.createArrayFromCollect()[activeBtn].classList.add('active-button');
        }
    },

    returnPagingArray: function (btn, array) {
        if(!btn){
            return array
        }
        var activeBtn = +btn.textContent - 1;
        var startIndex = this.indexPaging * activeBtn;
        var endIndex = this.indexPaging * activeBtn + this.indexPaging;
        return array.slice(startIndex, endIndex);
    },

    setPagingArray: function(arr) {
        this.createBtnPaging(arr);
        var activeBtn = this.findActivePagingBtn(arr);
        return this.returnPagingArray(activeBtn, arr);
    }
};

var paging = new Paging();
