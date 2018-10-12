var App;
(function (App) {
    var Service;
    (function (Service) {
        var Urls = /** @class */ (function () {
            function Urls() {
                this.home = {
                    emptyIndex: this.root + '',
                    indexView: this.root + '/Home/Index',
                    example1: this.root + '/Home/Example1',
                    example2: this.root + '/Home/Example2',
                    addStrSearchToSession: this.root + '/Home/AddStrSearchToSession',
                    getAllFromSession: this.root + '/Home/GetAllFromSession',
                    addTaskInSession: this.root + '/Home/AddTaskInSession',
                    deletedTaskFromSession: this.root + '/Home/DeletedTaskFromSession',
                    updateTask: this.root + '/Home/UpdateTask',
                };
            }
            Object.defineProperty(Urls.prototype, "root", {
                get: function () {
                    return theRoot ? theRoot : "";
                },
                enumerable: true,
                configurable: true
            });
            Urls.srvName = 'urls';
            return Urls;
        }());
        Service.Urls = Urls;
        angular.module(App.moduleName).constant(Urls.srvName, new Urls());
    })(Service = App.Service || (App.Service = {}));
})(App || (App = {}));
//# sourceMappingURL=urls.js.map