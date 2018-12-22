var app = {};

app.showMessage = function () {

    console.log("Hello World on click");
};

app.init = function () {

    app.element = document.getElementById("btn1");

    app.element.onclick = app.printAllObject;

};

app.printAllObject = function () {

    var obj = window;

    do Object.getOwnPropertyNames(obj).forEach(function (name) {
        console.log(name);
    });
    while (obj = Object.getPrototypeOf(obj));
}

app.oldwayPrintAllObject = function () {
    for (var key in window) {
        console.log(key);
    }
}
