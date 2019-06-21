function Buttons () {}

Buttons.prototype = {
    addTask: function() {
    var buttonAdd = document.querySelector('.add-task');
        buttonAdd.addEventListener('click', function () {
            app.render();
        });
    }
}

var buttons = new Buttons ();

buttons.addTask();