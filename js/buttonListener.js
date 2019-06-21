function Button() {}

Button.prototype = {
    addTask: function() {
    var buttonAdd = document.querySelector('.add-task');
        buttonAdd.addEventListener('click', function () {
            app.render();
        });
    }
};
