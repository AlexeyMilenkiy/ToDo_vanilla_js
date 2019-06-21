function Button() {}

Button.prototype = {
    addTask: function() {
    var buttonAdd = document.querySelector('.add-task');
        buttonAdd.addEventListener('click', function () {
            app.render();
        });
    }
}

var button = new Button();

button.addTask();