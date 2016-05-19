define(function (require, exports, module) {


    var baseView = Backbone.View.extend({
        initialize: function () {
            this.render();
            require("app");
        },
        render: function () {
            
        }
    });
    module.exports = baseView;
});