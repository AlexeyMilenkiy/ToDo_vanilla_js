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

    createArrayFromCollect: function() {
        var buttonCollect = document.querySelector('.paging-block').children;
        return Array.prototype.slice.call(buttonCollect);
    },

    findActivePagingBtn: function () {
        var that = this;
        var buttonArr = this.createArrayFromCollect();
        var activeBtnPaging = '';
        buttonArr.forEach(function(item) {
            if(item.matches('.active-button')){
                activeBtnPaging = item;
            }else{
                var buttonArr = that.createArrayFromCollect();
                buttonArr[0].classList.add('active-button');
                activeBtnPaging = buttonArr[0];
            }
        });
        return activeBtnPaging;
    },

    clearPagingBlock: function (pagingList) {
        while (pagingList.firstChild) {
            pagingList.removeChild(pagingList.firstChild);
        }
    },

    createBtnPaging: function (arr) {
        var quantityBtn = Math.ceil(arr.length/ this.indexPaging);
        var pagingBlock = document.querySelector('.paging-block');
        this.clearPagingBlock(pagingBlock);

        var fragment = document.createDocumentFragment();
        for(var i = 0; i < quantityBtn; i++){
            var pagingBtn = document.createElement('button');
            pagingBtn.classList.add('paging-button');
            pagingBtn.innerText = i+1 + '';
            fragment.appendChild(pagingBtn);
        }
        pagingBlock.appendChild(fragment);
    },

    returnPagingArray: function (btn, array) {
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

    // changeStateTask: function (arr) {
    //     this.activeBtn = this.findActivePagingBtn();
    //     this.showTasks(this.activeBtn, arr);
    //     // this.createBtnPaging(arr);
    // },



    // addClassBtnPaging: function (btn) {
    //     this.buttonCollect = document.querySelector('.paging-block').children;
    //     if(btn === undefined){
    //         btn = this.buttonCollect[0]
    //     }
    //     this.buttonArr = Array.prototype.slice.call(this.buttonCollect);
    //     this.buttonArr.forEach(function(item) {
    //         item.classList.remove('active-button');
    //     });
    //     btn.classList.add('active-button');
    // },

    // amountTasks: function (arr) {
    //     this.createBtnPaging(arr);
    //     this.addClassBtnPaging();
    //     if(arr.length <= this.indexPaging){
    //         app.render(arr)
    //     }
    // },


};

var paging = new Paging();
