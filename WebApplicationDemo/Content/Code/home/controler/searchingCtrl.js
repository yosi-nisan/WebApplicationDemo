var App;
(function (App) {
    var Home;
    (function (Home) {
        var Controller;
        (function (Controller) {
            var TaskCtrl = /** @class */ (function () {
                function TaskCtrl($scope, $http, urls) {
                    var _this = this;
                    this.$scope = $scope;
                    this.$http = $http;
                    this.urls = urls;
                    this.init = function () {
                        _this.$scope.data = new Array();
                        _this.$scope.getAllFromSession = _this.getAllFromSession;
                        _this.$scope.addTaskInSession = _this.addTaskInSession;
                        _this.$scope.deletedTaskFromSession = _this.deletedTaskFromSession;
                    };
                    this.getAllFromSession = function () {
                        _this.$scope.isSession = true;
                        _this.$http.get(_this.urls.home.getAllFromSession)
                            .then(function (res) {
                            _this.$scope.data = res.data.value;
                        });
                    };
                    this.addTaskInSession = function (task) {
                        _this.$http.post(_this.urls.home.addTaskInSession, { task: task })
                            .then(function (res) {
                            console.log(res);
                        });
                    };
                    this.deletedTaskFromSession = function (id) {
                        _this.$http.post(_this.urls.home.deletedTaskFromSession, id)
                            .then(function (res) {
                            console.log(res);
                        });
                    };
                    this.init();
                }
                ;
                TaskCtrl.$inject = ["$scope", "$http", 'urls'];
                TaskCtrl.ctrlName = 'searchingCtrl';
                return TaskCtrl;
            }());
            Controller.TaskCtrl = TaskCtrl;
            angular.module(App.Home.moduleName).controller(TaskCtrl.ctrlName, TaskCtrl);
        })(Controller = Home.Controller || (Home.Controller = {}));
    })(Home = App.Home || (App.Home = {}));
})(App || (App = {}));
//# sourceMappingURL=searchingCtrl.js.map