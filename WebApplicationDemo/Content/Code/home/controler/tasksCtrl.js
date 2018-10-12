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
                        _this.getAllFromSession();
                        _this.$scope.data = new Array();
                        _this.$scope.getAllFromSession = _this.getAllFromSession;
                        _this.$scope.addTaskToSession = _this.addTaskToSession;
                        _this.$scope.deletedTaskFromSession = _this.deletedTaskFromSession;
                        _this.$scope.updateTask = _this.updateTask;
                    };
                    this.getAllFromSession = function () {
                        _this.$scope.isSession = true;
                        _this.$http.get(_this.urls.home.getAllFromSession)
                            .then(function (res) {
                            _this.$scope.data = res.data.value;
                            if (res.data.value.length < 1) {
                                alert("אין משימות");
                            }
                        });
                    };
                    this.addTaskToSession = function () {
                        _this.$http.post(_this.urls.home.addTaskInSession, { task: _this.$scope.task })
                            .then(function (res) {
                            _this.$scope.task = new Infra.Model.Task();
                            _this.$scope.data = res.data.value;
                            console.log(res.data.value);
                        });
                    };
                    this.deletedTaskFromSession = function (name) {
                        _this.$http.post(_this.urls.home.deletedTaskFromSession, { name: name })
                            .then(function (res) {
                            _this.$scope.data = res.data.value;
                            console.log(res);
                        });
                    };
                    this.updateTask = function (task) {
                        task.update = false;
                        _this.$http.post(_this.urls.home.updateTask, task)
                            .then(function (res) {
                            console.log(res);
                        });
                    };
                    this.init();
                }
                ;
                TaskCtrl.$inject = ["$scope", "$http", 'urls'];
                TaskCtrl.ctrlName = 'tasksCtrl';
                return TaskCtrl;
            }());
            Controller.TaskCtrl = TaskCtrl;
            angular.module(App.Home.moduleName).controller(TaskCtrl.ctrlName, TaskCtrl);
        })(Controller = Home.Controller || (Home.Controller = {}));
    })(Home = App.Home || (App.Home = {}));
})(App || (App = {}));
//# sourceMappingURL=tasksCtrl.js.map