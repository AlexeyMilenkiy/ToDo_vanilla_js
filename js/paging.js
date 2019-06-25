function Paging () {
    this.indexPaging = 5;

    this.pagingInit = function(){

    }
}

Paging.prototype = {

    clearPaging: function (pagingList) {
        while (pagingList.firstChild) {
            pagingList.removeChild(pagingList.firstChild);
        }
    },

    createBtnPaging: function (arr) {
        this.quantityBtn = Math.ceil(arr.length/ this.indexPaging);
        var pagingBlock = document.querySelector('.paging-block');
        this.clearPaging(pagingBlock);

        var fragment = document.createDocumentFragment();
        for(var i = 0; i < this.quantityBtn; i++){
            var pagingBtn = document.createElement('button');
            pagingBtn.classList.add('paging-button');
            pagingBtn.innerText = i+1 + '';
            fragment.appendChild(pagingBtn);
        }
        pagingBlock.appendChild(fragment);
    },

    showTasks: function (btnPag, arr) {
        this.btnPag = btnPag - 1;
        var startIndex = this.indexPaging * this.btnPag;
        var endIndex = this.indexPaging * this.btnPag + this.indexPaging;
        this.newArr = arr.slice(startIndex, endIndex);
        app.render(this.newArr);
    }
};

var paging = new Paging();
