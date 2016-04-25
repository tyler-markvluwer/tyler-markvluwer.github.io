System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AppModel;
    return {
        setters:[],
        execute: function() {
            AppModel = (function () {
                function AppModel() {
                }
                AppModel.getAppModel = function () {
                    return this.appModel;
                };
                AppModel.completeSet = function () {
                    this.appModel.setsCompleted--;
                };
                AppModel.appModel = new AppModel();
                return AppModel;
            }());
            exports_1("AppModel", AppModel);
        }
    }
});
//# sourceMappingURL=app.model.js.map