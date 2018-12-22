var app = {};

app.showMessage = function () {

    console.log("Hello World on click");
};

app.init = function () {

    app.element = document.getElementById("btn1");

    app.element.onclick = app.showMessage;

};