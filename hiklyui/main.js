(function () {
    seajs.config({
        base: "../",
        alias: {
            "app": "dist/js/app.js"
        }
    });
    seajs.use('hiklyui/js/baseView', function (a) {
        var b = new a();
    });
    var Workspace = Backbone.Router.extend({
        routes: {
            "button": "help"    // #help
        },
        help: function (path) {
            console.log(path);
            $(".content-wrapper").load("pages/" + path + ".html");
        }
    });
    Backbone.history.start()
})();


