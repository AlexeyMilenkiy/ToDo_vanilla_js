function Paging () {
    this.indexPaging = 5;
}

Paging.prototype = {

    showBtnPagigng: function (arr) {
        this.quantityBtn = arr.length/ this.indexPaging;
        this.pagignBlock = document.querySelector('.paging-block');
        this.pagigngBtn
        var fragment = document.createDocumentFragment();
        for(var i = 0; i < this.quantityBtn; i++){
            fragment.appendChild()
        }
        this.pagignBlock
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
